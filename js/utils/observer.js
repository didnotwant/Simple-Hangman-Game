(function () {
  'use strict';

  let events = {};

  app.Observer = () => {
    return {
      watch(name, callback) {
        if (!Object.prototype.hasOwnProperty.call(events, name)) {
          events[name] = [];
        }
        events[name].push(callback);
      },
      dispatch(name) {
        if (Object.prototype.hasOwnProperty.call(events, name)) {
          let args = Array.prototype.slice.call(arguments);
          args.shift();
          for (let i = 0; i < events[name].length; i++) {
            events[name][i].apply(null, args);
          }
        }
      },
    };
  };
})();
