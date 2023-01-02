// ------------------------------ Partial ---------------------
interface Point {
  x: number;
  y: number;
}

// All parameters is optional
const myPoint: Partial<Point> = {};

// ------------------------------ Required ---------------------
interface Car {
  model?: string;
  year?: number;
}

// All parameters is require
let myCar: Required<Car> = {
  model: 'X5',
  year: 2009,
};

// ------------------------------ Record ---------------------
// Record<string, number> === { [key: string]: number }
const nameAgeMap: Record<string, number> = {
  Jon: 23,
  Bob: 65,
};

// ------------------------------ Omit ---------------------
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob',
};

// ------------------------------ Pick ---------------------
interface Person2 {
  name: string;
  age: number;
  location?: string;
}

const bob2: Pick<Person2, 'name'> = {
  name: 'Bob',
};

// ------------------------------ Exclude ---------------------
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;

// ------------------------------ ReturnType ---------------------
type PointGenerator = () => { x: number; y: number };
const myPoint1: ReturnType<PointGenerator> = {
  x: 12,
  y: 43,
};

// ------------------------------ Parameters ---------------------
type PointGenerator2 = (param1: { x: number; y: number }) => void;
const myPoint2: Parameters<PointGenerator2>[0] = {
  x: 12,
  y: 43,
};

export {};
