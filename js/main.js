(function () {
  'use strict';

  const $window = $(window);
  const $body = $('body');

  $window[0].app = {};

  $window.on('DOMContentLoaded', () => {
    const wordModel = app.WordModel();
    const livesModel = app.LivesModel();

    const formController = app.FormController();

    const scoreboardView = app.ScoreboardView(wordModel, livesModel);
    const formView = app.FormView(wordModel, livesModel, formController);
    const livesView = app.LivesView(livesModel);

    $body.append(scoreboardView.getRootEl());
    $body.append(livesView.getRootEl());
    $body.append(formView.getRootEl());
  });
})();
