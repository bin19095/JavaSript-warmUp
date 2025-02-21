class ValidationError extends Error {
    constructor(message) {
      super(message); // call parent class constructor
      this.name = "ValidationError";
      this.code = "42";
    }
  
    printCustomerMessage() {
      return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
    }
  }
  
  try {
    throw new ValidationError("Not a valid phone number");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.name); // Now this is ValidationError!
      console.log(error.printCustomerMessage());
    } else {
      console.log("Unknown error", error);
      throw error;
    }
  }

  class Foo {
    // This is a computed property. It will not be picked up as a constructor.
    ["constructor"]() {
      console.log("called");
      this.a = 1;
    }
  }
  
  const foo = new Foo(); // No log
  console.log(foo); // Foo {}
  foo.constructor(); // Logs "called"
  console.log(foo); // Foo { a: 1 }