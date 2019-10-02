'use strict';
(function () {
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardCoat = document.querySelector('.wizard-coat');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelectorAll('[name=coat-color]');
  var inputEyesColor = document.querySelectorAll('[name=eyes-color]');
  var inputFireballColor = document.querySelectorAll('[name=fireball-color]');


  // -----Меняет цвет глаза по клику в области глаз-------
  var changesColorEye = function () {
    var eyeColor = window.util.EYE_COLOR[window.util.getRandomNumber(0, window.util.EYE_COLOR.length - 1)];
    wizardEyes.style.fill = eyeColor;
    inputEyesColor.value = eyeColor;
  };
  // //////////////////////////////////////////

  // -----Меняет цвет мантии по клику в области мантии-------
  var changesColorMantle = function () {
    var mantleColor = window.util.MANTLE_COLOR[window.util.getRandomNumber(0, window.util.MANTLE_COLOR.length - 1)];
    wizardCoat.style.fill = mantleColor;
    inputCoatColor.value = mantleColor;
  };

  // //////////////////////////////////////////

  // ------Меняет цвет файрбола----------------------------------
  var changesColorFireball = function () {
    var fireballColor = window.util.FIREBALL_COLOR[window.util.getRandomNumber(0, window.util.FIREBALL_COLOR.length - 1)];
    setupFireballWrap.style.backgroundColor = fireballColor;
    inputFireballColor.value = fireballColor;
  };
  // ////////////////////////////////////////////////////////////////////////////

  wizardEyes.addEventListener('click', changesColorEye);
  wizardCoat.addEventListener('click', changesColorMantle);
  setupFireballWrap.addEventListener('click', changesColorFireball);
})();