/**
 * io/js
 */

var fs = require('fs');

fs.readFile(__dirname + '/hello.txt', function (error, result) {
  if (error === 'ENOENT') {
    console.log(new Error('file not found'));
  }
  console.log(result.toString());
});

var data = "Hello, world!";
fs.writeFile(__dirname + '/hi.txt', data, function (error, result) {
  if (error) {
    console.log(new Error('não foi possivel escrever no arquivo indicado'));
  }
  fs.readFile(__dirname + '/hi.txt', function (error, result) {
    if (error === 'ENOENT') {
      console.log(new Error('file not found'));
    }
    console.log('\033[1;36m hi.txt content '+result.toString());
  });
});
