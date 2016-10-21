(function () {
  'use strict';

  app.FormController = () => {
    const handleSubmit = (wordModel, livesModel, letter) => {
      letter = wordModel.clearInput(letter);

      if (wordModel.checkLetterOccurence(letter)) {
        wordModel.putLetter(letter);
      } else {
        livesModel.decrementLivesCount();
      }
    };

    return {
      handleSubmit,
    }
  };
})();
