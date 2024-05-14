/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 */

import { checkLargestPrimeFactor } from '../problems/largest-prime-factor';

describe('largest prime factor', () => {
  it('should return largest prime factor', () => {
    console.log(checkLargestPrimeFactor(13195));
    expect(checkLargestPrimeFactor(13195)).toEqual(29);
    expect(checkLargestPrimeFactor(600851475143)).toEqual(6857);
  });
});
