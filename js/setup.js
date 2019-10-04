'use strict';
(function () {
  var similarListElement = window.util.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];

  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг',
  ];

  // ----Создает Стрктуру данных
  var createsWizards = function () {
    var wizards = [];
    for (var i = 1; i <= 4; i++) {
      var wizard = {};
      wizard.name = WIZARD_NAMES[window.util.getRandomNumber(0, WIZARD_NAMES.length - 1)];
      wizard.name += ' ' + WIZARD_SURNAMES[window.util.getRandomNumber(0, WIZARD_SURNAMES.length - 1)];
      wizard.coatColor = window.util.MANTLE_COLOR[window.util.getRandomNumber(0, window.util.MANTLE_COLOR.length - 1)];
      wizard.eyesColor = window.util.EYE_COLOR[window.util.getRandomNumber(0, window.util.EYE_COLOR.length - 1)];
      wizards.push(wizard);
    }
    return wizards;
  };
  // //////////////////////////////////////////////////////////


  // var wizards = createsWizards();


  // // ----------Вставляет данные в шаблон
  // var renderWizard = function (wizard) {
  //   var wizardElement = similarWizardTemplate.cloneNode(true);
  //   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  //   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  //   wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  //   return wizardElement;
  // };
  // // ///////////////////////////////////////////////////////////////

  // ----------Вставляет данные в шаблон
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };
  // ///////////////////////////////////////////////////////////////

  // --------------Вставляет готовый шаблон в разметку
  var outputWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
  // //////////////////////////////////////////////////////

  // --------Запрашивает похожих персонажей и в зависемости от ответа выполняет ту или иную функцию--------
  window.backend.load(outputWizards,
    function (xhrStatus) {
    var error;
    switch (xhrStatus) {
      case 400:
        return 'Неверный запрос';
      case 401:
        return 'Пользователь не авторизован';
      case 404:
        return 'Ничего не найдено';
      default:
        return 'Cтатус ответа: : ' + xhr.status;
    }
  })
  // //////////////////////////////////////////////////////////////////////////////////////////////

})();
