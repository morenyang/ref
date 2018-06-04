function foo(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    count += `${i}`.replace(/[1-9]/g, '').length;
  }
  return count;
}

function bar(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    count += (`${i}`.match(/0/g) || []).length;
  }
  return count;
}

console.log(foo(1, 1000));
console.log(bar(1, 1000));
