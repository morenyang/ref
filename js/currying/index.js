// sum(2)(3) => 5
// sum(2, 3) => 5

function foo() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    var _a = arguments[0];
    return function(bar) {
      return _a + bar;
    };
  }
}

console.log(foo(2, 3));
console.log(foo(2)(3));
