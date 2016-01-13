/*!
 * random-maker - lib/es6/random_maker.js
 * Copyright(c) 2014 jerry wu <perzy_wu@163.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies
 */
const _ = require('lodash');

/**
 * new RandomMaker([1,2,3]).next();
 * new RandomMaker(100).next().batch(5);
 */
class RandomMaker {
  constructor(source) {
    if (Number.isInteger(source)) {
      let array = [];
      if (source > 0) {
        for (let i = 1; i <= source; i++) {
          array.push(i);
        }
      } else if (source < 0) {
        for (let i = source; i < 0; i++) {
          array.push(i);
        }
      } else {
        array.push(source);
      }

      source = array;
    }

    if (!Array.isArray(source)) {
      source = [];
    }

    this._array = source;
    this._set = new Set();

    const self = this;
    source.forEach(val => {
      self._set.add(val);
    });
  }

  next() {
    const self = this;

    let index = _.random(0, self._array.length - 1);
    let value = self._array[index];
    self._set.delete(value);
    self._array = Array.from(self._set);

    return value;
  }

  batch(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(this.next());
    }

    return arr;
  }
}

exports.RandomMaker = RandomMaker;

