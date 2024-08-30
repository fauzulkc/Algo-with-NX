/*
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

import { smallestMultipleInRange } from '../problems/smallest-number-divisible-by-range';

describe('Smallest multiple', () => {
  it('Smallest multiple', () => {
    expect(smallestMultipleInRange(20)).toBe(232792560);
  });
  console.log(smallestMultipleInRange(20));
});
