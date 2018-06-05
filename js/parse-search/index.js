/**
 * paser location.search to map
 * @param {String} search
 * @returns {Object} map
 */
function parseSearch(search) {
  search = search.replace(/\?/, '');
  var obj = {};
  var querys = search.split('&');
  querys.forEach(item => {
    var [key, value] = item.split('=');
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value || '';
    }
  });
  return obj;
}

// test
// var qs = require('querystring');
// var str = qs.stringify({ a: '& 1=&&%%\\||', b: ['hello', 1, 2, 3, [1, 2]], c: [1, 2], d: { a: '!22' }, 你好: "世界" });
// console.log(str);
// console.log(JSON.stringify(qs.parse(str)));
// console.log(JSON.stringify(parseSearch(str)));

// str1 = "=&="
// console.log(JSON.stringify(qs.parse(str1)));
// console.log(JSON.stringify(parseSearch(str1)));