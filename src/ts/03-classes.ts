class Person {
  protected name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const myPerson = new Person('jek');

console.log(myPerson.getName());

// -------------------------------------------------------------------
class Person2 {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

// -----------------ReadOnly------------------------------

class Person3 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

// ---------------------Class with Interfaces----------------------------
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}
  public getArea(): number {
    return this.width * this.height;
  }
}

// ---------------------Extends-----------------------------------
class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
  // getArea gets inherited from Rectangle
  getWidth(): number {
    return this.width;
  }
}

// ------------------------Override------------------------------
class newSquare extends Square {
  public constructor(width: number) {
    super(width);
  }

  // word Override is optional
  public override getWidth(): number {
    return 123;
  }
}

// -------------------------------Abstract classes-------------------
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle2 extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  // Implement abstract method
  public getArea(): number {
    return this.width * this.height;
  }
}
