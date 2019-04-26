'use strict';
(function () {
  // Функция получает и отрисовывает схожих магов
  var setupSimilar = window.setup.querySelector('.setup-similar');
  var setupWizardsList = window.setup.querySelector('.setup-similar-list'); //  Куда будем записывать магов
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); //  Шаблон
  window.errorMessage = window.setup.querySelector('.setup-similar-list--error');
  window.errorSubmit = window.setup.querySelector('.setup-submit--error');

  //  Функция отрисовывает мага по шаблону
  var renderWizard = function (wizard, template) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.renderWizards = function () {
    cleanSetup();
    if (window.wizards) {
      var fragment = document.createDocumentFragment();
      var chosenWizards = chooseWizards(window.getUserWizardSettings(), window.wizards);
      for (var i = 0; i < 4; i++) {
        var renderedWizard = renderWizard(chosenWizards[i], wizardTemplate);
        fragment.appendChild(renderedWizard);
      }
      // Добавляем готовый фрагмент в DOM (класс setup-similar-list)
      setupWizardsList.appendChild(fragment);
    }

  };
  //  Функция сортирует массив волшебников по схожести
  var chooseWizards = function (userWizard, allWizards) {
    var COAT_SIMILAR_POINTS = 2;
    var EYES_SIMILAR_POINTS = 1;
    allWizards.forEach(function (wizard) {
      wizard.similarPoints = 0;
      if (userWizard.colorCoat === wizard.colorCoat) {
        wizard.similarPoints += COAT_SIMILAR_POINTS;
      }

      if (userWizard.colorEyes === wizard.colorEyes) {
        wizard.similarPoints += EYES_SIMILAR_POINTS;
      }
    });
    var sortedArray = allWizards.sort(function (left, right) {
      return right.similarPoints - left.similarPoints;
    });
    return sortedArray;

  };

  // Функция очищает содержимое блока setup-similar-list
  var cleanSetup = function () {
    window.removeChildren(setupWizardsList);
    if (!window.errorMessage.classList.contains('hidden')) {
      window.errorMessage.classList.add('hidden');
    }
    if (!window.errorSubmit.classList.contains('hidden')) {
      window.errorSubmit.classList.add('hidden');
    }
  };

  //  Функция будет вызвана в случае успешной загрузки магов
  var onLoadSimilarWizards = function (wizards) {
    window.wizards = wizards;
    window.renderWizards(wizards);
  };


  // Функция будет вызвана в случае появления ошибок
  var onErrorSimilarWizards = function (error) {
    window.errorMessage.textContent = error;
    window.errorMessage.classList.remove('hidden');
    window.wizards = null;
  };
  //  Функция отображет блок настройки мага, удаляя у элемента класс hidden
  window.showSimilar = function () {
    window.load(onLoadSimilarWizards, onErrorSimilarWizards);
    setupSimilar.classList.remove('hidden');
  };

})();
