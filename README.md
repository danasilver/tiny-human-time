<h3 align="center">
  <img src="http://i.giphy.com/DluPT7dZ0uXg4.gif">
</h3>

<h3 align="center">Tiny Human Time</h3>

<p align="center">
  A tiny module for human readable timespans.
</p>

[![Build Status](https://travis-ci.org/danasilver/tiny-human-time.svg?branch=master)](https://travis-ci.org/danasilver/tiny-human-time)

## API

### `humanize(t1, t2)`

What you get when you `require('tiny-human-time')`.

`t1` and `t2` are instances of `Date` or integers whose value relative to one
another is given in milliseconds. Their order doesn't matter.

Returns the converted value and the greatest matching unit
without going over. For example, `23 hours` will be followed by `1 day`.

Supports:

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
