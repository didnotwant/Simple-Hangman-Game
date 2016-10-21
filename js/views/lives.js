(function () {
  'use strict';

  app.LivesView = (model, controller) => {
    const $rootEl = $(`
      <div class="lives-container">
        <span>
          Lives:
        </span>
        <span class="lives"></span>
      </div>
    `);

    const $lives = $rootEl.find('.lives');

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
