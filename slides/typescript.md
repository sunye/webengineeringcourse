

![](resources/typescript/ts-logo.png)
<!-- .element: style="width:300px;" -->

##  TypeScript

----

## What is TypeScript?

- Free and open source language, strongly supported by Microsoft
- Based on ECMAScript 4 + ECMAScript 6
- Created by the father of C# Anders Hejlsberg
- A superset of JavaScript

----
## Why yet another script language?

- To answer to that question, first we need to understand the limits of JavaScript.

![](resources/image_42.jpg)

> Using state of the art software engineering practices ;)
<!-- .element: style="font-size: 22pt;" -->

----

## What is wrong with JavaScript ?

- It was first designed for **small** things and now we to do **big** things.
- However, it is not suited for building large applications.

> As the code gets complex, it becomes extremely unwieldy.


----
## Let us have look at TypeScript

- To get started with TypeScript, grab it from http://typescriptlang.org 
- Let's look at TypeScript, first the core concepts 

----

## Main  features

- Static Type Checking
- Modules and Export
- Interface and Class for traditional Object Oriented Programming
- Works with all your existing JavaScript libraries
- Low learning overhead compared to similar JavaScript systems (CoffeeScript or Dart)
- Amazing Visual Studio, visual code studio, eclipse or IntelliJ tooling
- Outstanding team and refactoring scenarios

----

## TypeScript Features


![](resources/typescript/typescript-features.png)
<!-- .element: style="width: 600px"-->

----

## Improvements over ECMAScript 4
<!-- .element: style="font-size: 48pt;"-->

1. Classes
1. Modules
1. Template Strings

----

## Classes

- Classes may have  properties, methods and constructors:

```ts
class Clock {
    hour     : number;
    minute   : number;
    second   : number;

    constructor(hour : number, minute : number, second : number) {
        this.hour   = hour;
        this.minute = minute;
        this.second = second;
    }
    tic() {
        console.log("tick tock");
    }
}

let clock : Clock = new Clock(12, 33, 10);
clock.tic();
```

----

## Modules

- Modules are TypeScript's answer to organize a code that is too long.

![Modules](resources/typescript/modules.png) 
<!-- .element: style="width:40%"-->


----

- The objective is to organize the code into different _modules_ and import them when needed.
- In TypeScript,  any file containing a top-level `import` or `export` is considered a module.

<div>
**Export**

```ts
interface Address {
    street      : string
    buildNumber : number
    city        : string
}

export {Address}
```
Fichier `address.ts`
</div>
<!-- .element: id="left" -->

<div>
**Import**

```ts
import {Address} from "./address"


let myAddress : Address = 
    {street : "Coulomiers", 
     buildNumber : 131, 
     city : "Nantes"};
```

Fichier `main.ts`
</div>
<!-- .element: id="right" -->


----

## Template Strings

- Template strings are an easy way to embed arbitrary expressions in strings:

```ts
var name = "TypeScript";
var greeting  = `Hello, ${name}! Your name has ${name.length} characters`;
```

----

## Improvements over ECMAScript 6
<!-- .element: style="font-size: 48pt;"-->

1. Static typing
1. Interfaces
1. Union and Intersection types
1. Type Guard and Aliases
1. Enums
1. Mixins
1. Member Visibility
1. Generics

----

## Static typing

- In TypeScript, variables, parameters, and functions may be *optionally* typed:

```ts
var message: string;
```

- Types can also be used in function declarations:

```ts
function sayHello(name: string) : string {
    return "Hello " + name;
}
```

----

## Static Typing Main Advantages

### Helps detecting errors at compile time

- For instance, calling `sayHello()` with a wrong type:

```ts
sayHello(33);
```

- Raises a compilation error:

```shell
main.ts:28:10 - error TS2345: Argument of type '33' is not assignable to parameter of type 'string'.

28 sayHello(33);
```

----

### Improves readability

- Helps understanding:
  - the precise behavior of a fonction
  - the types accepted as argument

```js
function sayHi(person) {
    return "Hi " + person.name;
}
```

```ts
function sayHi(person: Person) {
    return "Hi " + person.name;
}
```

----

## Basic Types

### Boolean

Type for simple true/false values.

```ts
let ok     : boolean = true
let isDone : boolean = false;
```

### Number

All numbers in TypeScript are floating point values (similar to JavaScript).

```ts
let decimal : number = 6;
let hex     : number = 0xf00d;
let binary  : number = 0b1010;
let octal   : number = 0o744;
```

----

### String

Type for textual values, surrounded by double `(")` or single `(')` quotes.

```ts
let greeting : string = "Hello";
let color    : string = 'red';
```

----

### Array

- Type for arrays of values.
- Two available syntaxes:
  1. The type of the elements, followed by `[]`
  1. The generic array type, `Array<elemType>`

```ts
var fruits : Array<string> = [‘Orange’, 'Strawberry'];

var fruits : string[]  = [‘Orange’, 'Strawberry']
```

----

## Interfaces

- Interfaces define public properties and method declarations.
- Properties may be optional.

```ts
interface Person {
    firstName   : string;
    middleName? : string; // Optional Property
    lastName    : string;
}

let me : Person = {firstName : "Olivier", lastName : "Nicolas"}
console.log("First name: " + me.firstName + "Last name: " + me.lastName)
```

----

- Classes implement interfaces
- Interfaces can extend other interfaces and also [other classes!](https://www.typescriptlang.org/docs/handbook/interfaces.html)

```ts
interface Hero {
    attack(other: Hero);
}

class Paladin implements Hero {
    attack(other: Hero) {
        // (...)
    }
}

let liadrin : Hero = new Paladin();
```

- See also: [How to define an interface in TypeScript](https://dzone.com/articles/how-to-define-an-interface-in-typescript)

----

## Enumerations

- Enumerations define a set of named constants.

```ts
enum Temperature {
    Hot, 
    Cold
}; 

let sensor : Temperature = Temperature.Cold;
```

TypeScript provides both [numeric and string-based enumerations](https://www.typescriptlang.org/docs/handbook/enums.html).

----
## Union Types

- A union (`|`) type describes a value that can be one of several types. 


```
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // (...)
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // error
```

```shell
pets.ts:17:5 - error TS2339: Property 'swim' does not exist on type 'Bird | Fish'.
Property 'swim' does not exist on type 'Bird'.
```


----

## Intersection types

- An intersection type (`&`) combines multiple types into one.

```ts
interface Person {
    firstName   : string;
    middleName? : string; // Optional Property
    lastName    : string;
}

interface Identifiable {
    id : number;
}

let alice : Person & Identifiable;
alice.firstName = "Alice";
alice.id = 546376;
```

----

## Type Guard

- A type guard is an expression that performs a runtime check that guarantees a type.

```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
```

----

## Type Aliases

- Type aliases create a new name for a type:

```ts
type Name = string;
```

----
## Mixins

- TypeScript classes only support **strict** single inheritance.
- An alternative  way of building up classes from reusable components is to build them by combining simpler partial classes called *mixins*.
- A *mixin* is a function that:
  1. takes a constructor,
  2. declares a class that extends that constructor,
  3. adds members to that new class, and
  4. returns the class itself.

----

## Mixin example

- Here is a `Timestamped` *mixin* that tracks the creation date of an object in a timestamp property:

```ts
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}
```

- Here is a simple class `User`:

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

note:
- The type `Constructor<T>` is an alias for the construct signature that describes a type which can construct objects of the generic type `T` and whose constructor function accepts an arbitrary number of parameters of any type.

----

- Here is a new class `TimestampedUser` created by mixing `Timestamped` into `User`:

```ts
const TimestampedUser = Timestamped(User);

const user = new TimestampedUser("John Doe");
```

- We can now access properties from both the `User` class and our `Timestamped` *mixin* in a type-safe manner:

```ts
console.log(user.name);
console.log(user.timestamp);
```

----

## Member Visibility 

- Class members (properties and methods) have visibility modifiers:  (public, private, protected)

| Modifier | Meaning | 
| --- | --- |
| `private` | The member cannot be accessed from outside of its containing class |
| `protected` | The member can be accessed within its containing class and  within its subclasses  |
| `public` | The member can be freely accessed throughout the program |

----

```ts
class Person {
    private id      : number
    protected name  : string;
    
    constructor(id : numer) { 
        this.id = id; 
    }
    
    public setName(name: string){
        this.name = name;
    }
}
```

----

## Generics
- Generics allow creating a component that can work over a variety of types rather than a single one.

```ts
interface Interval<T> {
    begin : T;
    end   : T;

    overlaps(other : T): Boolean;
}
```

----
## Summary: Why TypeScript? 
### Expected Benefits (1)

- Have to learn one more thing - there is a learning curve, very easy if you already know JavaScript, or if you know C# or Java very well.
- You still have to learn JavaScript - Understanding how TypeScript converts to JavaScript will teach you better JavaScript
- Some definition files don't exist or incomplete, but I think this will vanish very quickly.  These aren't hard to write if you really need something.

----
## Summary - Why TypeScript?
### Expected Benefits (2)

- Modules and classes enable large projects and code reuse
- Compile-time checking prevents errors
- Definition files for common JavaScript libraries makes them very easy to work with, and provides strong type checking
- Source map debugging makes debug easy

----
##  In short
### If I have to make a decision:

- If you see yourself using more JavaScript.  You have to look at TypeScript.
- If you and your team has to work on JavaScript together, you have to look at TypeScript.
- Once you have done the initial hard work and converted a project.  You can't stand going back.
