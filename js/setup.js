'use strict';

(function () {
  var similarListElement = window.util.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

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
  window.outputWizards = function (wizards) {
    var sortWizards = window.sorting(wizards);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(sortWizards[i]));
    }
    window.util.removeSimilarWizard();
    similarListElement.appendChild(fragment);
  };
  // //////////////////////////////////////////////////////

})();
