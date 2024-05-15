export const isPalindrome = (number: number): boolean => {
  const numberToString = number.toString();
  return numberToString === numberToString.split('').reverse().join('');
};

export const largestPalindromeFromProductOfXNumbers = (x: number): number => {
  if (x < 1) {
    throw new Error('x must be greater than 0');
  }
  const palindromeRange = Number(new Array(x).fill(9).join().replace(/,/g, ''));
  const isPalindromeLowestBound = Number(
    '1' + palindromeRange.toString().slice(1, -1)
  );
  let largestPalindrome = 0;
  for (let i = palindromeRange; i >= isPalindromeLowestBound; i--) {
    for (let j = i; j >= isPalindromeLowestBound; j--) {
      const product = i * j;
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome;
};
