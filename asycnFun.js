async function* foo() {
    yield await Promise.resolve('a');
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
    yield await Promise.resolve('d');
  }
  
  let str = '';
  
  async function generate() {
    for await (const val of foo()) {
      str = str + val;
    }
    console.log(str);
  }
  
  generate();
  // Expected output: "abc"