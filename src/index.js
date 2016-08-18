var foo = require(__dirname + '/scripts/foo.js');
var bar = require(__dirname + '/scripts/bar.ts');

alert("Hello, from index.js!");
alert(foo.sayHello('John'));
alert(bar('Martha'));
