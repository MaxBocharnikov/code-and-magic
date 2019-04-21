'use strict';
(function () {
  // Функция получает и отрисовывает схожих магов
  window.getSimilarWizards = function () {
    var setupWizardsList = window.setup.querySelector('.setup-similar-list'); //  Куда будем записывать магов
    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); //  Шаблон
    window.errorMessage = window.setup.querySelector('.setup-similar-list--error');
    window.errorSubmit = window.setup.querySelector('.setup-submit--error');

    //  Функция отрисовывает мага по шаблону
    var renderWizards = function (wizard, template) {
      var wizardElement = template.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
      return wizardElement;
    };

    //  Функция из полученного массива магов выбирает num кол-во магов
    var chooseWizards = function (wizards, num) {
      var chosenWizards = [];
      var index;
      for (var i = 0; i < num; i++) {
        index = window.getRandomNumber(0, wizards.length);
        chosenWizards.push(wizards[index]);
        wizards.slice(index, 1);
      }
      return chosenWizards;
    };
    // Функция очищает содержимое блока setup-similar-list
    window.cleanSetup = function () {
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
      var fragment = document.createDocumentFragment();
      var chosenWizards = chooseWizards(wizards, 4);
      for (var i = 0; i < chosenWizards.length; i++) {
        var renderedWizard = renderWizards(chosenWizards[i], wizardTemplate);
        fragment.appendChild(renderedWizard);
      }
      // Добавляем готовый фрагмент в DOM (класс setup-similar-list)
      setupWizardsList.appendChild(fragment);
    };


    // Функция будет вызвана в случае появления ошибок
    var onErrorSimilarWizards = function (error) {
      window.errorMessage.textContent = error;
      window.errorMessage.classList.remove('hidden');
    };

    window.load(onLoadSimilarWizards, onErrorSimilarWizards);
  };

})();
