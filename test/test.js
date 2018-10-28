const sumOfOther = require('../src/sumOfOther');
const make = require('../src/make');
const recursion = require('../src/recursion');
const assert = require('assert');

describe('Summarize values', function () {
  describe('#sumOfOther()', function () {
    it('passed with result [8, 7, 6, 9]', function () {
      assert.equal(JSON.stringify([8, 7, 6, 9]), JSON.stringify(sumOfOther([2, 3, 4, 1])));
    });
    it('passed with result [17, 15, 12, 7]', function () {
      assert.equal(JSON.stringify([17, 15, 12, 7]), JSON.stringify(sumOfOther([0, 2, 5, 10])));
    });
    it('passed with result [NaN, NaN, NaN, NaN, NaN]', function () {
      assert.equal(JSON.stringify([NaN, NaN, NaN, NaN, NaN]), JSON.stringify(sumOfOther([2, 3, 4, 1, NaN])));
    });
    it('passed with result []', function () {
      assert.equal(JSON.stringify([]), JSON.stringify(sumOfOther([])));
    });
  });
  describe('#make()', function () {
    it('sum passed result 777', function () {
      function sum(a, b) {
        return a + b;
      }

      assert.equal(777, make(15)(34, 21, 666)(41)(sum));
    });
    it('subtract passed result 3', function () {
      function subtract(a, b) {
        return a - b;
      }

      assert.equal(3, make(20)(10, 2)(5)(subtract));
    });
    it('multiply passed result 200', function () {
      function multiply(a, b) {
        return a * b;
      }

      assert.equal(200, make(2)(10, 2)(5)(multiply));
    });
    it('doNothing passed result [ [ [ 2, 10 ], 2 ], 5 ]', function () {
      function doNothing(a, b) {
        return [a, b];
      }

      assert.equal(JSON.stringify([[[2, 10], 2], 5]), JSON.stringify(make(2)(10, 2)(5)(doNothing)));
    });
  });
  describe('#recursion()', function () {
    it('passed with result [[100], [90, 120], [70, 99, 110, 130]]', function () {
      let tree = {
        'value': 100,
        'left': {
          'value': 90,
          'left': { 'value': 70 },
          'right': { 'value': 99 }
        },
        'right': {
          'value': 120,
          'left': { 'value': 110 },
          'right': { 'value': 130 }
        }
      };
      assert.equal(JSON.stringify([[100], [90, 120], [70, 99, 110, 130]]), JSON.stringify(recursion(tree)));
    });
    it('passed with result [[100], [75, 120], [60, 99, 110, 130],[50]]', function () {
      let tree = {
        'value': 100,
        'left': {
          'value': 75,
          'left': {
            'value': 60,
            'left': { 'value': 50 }
          },
          'right': { 'value': 99 }
        },
        'right': {
          'value': 120,
          'left': { 'value': 110 },
          'right': { 'value': 130 }
        }
      };
      assert.equal(JSON.stringify([[100], [75, 120], [60, 99, 110, 130], [50]]), JSON.stringify(recursion(tree)));
    });

  });
});
