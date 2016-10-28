(function () {
  'use strict';

  app.ScoreboardView = (wordModel, livesModel) => {
    const $rootEl = $('<div class="scoreboard"></div>');

    const print = text => {
      $rootEl.html(text);
    };

    wordModel.watch('random', () => {
      print(wordModel.getSecretWord());
    });

    wordModel.watch('put', () => {
      print(wordModel.getSecretWord());

      if (wordModel.compareWords()) {
        print('You win!');
      }
    });

    livesModel.watch('miss', () => {
      if (!livesModel.getLivesCount()) {
        print('You lose!');
      }
    });

    return {
      getRootEl: () => $rootEl,
    };
  };
})();
