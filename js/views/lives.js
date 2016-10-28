(function () {
  'use strict';

  app.LivesView = (model, controller) => {
    const $rootEl = $(`
      <div class="lives-container">
      </div>
    `);
    const $title = $(`
      <span>
        Lives:
      </span>
    `);
    const $lives = $(`
      <span class="lives"></span>
    `);

    $rootEl.append($title);
    $rootEl.append($lives);

    const renderLives = () => {
      let livesCount = model.getLivesCount();

      if (livesCount >= 0) {
        $lives.html('');

        while (livesCount) {
          $lives.append('&hearts;');
          livesCount -= 1;
        }
      }
    };

    renderLives();

    model.watch('miss', () => {
      renderLives();
    });

    return {
      getRootEl: () => $rootEl,
    }
  };
})();
