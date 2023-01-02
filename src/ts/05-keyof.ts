// ------------------- with explicit keys -----------------
export interface Person {
  name: string;
  age: number;
}

function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person = {
  name: 'Jon',
  age: 23,
};

printPersonProperty(person, 'name'); // Printing person property name: "Jon"
printPersonProperty(person, 'age'); // Printing person property age: "23"

// ------------------- with index signatures -----------------
type StringMap = {
  [key: string]: unknown;
};

function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}

console.log(createStringPair('code', '34234'));
