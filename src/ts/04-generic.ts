// -------------------functions-------------------
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>('hello', 456));

// --------------------Classes----------------------
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}
  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNamed');
value.setValue(123);
console.log(value.toString());

// ---------------------------Aliases------------------------
type Wrapped<T> = { value: T };
const myValue: Wrapped<number> = { value: 123 };

// -------------------------Interfaces-------------------
interface Wrapped2<S> {
  value: S;
}

let myValue2: Wrapped2<boolean> = { value: true };

// or

class NewClass implements Wrapped2<string> {
  value = 'Hello';
}

// --------------------Default Value-----------------------
class NamedValue2<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value2 = new NamedValue2('myNumber');
value2.setValue('myValue');
console.log(value2.toString()); // myNumber: myValue

// -------------Extends--------------------
function createPairNew<S extends string | number, T extends string | number>(
  v1: S,
  v2: T
): [S, T] {
  return [v1, v2];
}

console.log(createPairNew('123', 123));
