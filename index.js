class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return Math.abs(year - this.startDate.getFullYear());
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const beginningH = eastWest.indexOf(this.beginningLocation.horizontal);
    const endingH = eastWest.indexOf(this.endingLocation.horizontal);
    const horizontalDistance = Math.abs(beginningH - endingH);
    const verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalDistance + verticalDistance;
  }

  estimatedTime(isPeak) {
    return isPeak ? this.blocksTravelled()/2 : this.blocksTravelled()/3
  }
}
