'use strict';
(function () {
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardCoat = document.querySelector('.wizard-coat');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelectorAll('[name=coat-color]');
  var inputEyesColor = document.querySelectorAll('[name=eyes-color]');
  var inputFireballColor = document.querySelectorAll('[name=fireball-color]');
  window.eyeColor = 'black';
  window.mantleColor = 'rgb(101, 137, 164)';

  // -----Меняет цвет глаза по клику в области глаз-------
  var changesColorEye = function () {
    window.eyeColor = window.util.EYE_COLOR[window.util.getRandomNumber(0, window.util.EYE_COLOR.length - 1)];
    wizardEyes.style.fill = window.eyeColor;
    inputEyesColor.value = window.eyeColor;
    window.debounce(function () {
      window.outputWizards(window.serverWizards);
    });
  };
  // //////////////////////////////////////////

  // -----Меняет цвет мантии по клику в области мантии-------
  var changesColorMantle = function () {
    window.mantleColor = window.util.MANTLE_COLOR[window.util.getRandomNumber(0, window.util.MANTLE_COLOR.length - 1)];
    wizardCoat.style.fill = window.mantleColor;
    inputCoatColor.value = window.mantleColor;
    window.debounce(function () {
      window.outputWizards(window.serverWizards);
    });
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
