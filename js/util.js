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
    }
  };
})();
