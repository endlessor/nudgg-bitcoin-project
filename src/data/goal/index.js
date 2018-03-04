export const GOAL_TYPES = [
  {
    key: 'travel',
    name: 'Travel',
    image: '/assets/images/add-goal/travel.jpg'
  },
  {
    key: 'house',
    name: 'A House',
    image: '/assets/images/add-goal/home.jpg'
  },
  {
    key: 'car',
    name: 'A Car',
    image: '/assets/images/add-goal/car.jpg'
  },
  {
    key: 'other',
    name: 'Other',
    image: '/assets/images/add-goal/other.jpg'
  }
]

export const carouselOptions = {
  slideWidth: 0.35,
  frameOverflow: 'visible',
  cellSpacing: 15,
  breakPoints: {
    1024: {
      slideWidth: 0.35
    },
    768: {
      slideWidth: 0.60
    },
    480: {
      slideWidth: 0.80
    }
  }
}
