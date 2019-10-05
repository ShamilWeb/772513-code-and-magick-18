'use strict';
(function () {
  window.util = {
    setup: document.querySelector('.setup'),
    MANTLE_COLOR: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)',
    ],
    EYE_COLOR: [
      'black',
      'red',
      'blue',
      'yellow',
      'green',
    ],
    FIREBALL_COLOR: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
    getRandomNumber: function (min, max) { // Возвращает случайное число
      return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    },

    outputErrors: function (errorMessage) {
      var div = document.createElement('div')
      div.textContent = errorMessage;
      div.style = "position: absolute; z-index: 10; background-color: red; width: 100%; height:50px; display: flex; justify-content: center; align-items: center;"
      document.body.prepend(div);
    },

    removeSimilarWizard: function () {
      var similarWizard = window.util.setup.querySelectorAll('.setup-similar-item');
      for (var i=0; i < similarWizard.length; i++) {
        similarWizard[i].remove();
      }
    }
  };
})();
