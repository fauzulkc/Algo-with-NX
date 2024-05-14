export default function sumEvenFibonacci(limit: number): number {
  let term1 = 1;
  let term2 = 2;
  let sum = 0;

  while (term1 <= limit) {
    if (term1 % 2 === 0) {
      sum += term1;
    }
    [term1, term2] = [term2, term1 + term2]; // Generate the next term
  }

  return sum;
}

// A memoization map to store previously computed Fibonacci numbers
const memo: { [key: number]: number } = { 1: 1, 2: 2 };

// Recursive function to compute Fibonacci numbers with memoization
function fibonacci(n: number): number {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

// Function to generate the Fibonacci series up to a given limit
export function generateFibonacciSeriesWithRecursion(limit: number): number[] {
  const series: number[] = [];
  let i = 1;
  let fibNumber = fibonacci(i);
  while (fibNumber <= limit) {
    series.push(fibNumber);
    i++;
    fibNumber = fibonacci(i);
  }
  return series;
}

// Function to sum even numbers in an array
export function sumEvenNumbersArray(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
