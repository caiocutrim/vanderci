/**
 * high-order
 */
function sayName (path, cb) {
  var error = true;
  var name = path;
  process.nextTick(function () {
    if (path == null) {
      cb(error, null, null);
    }
    if (path) {
      cb(null, path, null);
    }
  })
}

function sayName2 (path, cb) {
  var error = true;
  var name = path;
  setTimeout(function () {
    if (path == null) {
      cb(error, null, null);
    }
    if (path) {
      cb(null, path, null);
    }
  }, 1000);
}

sayName('vanderci', function (error, data) {
  if (error) { console.log(error);}
  console.log(data);
});

sayName2('vanderci assync', function (error, data) {
  if (error) { console.log(error);}
  console.log(data);
});

console.log('\033[1;31m Eu sou o podereoso síncrono o cara que congela tudo!\033[0;29m');
