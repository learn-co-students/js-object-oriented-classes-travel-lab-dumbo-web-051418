class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear();
    return year - startYear;
  };
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let totalBlocks = 0

    if (this.beginningLocation.vertical < this.endingLocation.vertical) {
      let difference = this.endingLocation.vertical - this.beginningLocation.vertical;
      totalBlocks += difference
    } else {
      let difference = this.beginningLocation.vertical - this.endingLocation.vertical;
      totalBlocks += difference
    };

    let indexBeginningHoriz = eastWest.findIndex(location => location == this.beginningLocation.horizontal);
    let indexEndingHoriz = eastWest.findIndex(location => location == this.endingLocation.horizontal);


    if (indexBeginningHoriz < indexEndingHoriz) {
      let difference = indexEndingHoriz - indexBeginningHoriz;
      totalBlocks += difference
    } else {
      let difference = indexBeginningHoriz - indexEndingHoriz;
      totalBlocks += difference
    };
    return totalBlocks;
  }

  estimatedTime(peak = false) {
    let totalBlocks = this.blocksTravelled();
    if (peak === false) {
      return totalBlocks/3;
    } else {
      return totalBlocks/2;
    }
  };

}
