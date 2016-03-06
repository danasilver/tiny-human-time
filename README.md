<h3 align="center">
  <img src="http://i.giphy.com/DluPT7dZ0uXg4.gif">
</h3>

<h3 align="center">Tiny Human Time</h3>

<p align="center">
  A tiny module for human readable timespans.
</p>

[![Build Status](https://travis-ci.org/danasilver/tiny-human-time.svg?branch=master)](https://travis-ci.org/danasilver/tiny-human-time)

## API

### `humanize(t1, t2 [, units])`

What you get when you `require('tiny-human-time')`.

`t1` and `t2` are instances of `Date` or integers whose value relative to one
another is given in milliseconds. Their order doesn't matter.

If `t2` is not given, `t1` alone will be used as the timespan relative to 0.

Either argument can be an array of the form `[seconds, nanoseconds]`, like
that produced by
[process.hrtime()](https://nodejs.org/api/process.html#process_process_hrtime).

An optional last argument, `units` has possible values `short` and `long`,
defaulting to `long`. `units` can be given as the last argument even if
`t2` is not given.

Returns the converted value and the greatest matching unit
without going over. For example, `23 hours` will be followed by `1 day`.

### `humanize.short(t1, t2)`

A convenience method to use `short` units. The possible arguments for `t1` and
`t2` are the same as `humanize`.

## Supports:

 - nanoseconds
 - microseconds
 - milliseconds
 - seconds
 - minutes
 - hours
 - days
 - weeks
 - years

## Usage

```js
const humanize = require('tiny-human-time');

const now = new Date(2016, 3, 5);
const later = new Date(2016, 3, 6);

humanize(now, later);
// => 1 day
```

```js
const humanize = require('tiny-human-time');

const start = process.hrtime()
// and then a miracle occurs
const elapsed = process.hrtime(start)

humanize(elapsed)
// => 23 microseconds
```

```js
const humanize = require('tiny-human-time').short;

humanize(1)
// => 1ms
```
