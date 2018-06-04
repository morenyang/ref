var SingleInstance = (function() {
  var instance;
  function init() {
    return new Object('Hello World');
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

var foo = SingleInstance.getInstance();
var bar = SingleInstance.getInstance();

console.log(foo === bar);
