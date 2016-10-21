(function () {
  'use strict';

  const observer = app.Observer();
  let livesCount = 6;

  app.LivesModel = () => {
    const getLivesCount = () => livesCount;

    const decrementLivesCount = () => {
      livesCount -= 1;
      observer.dispatch('miss');
    };

    return {
      getLivesCount,
      decrementLivesCount,
      watch: observer.watch,
    }
  };
})();
