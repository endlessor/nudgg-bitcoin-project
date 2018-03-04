import React, { Component } from 'react'

import View from 'components/other/View'
import { ADD_GOAL as title } from 'data/titles'

import AddGoalContainer from 'containers/addGoal/AddGoal'

class AddGoal extends Component {
  render () {
    return (
      <View title={title} className='add-goal'>
        <AddGoalContainer />
      </View>
    )
  }
}

export default AddGoal