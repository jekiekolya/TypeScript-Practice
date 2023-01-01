function getTime(): number {
  return new Date().getTime();
}

function printHello(user: string): void {
  console.log('Hello', user);
}

function multiply(x: number, y: number) {
  return x * y;
}

// Optional parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// Default parameters
function pow(a: number, b: number = 2): number {
  return a ** b;
}

// Named parameters (Destructuring)
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

// Rest parameters
function addWithRest(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// Alias like function
type Negate = (value: number) => number;

const NegateNumber: Negate = value => value * -1;
