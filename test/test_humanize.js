const assert = require('assert');
const moment = require('moment');
const humanize = require('..');

describe('humanize', function() {
  it('should not care about order', function() {
    assert.equal(humanize(1, 0), '1 millisecond');
  });

  it('should return 0 milliseconds', function() {
    assert.equal(humanize(0, 0), 'just now');
  });

  it('should return 1 nanosecond', function() {
    assert.equal(humanize(0, 1e-6), '1 nanosecond');
  });

  it('should return 999 nanoseconds', function() {
    assert.equal(humanize(0, 0.000999), '999 nanoseconds');
  });

  it('should return 1 microsecond', function() {
    assert.equal(humanize(0, 1e-3), '1 microsecond');
  });

  it('should return 999 microseconds', function() {
    assert.equal(humanize(0, 0.999), '999 microseconds');
  });

  it('should return 1 millisecond', function() {
    assert.equal(humanize(0, 1), '1 millisecond');
  });

  it('should return 2 milliseconds', function() {
    assert.equal(humanize(0, 2), '2 milliseconds');
  });

  it('should return 999 milliseconds', function() {
    assert.equal(humanize(0, 999), '999 milliseconds');
  });

  it('should return 1 second', function() {
    assert.equal(humanize(0, 1000), '1 second');
  });

  it('should return 59 seconds', function() {
    const now = moment();
    const then = moment().add(59, 'seconds');

    assert.equal(humanize(now, then), '59 seconds');
  });

  it('should return 1 minute', function() {
    const now = moment();
    const then = moment().add(1, 'minute');

    assert.equal(humanize(now, then), '1 minute');
  });

  it('should return 59 minutes', function() {
    const now = moment();
    const then = moment().add(59, 'minutes');

    assert.equal(humanize(now, then), '59 minutes');
  });

  it('should return 1 hour', function() {
    const now = moment();
    const then = moment().add(1, 'hour');

    assert.equal(humanize(now, then), '1 hour');
  });

  it('should return 23 hours', function() {
    const now = moment();
    const then = moment().add(23, 'hours');

    assert.equal(humanize(now, then), '23 hours');
  });

  it('should return 1 day', function() {
    const now = moment();
    const then = moment().add(1, 'day');

    assert.equal(humanize(now, then), '1 day');
  });

  it('should return 6 days', function() {
    const now = moment();
    const then = moment().add(6, 'days');

    assert.equal(humanize(now, then), '6 days');
  });

  it('should return 1 week', function() {
    const now = moment();
    const days = moment().add(7, 'days');
    const week = moment().add(1, 'week');

    assert.equal(humanize(now, days), '1 week');
    assert.equal(humanize(now, week), '1 week');
  });

  it('should return 51 weeks', function() {
    const now = moment();
    const then = moment().add(51, 'weeks');

    assert.equal(humanize(now, then), '51 weeks');
  });

  it('should return 1 year', function() {
    const now = moment();
    const then = moment().add(1, 'year');

    assert.equal(humanize(now, then), '1 year');
  });

  it('should return 2 years', function() {
    const now = moment();
    const then = moment().add(2, 'years');

    assert.equal(humanize(now, then), '2 years');
  });

  it('should return 25 years', function() {
    const now = moment();
    const then = moment().add(25, 'years');

    assert.equal(humanize(now, then), '25 years');
  });

  it('should accept [second, nanosecond] arrays', function() {
    const now = [0, 5000000];
    const then = [0, 0];

    assert.equal(humanize(now, then), '5 milliseconds');
  });

  it('should accept a single argument', function() {
    assert.equal(humanize(100), '100 milliseconds');
  });

  it('should return 1 millisecond', function() {
    assert.equal(humanize(-1), '1 millisecond');
  });

  it('should accept "long" as the second argument to tinyHumanTime', function() {
    assert.equal(humanize(100, 'long'), '100 milliseconds');
  });
});
