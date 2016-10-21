(function () {
  'use strict';

  const observer = app.Observer();

  const config = {
    minLength: 5,
    maxLength: 12,
    apiKey: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
  };

  let word;
  let secretWord;

  app.WordModel = () => {
    const randomWord = callback =>
      $.ajax({
        type: 'GET',
        url: `http://api.wordnik.com:80/v4/words.json/randomWord
          ?hasDictionaryDef=true
          &minLength=${config.minLength}
          &maxLength=${config.maxLength}
          &api_key=${config.apiKey}`.replace(/\s*/g, ''),
        dataType: 'jsonp',
        success: data => {
          word = clearInput(data.word);
          // Replace only letters since the random word may contain a dash.
          secretWord = word.replace(/[a-z]|[A-Z]/g, '_');
          observer.dispatch('random');
        },
      }).done(callback);

    const getSecretWord = () => secretWord;

    const checkLetterOccurence = letter => word.indexOf(letter) !== -1;

    const getLetterPositions = letter => {
      if (checkLetterOccurence(letter)) {
        let positions = [];
        const length = word.length;

        for (let i = 0; i < length; i++) {
          if (word[i] === letter) {
            positions.push(i);
          }
        }

        return positions;
      }

      return false;
    };

    const putLetter = letter => {
      let positions = getLetterPositions(letter);

      for (let position of positions) {
        secretWord = secretWord.split('');
        secretWord[position] = letter;
        secretWord = secretWord.join('');
      }

      observer.dispatch('put');
    };

    const compareWords = () => word === secretWord;

    const clearInput = word => word.toLowerCase();

    randomWord();

    return {
      randomWord,
      getSecretWord,
      checkLetterOccurence,
      getLetterPositions,
      putLetter,
      compareWords,
      clearInput,
      watch: observer.watch,
    }
  };
})();
