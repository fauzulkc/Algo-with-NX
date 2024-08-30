function isDivisibleByAll(num: number, max: number): boolean {
  for (let i = 1; i <= max; i++) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
}

// Main function to find the smallest number divisible by all numbers from 1 to 20
export function smallestMultipleInRange(max: number): number {
  let num = max; // Start from the max number and increment by max

  while (true) {
    if (isDivisibleByAll(num, max)) {
      return num;
    }
    num += max; // Increment by max to optimize the process
  }
}
