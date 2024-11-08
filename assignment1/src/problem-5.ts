{
  //
  type Person = {
    name: string;
    age: number;
    email: string;
    address: string;
    description: string;
  };

  function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
  }

  const person: Person = {
    name: "Alice",
    age: 25,
    email: "alice@gmail.com",
    address: "Bangladesh",
    description: "Hello, I am a student",
  };

  //
}
