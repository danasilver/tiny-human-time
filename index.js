'use strict';

module.exports = function(t1, t2) {
  let milli = Math.abs(t2 - t1);

  if (milli < 1000)         return plural(milli, 'millisecond');
  if ((milli /= 1000) < 60) return plural(Math.floor(milli), 'second');
  if ((milli /= 60) < 60)   return plural(Math.floor(milli), 'minute');
  if ((milli /= 60) < 24)   return plural(Math.floor(milli), 'hour');
  if ((milli /= 24) < 7)    return plural(Math.floor(milli), 'day');
  if ((milli /= 7) < 52)    return plural(Math.floor(milli), 'week');
  return plural(Math.floor(milli / 52), 'year');
};

function plural(n, unit) {
  return `${n} ${unit}${n === 1 ? '' : 's'}`
}
