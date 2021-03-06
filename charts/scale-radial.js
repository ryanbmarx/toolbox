import {scaleLinear} from 'd3';

// A helper scale to make radial charts. Lifted from https://github.com/d3/d3-scale/issues/90 by Bostock.

function scaleRadial() {
  var domain = [0, 1],
      range = [0, 1];

  function scale(x) {
    var r0 = range[0] * range[0], r1 = range[1] * range[1];
    return Math.sqrt((x - domain[0]) / (domain[1] - domain[0]) * (r1 - r0) + r0);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = [+_[0], +_[1]], scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], scale) : range.slice();
  };

  scale.ticks = function(count) {
    return scaleLinear().domain(domain).ticks(count);
  };

  scale.tickFormat = function(count, specifier) {
    return scaleLinear().domain(domain).tickFormat(count, specifier);
  };

  return scale;
}

module.exports = scaleRadial;