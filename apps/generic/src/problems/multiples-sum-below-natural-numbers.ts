const checkMultiples = (
  naturalNumberRangeBelow: number,
  multiples: number[]
): number => {
  if (naturalNumberRangeBelow === 0) {
    throw new Error('naturalNumberRange must be greater than 0');
  }
  if (Array.isArray(multiples) && multiples.length === 0) {
    throw new Error('multiples must be greater than 0');
  }
  const foundMultiple = new Set<number>();
  for (let i = 0; i < naturalNumberRangeBelow; i++) {
    multiples.forEach((multiple) => {
      if (i % multiple === 0) {
        foundMultiple.add(i);
      }
    });
  }
  return Array.from(foundMultiple).reduce((a: number, b: number) => a + b, 0);
};

export default checkMultiples;
