var sum = function (a, b) {
    return a + b;
};
console.log(sum(4, 5));
// =========================================
// boolean
// =========================================
var isCool = true;
// =========================================
// number
// =========================================
var age = 56;
// =========================================
// string
// =========================================
var eyeColor = 'brown';
var quote = "I'm not old, I'm only " + age;
// =========================================
// array
// =========================================
var pets = ['cat', 'dog', 'pig'];
// --or--
var pets2 = ['lion', 'dragon', 'unicorn'];
// =========================================
// object
// =========================================
var wizard = {
    a: 'John',
    b: 'George'
};
// =========================================
// null and undefined
// =========================================
var meh = undefined;
var eh = null;
// =========================================
// tuple
// =========================================
var basket = ['basketball', 5];
// =========================================
// enum
// =========================================
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName2 = Size.Small;
// =========================================
// any - !!! Be Careful !!!
// =========================================
var whatever = 'aaghh nooo!!!';
whatever = 5;
whatever = true;
whatever = Size.Large;
whatever = wizard;
// =========================================
// void
// =========================================
var sing = function () {
    console.log('Lalala');
};
// vs
var sing2 = function () {
    return 'lalalala';
};
// =========================================
// never (never returns anything and doesn't have reachable endpoint)
// =========================================
var error = function () {
    throw Error('oooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
// above is same as saying:
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
// shown without magic (allowed bc of '?')
fightRobotArmy({ count: 1, type: 'dragon' });
// the assertion
var dog = {};
dog.count;
dog.magic;
// =========================================
// function
// =========================================
// doesn't return anything, so return type is void
var sing3 = function () {
    console.log('Lalala');
};
// returns strings, so return type is string
var sing4 = function () {
    return 'falalalalala';
};
// returns number, so return type is number
var sing5 = function () {
    return 5;
};
// =========================================
// class
// =========================================
// properties are public by default, if prepended with "private" then
// they cannot be accessed outside of the class definition
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = 'John'; // private can't be accessed outside Person
        this.name = name;
    }
    Person.prototype.greet = function () {
        return "Hello, my name is " + this.name;
    };
    return Person;
}());
var john = new Person('Steve');
console.log(john.greet()); // "Hello, my name is Steve"
// =========================================
// union
// =========================================
// below can be string or number, but nothing else
var confused = 'hello';
confused = 5;
// =========================================
// type inferrence
// =========================================
var x = 4;
// TS will infer that x is a number, so therefor,
// below would not work:
// x = 'hello' (will throw error " type 'hello' is not assignable to type 'number' ")
