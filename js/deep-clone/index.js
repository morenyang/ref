function deepClone(source) {
  if (typeof source !== 'object') {
    return source;
  }
  var target = Array.isArray(source) ? [] : {};
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] !== 'object') {
        target[key] = source[key];
      } else {
        target[key] = deepClone(source[key]);
      }
    }
  }
  return target;
}

