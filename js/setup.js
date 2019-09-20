'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarListElement = setup.querySelector('.setup-similar-list');
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

var MANTLE_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var EYE_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

// ------Возвращает случайное число
var getRandomNumber = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};
// //////////////////////////////////////////////////////

// ----Создает Стрктуру данных
var createsWizards = function () {
  var wizards = [];
  for (var i = 1; i <= 4; i++) {
    var wizard = {};
    wizard.name = WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length - 1)];
    wizard.name += ' ' + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length - 1)];
    wizard.coatColor = MANTLE_COLOR[getRandomNumber(0, MANTLE_COLOR.length - 1)];
    wizard.eyesColor = EYE_COLOR[getRandomNumber(0, EYE_COLOR.length - 1)];
    wizards.push(wizard);
  }
  return wizards;
};
// //////////////////////////////////////////////////////////

var wizards = createsWizards();

// ----------Вставляет данные в шаблон
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
// ///////////////////////////////////////////////////////////////

// --------------Вставляет готовый шаблон в разметку
var outputWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
// //////////////////////////////////////////////////////

outputWizards();
