function make() {
  let array = [];
  let store = function store() {
    let _arguments = arguments;


    if (typeof arguments[0] === 'function') {
      return array.reduce(function (result, item) {
        return _arguments[0](result, item);
      });
    } else {
      array.push.apply(array, arguments);
    }
    return store;
  };
  return store.apply(undefined, arguments);
}
