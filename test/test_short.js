const assert = require('assert');
const moment = require('moment');
const humanize = require('..');
const short = humanize.short;

describe('short', function() {
  it('should not care about order', function() {
    assert.equal(short(1, 0), '1ms');
  });

  it('should return "now"', function() {
    assert.equal(short(0, 0), 'now');
  });

  it('should return 1ns', function() {
    assert.equal(short(0, 1e-6), '1ns');
  });

  it('should return 999ns', function() {
    assert.equal(short(0, 0.000999), '999ns');
  });

  it('should return 1μs', function() {
    assert.equal(short(0, 1e-3), '1μs');
  });

  it('should return 999μs', function() {
    assert.equal(short(0, 0.999), '999μs');
  });

  it('should return 1ms', function() {
    assert.equal(short(0, 1), '1ms');
  });

  it('should return 2ms', function() {
    assert.equal(short(0, 2), '2ms');
  });

  it('should return 999ms', function() {
    assert.equal(short(0, 999), '999ms');
  });

  it('should return 1s', function() {
    assert.equal(short(0, 1000), '1s');
  });

  it('should return 59s', function() {
    const now = moment();
    const then = moment().add(59, 'seconds');

    assert.equal(short(now, then), '59s');
  });

  it('should return 1m', function() {
    const now = moment();
    const then = moment().add(1, 'minute');

    assert.equal(short(now, then), '1m');
  });

  it('should return 59m', function() {
    const now = moment();
    const then = moment().add(59, 'minutes');

    assert.equal(short(now, then), '59m');
  });

  it('should return 1h', function() {
    const now = moment();
    const then = moment().add(1, 'hour');

    assert.equal(short(now, then), '1h');
  });

  it('should return 23h', function() {
    const now = moment();
    const then = moment().add(23, 'hours');

    assert.equal(short(now, then), '23h');
  });

  it('should return 1d', function() {
    const now = moment();
    const then = moment().add(1, 'day');

    assert.equal(short(now, then), '1d');
  });

  it('should return 6d', function() {
    const now = moment();
    const then = moment().add(6, 'days');

    assert.equal(short(now, then), '6d');
  });

  it('should return 1w', function() {
    const now = moment();
    const days = moment().add(7, 'days');
    const week = moment().add(1, 'week');

    assert.equal(short(now, days), '1w');
    assert.equal(short(now, week), '1w');
  });

  it('should return 51w', function() {
    const now = moment();
    const then = moment().add(51, 'weeks');

    assert.equal(short(now, then), '51w');
  });

  it('should return 1y', function() {
    const now = moment();
    const then = moment().add(1, 'year');

    assert.equal(short(now, then), '1y');
  });

  it('should return 2y', function() {
    const now = moment();
    const then = moment().add(2, 'years');

    assert.equal(short(now, then), '2y');
  });

  it('should return 25y', function() {
    const now = moment();
    const then = moment().add(25, 'years');

    assert.equal(short(now, then), '25y');
  });

  it('should accept [second, nanosecond] arrays', function() {
    const now = [0, 5000000];
    const then = [0, 0];

    assert.equal(short(now, then), '5ms');
  });

  it('should accept a single argument', function() {
    assert.equal(short(100), '100ms');
  });

  it('should return 1ms', function() {
    assert.equal(short(-1), '1ms');
  });

  it('should accept "short" as the second argument to tinyHumanTime', function() {
    assert.equal(humanize(100, 'short'), '100ms');
  });
});
