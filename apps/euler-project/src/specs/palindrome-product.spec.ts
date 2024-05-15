/*
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

import { largestPalindromeFromProductOfXNumbers } from '../problems/palindrome-product';

describe('Largest palindrome from product of three numbers', () => {
  it('should return a Palindrome of 9009 when x = 2', () => {
    // Warning Slow Process beyond 3 numbers which is equivalent to inverse looping from 999 to 99
    expect(largestPalindromeFromProductOfXNumbers(2)).toBe(9009);
  });
  it('should return a Palindrome of 906609 when x = 3', () => {
    // Warning Slow Process beyond 3 numbers which is equivalent to inverse looping from 999 to 99
    expect(largestPalindromeFromProductOfXNumbers(3)).toBe(906609);
  });
  it.skip('should return a Palindrome of 99000099 when x = 4', () => {
    // Warning Slow Process beyond 3 numbers which is equivalent to inverse looping from 999 to 99
    expect(largestPalindromeFromProductOfXNumbers(4)).toBe(99000099);
  });
});
