import React, { Component} from 'react'

import { Grid, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import {
  addFilter,
  removeFilter
} from 'actions/news/index'

import {
  getFeaturedArticle,
  getSmallArticles,
  getMediumArticles
} from 'selectors/news'

import View from 'components/other/View'
import { NEWS as title } from 'data/titles'

import Collapsible from 'react-collapsible'

import NewsTwitter from 'containers/news/NewsTwitter'

import Heading from 'components/gui/Heading'
import Link from 'components/gui/Link'
import Button from 'components/gui/Button'

import NewsFilter from 'components/news/NewsFilter'
import NewsTileBig from 'components/news/NewsTileBig'
import NewsTileSmall from 'components/news/NewsTileSmall'
import NewsTileMedium from 'components/news/NewsTileMedium'
import NewsTilePopup from 'components/news/NewsTilePopup'

import Loader from 'components/gui/Loader'

import Popup from 'components/common/Popup'

import { includes } from 'utils/array'

import { getTwitterArticles, getWordpressArticles, filterData } from 'actions/news'

// Mockup data
import {
  filters,
  MINIMUM_FILTERS_COUNT
} from 'data/news'

@connect(
  ({ news }) => ({
    articles: news.feed,
    activeFilters: news.filters,
    featuredArticle: getFeaturedArticle(news),
    smallArticles: getSmallArticles(news),
    mediumArticles: getMediumArticles(news),
    wordpressArticlesFilters: news.wordpressArticlesFilters,
    twitterArticles: news.twitterArticles,
    isRequesting: news.isRequesting
  }),
  (dispatch) => ({
    addFilter: (filter) => dispatch(addFilter(filter)),
    removeFilter: (filter) => dispatch(removeFilter(filter)),
    getTwitterArticles: () => dispatch(getTwitterArticles()),
    getWordpressArticles: () => dispatch(getWordpressArticles()),
    filterData: () => dispatch(filterData())
  })
)

class News extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeNewsId: null,
      isPopupVisible: false,
      isFeedVisible: false,
      showMoreNum: 0
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleOpenPopup = this.handleOpenPopup.bind(this)
    this.handleClosePopup = this.handleClosePopup.bind(this)
    this.showFeed = this.showFeed.bind(this)
    this.showInitial = this.showInitial.bind(this)
    this.showMore = this.showMore.bind(this)
  }

  // componentWillReceiveProps (nextProps) {
  //   nextProps.wordpressArticlesFilters && this.setState({ wordpressArticlesFilters: nextProps.wordpressArticlesFilters })
  // }

  componentWillMount () {
    this.props.getTwitterArticles()
    this.props.getWordpressArticles()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isRequesting !== this.props.isRequesting) {
      const {activeFilters, filterData} = this.props
      if (activeFilters.length >= 2) {
        this.showFeed()
        filterData()
      }
    }
  }

  handleFilterChange (_, meta) {
    this.setState({ showMoreNum: 0 })

    const {
      addFilter,
      removeFilter,
      activeFilters
    } = this.props

    const {
      isFeedVisible
    } = this.state

    const {
      value,
      isActive
    } = meta

    if (!isActive && activeFilters.length <= 2) {
      return
    }

    if (isActive) {
      addFilter(value)
    } else {
      removeFilter(value)
    }

    this.props.filterData()
  }

  handleOpenPopup (_, meta) {
    const { id } = meta

    this.setState({
      activeNewsId: id,
      isPopupVisible: true
    })
  }

  handleClosePopup () {
    this.setState({
      isPopupVisible: false
    })
  }

  showFeed () {
    this.setState({
      isFeedVisible: true
    })
  }

  showInitial () {
    this.setState({
      isFeedVisible: false
    })
  }

  showMore () {
    this.setState({
      showMoreNum: this.state.showMoreNum + 1
    })
  }

  // Render methods -----------------------------

  renderInitial () {
    const { isFeedVisible } = this.state

    const { activeFilters } = this.props
    const filtersCount = activeFilters.length
    const canProgress = filtersCount >= MINIMUM_FILTERS_COUNT

    const isFilterActive = filter => includes(activeFilters, filter)

    if (!isFeedVisible) {
      return (
        <div className='news-initial view'>
          <Grid>
            <Col xs={8} md={4}>
              <Heading
                size={2}
                modifier={['color-white', 'font-normal', 'font-roboto']}
                children='First things first,'
              />
              <Heading
                size={4}
                modifier={['color-white', 'font-normal', 'font-roboto']}
                className='news-initial__small-title'
                children='Select a minimum of two topics to personalize your news feed'
              />
            </Col>
          </Grid>
          <Grid className='news-initial__filters'>
            <Col md={6}>
              {filters.map((filter, index) => (
                <div className='news-initial__filter' key={filter.title}>
                  <NewsFilter
                    title={filter.title}
                    value={filter.value}
                    isActive={isFilterActive(filter.value)}
                    handleChange={this.handleFilterChange}
                  />
                </div>
              ))}
            </Col>
          </Grid>
          <div className='container'>
            <Collapsible
              open={canProgress}
              easing='cubic-bezier(0.25, .1, 0.25, 1)'
            >
              <div>
                <div className='news-initial__all-set'>
                  All set, let’s build your feed
                </div>
                <Button
                  modifier={['bg-aqua']}
                  handleClick={this.showFeed}
                  className='news-initial__show-feed'>
                  Show me my feed
                </Button>
              </div>
            </Collapsible>
          </div>
        </div>
      )
    }
  }

  renderFeed () {
    const {
      activeNewsId,
      isPopupVisible,
      isFeedVisible,
      showMoreNum
    } = this.state

    const {
      activeFilters,
      twitterArticles = [],
      wordpressArticlesFilters
    } = this.props

    const isFilterActive = filter => includes(activeFilters, filter)

    const activeNews = wordpressArticlesFilters.find(article => article.id === activeNewsId)

    const showNum = 0

    if (isFeedVisible) {
      return (
        <div className='news-feed'>
          <div className='news__filters'>
            <div className='news__filters-container container'>
              <div className='news__filters-content'>
                {filters.map((filter, index) => (
                  <NewsFilter
                    key={filter.value}
                    {...filter}
                    isActive={isFilterActive(filter.value)}
                    handleChange={this.handleFilterChange}
                    className='news__filters-item'
                  />
                ))}
                <Button
                  modifier={[
                    'color-white',
                    'font-roboto',
                    'font-light',
                    'font-italic',
                    'font-uppercase',
                    'with-border'
                  ]}
                  handleClick={this.showInitial}
                  className='news__btn-more-topics'
                >
                  + More topics
                </Button>
              </div>
            </div>
          </div>
          <Grid className='news__feed'>
            <Col md={7} className="col-xs-12">
              <div className='news__featured-article col-xs-12 no-padding'>
                {wordpressArticlesFilters.length > 0 &&
                  <NewsTileBig
                    {...(wordpressArticlesFilters[showNum])}
                    handleClick={this.handleOpenPopup}
                  />
                }
              </div>
              <div className='news__articles col-xs-12 no-padding'>
                {wordpressArticlesFilters.slice(showNum + 1, showNum + 3).map((article, index) => (
                  <div className='news__tile col-xs-12 col-sm-6 news__tile__medium' key={article.id}>
                    <NewsTileSmall
                      {...article}
                      handleClick={this.handleOpenPopup}
                    />
                  </div>
                ))}
              </div>
              <div className='news__medium-articles col-xs-12 no-padding'>
                {wordpressArticlesFilters.slice(showNum + 4, showNum + 6 + showMoreNum).map((article, index) => (
                  <div className='news__tile' key={article.id}>
                    <NewsTileMedium
                      {...article}
                      handleClick={this.handleOpenPopup}
                    />
                  </div>
                ))}
              </div>
              {wordpressArticlesFilters.length > 0 &&
                <div className="load-more-button col-xs-12 no-padding">
                  <Button
                    handleClick={this.showMore}
                    className='news-initial__load-more'>
                    Load More
                  </Button>
                </div>
              }
              {wordpressArticlesFilters.length === 0 &&
                <div className="col-xs-12 no-padding" style={{textAlign: 'center'}}>
                  <p><i>No articles available, please try selecting different filters</i></p>
                </div>
              }
            </Col>
            <Col md={4} mdOffset={1} className='col-xs-12'>
              <NewsTwitter tweets={twitterArticles} />
            </Col>
          </Grid>
          <Popup isVisible={isPopupVisible} handleClose={this.handleClosePopup}>
            { activeNews && <NewsTilePopup {...activeNews} /> }
          </Popup>
        </div>
      )
    }
  }

  render () {
    return (
      <View title={title}>
        <div className='news'>
          {this.renderInitial()}
          {this.renderFeed()}
        </div>
        <Loader isVisible={this.props.isRequesting} />
      </View>
    )
  }
}

export default News
