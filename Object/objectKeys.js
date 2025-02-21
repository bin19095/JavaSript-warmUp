const object1 = {
    a: "somestring",
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]
  const myObj = Object.create(
    {},
    {
      getFoo: {
        value() {
          return this.foo;
        },
      },
    },
  );
  myObj.foo = 1;
  console.log(Object.keys(myObj)); // ['foo']

//Creating an Object with Methods and properties
  const user = Object.create(
    {},
    {
      getFullName: {
        value() {
          return `${this.firstName} ${this.lastName}`;
        },
      },
    },
  );
  
  user.firstName = "John";
  user.lastName = "Doe";
  user.age = 30;
  
  console.log(Object.keys(user)); // ['firstName', 'lastName', 'age']
  console.log(user.getFullName()); // 'John Doe'

//Creating an object with default values

  const defaults = Object.create(
    {},
    {
      getDefault: {
        value(key) {
          return this[key] || 'default';
        },
      },
    },
  );
  
  defaults.apiEndpoint = "https://api.example.com";
  defaults.timeout = 5000;
  
  console.log(Object.keys(defaults)); // ['apiEndpoint', 'timeout']
  console.log(defaults.getDefault('apiEndpoint')); // 'https://api.example.com'
  console.log(defaults.getDefault('nonExistentKey')); // 'default'

  //creating a configurable Object
  const config = Object.create(
    {},
    {
      getSetting: {
        value(key) {
          return this[key];
        },
      },
    },
  );
  
  config.theme = "dark";
  config.language = "en";
  
  console.log(Object.keys(config)); // ['theme', 'language']
  console.log(config.getSetting('theme')); // 'dark'
