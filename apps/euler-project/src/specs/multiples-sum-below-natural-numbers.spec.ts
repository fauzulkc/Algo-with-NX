/*
 *
 *  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 */

import checkMultiples from '../problems/multiples-sum-below-natural-numbers';

describe('check multiples of 3 and 5 below 10', () => {
  it('should return 23', () => {
    expect(checkMultiples(10, [3, 5])).toBe(23);
  });
});

describe('check multiples of 3 and 5 below 1000', () => {
  it('should return 23', () => {
    expect(checkMultiples(1000, [3, 5])).toBe(233168);
  });
});
