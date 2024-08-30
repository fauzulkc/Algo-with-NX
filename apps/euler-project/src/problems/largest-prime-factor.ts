export const checkLargestPrimeFactor = ( number: number ): number =>
{
  let factor = 2;
  let lastFactor = 1;
  while ( number > 1 ) {
    if ( number % factor === 0 ) {
      lastFactor = factor;
      // number /= factor;
      while ( number % factor === 0 ) {
        number /= factor;
      }
    }
    factor++;
  }
  return lastFactor;
};
