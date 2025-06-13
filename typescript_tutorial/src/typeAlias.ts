// Type Alias

type AliasName = ExistingType;

// 1. Basic type alias

type Username = string;

let user: Username = "brahmasai";

// 2. Union type alias

type ID = number | string;

let empId: ID = 101;
empId = "A102";

// 3. Object type alias

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const newUser: User = {
  name: "Sai",
  age: 25,
  isActive: true
};

// 4. Function type alias
type Greet = (name: string) => string;

const sayHello: Greet = (name) => `Hello, ${name}!`;

// 5. Array type alias

type StringArray = string[];

const tags: StringArray = ["react", "typescript", "frontend"];