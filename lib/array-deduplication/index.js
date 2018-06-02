let arr = [1, 2, 3, 1, 4, '1', 'a', 2, 'b', 'a', 5];

function foo(array) {
  let _arr = [];
  array.forEach(item => {
    if (!_arr.includes(item)) {
      _arr.push(item);
    }
  });
  return _arr;
}

console.log(foo(arr));

function bar(array) {
  let _arr = [...array];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (_arr[i] === _arr[j]) {
        _arr.splice(i, 1);
      }
    }
  }
  return _arr;
}

console.log(bar(arr));

function baz(array) {
  return Array.from(new Set(array));
}

console.log(baz(arr));
