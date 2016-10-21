(function () {
  'use strict';

  app.FormView = (wordModel, livesModel, formController) => {
    const $rootEl = $(`
      <form class="form">
        <input type="text"
               class="input"
               autocomplete="off"
               placeholder="Type a letter…"
               maxlength="1"
               autofocus>
        <button class="button">
          Enter
        </button>
      </form>
    `);

    const $button = $rootEl.find('.button');
    const $input = $rootEl.find('.input');

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
