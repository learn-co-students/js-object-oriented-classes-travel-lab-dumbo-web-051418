class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(inputYear) {
    return inputYear - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest =
    {
    '1st Avenue': 1,
    '2nd Avenue': 2,
    '3rd Avenue': 3,
    'Lexington Avenue': 4,
    'Park': 5,
    'Madison Avenue': 6,
    '5th Avenue': 7
    }

    const theKeys = Object.keys(eastWest)

    let endHorizontal = ""
    let begHorizontal = ""

    if(theKeys.includes(this.endingLocation.horizontal)) {
      endHorizontal = eastWest[this.endingLocation.horizontal]
    }

    if(theKeys.includes(this.beginningLocation.horizontal)) {
      begHorizontal = eastWest[this.beginningLocation.horizontal]
    }

    const horizontalDistance = endHorizontal - begHorizontal

    const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical

    const distance = horizontalDistance + verticalDistance

    return distance
  }

  estimatedTime(boolean) {
    let result = 0
    if(boolean) {
      result = this.blocksTravelled() / 2
    } else {
      result = this.blocksTravelled() / 3
    }
    return result
  }

}
