const helloWorld = require('./helloworld.js');

test('Should return "Hello World!"', () => {
    expect(helloWorld()).toBe("Hello World");
});