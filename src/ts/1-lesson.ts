let myBoolean: boolean = true;
let myString: string = 'string';
let myNumber: number = 9;

// ------------------------------------------------------
let myAny: any = 'string';
myAny = 5;

// ------------------------------------------------------
let myUnknown: unknown = 'string';
let test = myUnknown;
myUnknown = 4;
test = myUnknown;
myUnknown = 5;
myUnknown as string;

// ------------------------------------------------------
let myNever: never;

function infiniteLoop(): never {
  while (true) {}
}

// ------------------------------------------------------
let myUndefined: undefined = undefined;
let myNull: null = null;

// -----------------------Array------------------------
let myArray1: string[] = ['q', 'w', 'e', null, undefined];
let myArray2: number[] = [1, 2, 3, null, undefined];

let myArray3: readonly boolean[] = [true, false, null, undefined];

// -----------------------Tuple------------------------
let myTuple: [number, string, boolean] = [1, 'string', true];
myTuple = [null, 'string', undefined];

let myTuple2: readonly [number, string, boolean] = [1, 'string', true];

let myTupleNamed: [x: number, y: number] = [1, 3];

// -----------------------Object------------------------
const car: { type: string; year: number } = { type: 'BMW', year: 2005 };
car.year = 2010;

const car2: { type: string; year?: number } = { type: 'BMW' };

const ages: { [index: string]: number } = {};
ages.Nick = 23;
ages.Jack = 25;
