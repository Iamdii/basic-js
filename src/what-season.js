module.exports = function getSeason(date) {
  if(date === undefined) {
    return "Unable to determine the time of year!";
  }

  if(!(date instanceof Date)) {
    throw new Error();
  }

  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  return seasons[Date.prototype.getMonth.call(date)];
};
