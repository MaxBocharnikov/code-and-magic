'use strict';
(function () {
  var setupWizardsList = document.querySelector('.setup-similar-list'); //  Куда будем записывать магов
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); //  Шаблон
  //  Функция отрисовывает мага по шаблону
  var renderWizards = function (wizard, template) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
    return wizardElement;
  };
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < window.wizards.length; i++) {
    var renderedWizard = renderWizards(window.wizards[i], wizardTemplate);
    fragment.appendChild(renderedWizard);
  }
  // Добавляем готовый фрагмент в DOM (класс setup-similar-list)
  setupWizardsList.appendChild(fragment);
})();
