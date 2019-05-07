const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(4, 5));

// =========================================
// boolean
// =========================================
let isCool: boolean = true;

// =========================================
// number
// =========================================
let age: number = 56;

// =========================================
// string
// =========================================
let eyeColor: string = 'brown';
let quote: string = `I'm not old, I'm only ${age}`;

// =========================================
// array
// =========================================
let pets: string[] = ['cat', 'dog', 'pig'];
// --or--
let pets2: Array<string> = ['lion', 'dragon', 'unicorn'];

// =========================================
// object
// =========================================
let wizard: object = {
  a: 'John',
  b: 'George'
};

// =========================================
// null and undefined
// =========================================
let meh: undefined = undefined;
let eh: null = null;

// =========================================
// tuple
// =========================================
let basket: [string, number] = ['basketball', 5];

// =========================================
// enum
// =========================================
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;

// =========================================
// any - !!! Be Careful !!!
// =========================================
let whatever: any = 'aaghh nooo!!!';
whatever = 5;
whatever = true;
whatever = Size.Large;
whatever = wizard;

// =========================================
// void
// =========================================
let sing = (): void => {
  console.log('Lalala');
};
// vs
let sing2 = (): string => {
  return 'lalalala';
};

// =========================================
// never (never returns anything and doesn't have reachable endpoint)
// =========================================
let error = (): never => {
  throw Error('oooops');
};

// =========================================
// interface
// =========================================
//((the '?' makes optional, so -
// magic may or may not be part of this object ))
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHT!');
};
// above is same as saying:
let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log('FIGHT!');
};
// shown without magic (allowed bc of '?')
fightRobotArmy({ count: 1, type: 'dragon' });

// =========================================
// Type Assertion (similar to type casting)
// =========================================
// the type (interface in this case)
// type assertion is purely you telling the compiler that
// you know about the types better than it does,
// and that it should not second guess you.
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}
// the assertion
let dog = {} as CatArmy;
dog.count;
dog.magic;

// =========================================
// function
// =========================================
// doesn't return anything, so return type is void
let sing3 = (): void => {
  console.log('Lalala');
};
// returns strings, so return type is string
let sing4 = (): string => {
  return 'falalalalala';
};
// returns number, so return type is number
let sing5 = (): number => {
  return 5;
};

// =========================================
// class
// =========================================
// properties are public by default, if prepended with "private" then
// they cannot be accessed outside of the class definition
class Person {
  name: string = 'John'; // private can't be accessed outside Person
  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

let john = new Person('Steve');

console.log(john.greet()); // "Hello, my name is Steve"

// =========================================
// union
// =========================================
// below can be string or number, but nothing else
let confused: string | number = 'hello';
confused = 5;

// =========================================
// type inferrence
// =========================================
let x = 4;
// TS will infer that x is a number, so therefor,
// below would not work:
// x = 'hello' (will throw error " type 'hello' is not assignable to type 'number' ")
