class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
}

Driver.prototype.yearsExperienceFromBeginningOf = function(endDate) {
  return Math.abs(this.startDate.getUTCFullYear() - endDate);
};


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation;
  }
}

Route.prototype.blocksTravelled = function() {
  function horizontalDistance(start, end){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let start_index = eastWest.indexOf(start);
    let end_index = eastWest.indexOf(end);
    return Math.abs(start_index - end_index);
  }

  function verticalDistance(start, end){
    return Math.abs(start.split("th")[0] - end.split("th")[0]);
  }

  return horizontalDistance(this.beginningLocation.horizontal, this.endingLocation.horizontal) + verticalDistance(this.beginningLocation.vertical, this.endingLocation.vertical);

};

Route.prototype.estimatedTime = function(peak = false) {
  let blocksPerMinute = peak ? 2 : 3;
  return this.blocksTravelled() / blocksPerMinute;
};
