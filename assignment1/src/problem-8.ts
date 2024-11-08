{
  //
  function validateKeys(obj: object, keys: string[]): boolean {
    return keys.every((key) => key in obj);
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  //
}
