(function () {
  'use strict';

  app.FormView = (wordModel, livesModel, formController) => {
    const $rootEl = $(`
      <form class="form">
      </form>
    `);
    const $input = $(`
      <input type="text"
             class="input"
             autocomplete="off"
             placeholder="Type a letter…"
             maxlength="1"
             autofocus>
    `);
    const $button = $(`
      <button class="button">
        Enter
      </button>
    `);

    $rootEl.append($input);
    $rootEl.append($button);

    $rootEl.on('submit', event => {
      event.preventDefault();
      formController.handleSubmit(wordModel, livesModel, $input.val());
      $input.val('');
    });

    livesModel.watch('miss', () => {
      if (!livesModel.getLivesCount()) {
        $button.prop('disabled', true);
      }
    });

    return {
      getRootEl: () => $rootEl,
    }
  };
})();
