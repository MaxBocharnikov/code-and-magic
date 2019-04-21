'use strict';

(function () {
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat ');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var hiddenCoatColor = document.querySelector('input[name=coat-color]');
  var hiddenEyesColor = document.querySelector('input[name=eyes-color]');
  var hiddenFireballColor = document.querySelector('input[name=fireball-color]');
  var submit = document.querySelector('.setup-submit');

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(0, 0, 0)'
  ];
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  //  Функция изменяет цвет
  var changeColor = function (currentColor, colors) {
    var index = window.getRandomNumber(0, colors.length - 1);
    var color = colors[index];
    if (color === currentColor) {
      color = changeColor(currentColor, colors);
    }
    return color;
  };

  // Функция-коллбэк на успешную отправку данных
  var onSaveSuccess = function () {
    window.hideSetup();
  };

  // Функция-коллбэк на ошибочную отправку данных
  var onSaveError = function (errorMesage) {
    window.errorSubmit.classList.remove('hidden');
    window.errorSubmit.textContent = errorMesage;
  };

  // Изменение цвета мантии персонажа по нажатию
  setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = changeColor(setupWizardCoat.style.fill, coatColors);
    hiddenCoatColor.value = setupWizardCoat.style.fill;
  });

  //  Изменения цвета глаз персонажа по нажатию
  setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = changeColor(setupWizardEyes.style.fill, eyesColors);
    hiddenEyesColor.value = setupWizardEyes.style.fill;
  });

  //  Изменения цвета фаерболла по нажатию
  setupFireball.addEventListener('click', function () {
    hiddenFireballColor.value = changeColor(hiddenFireballColor.value, fireballColors);
    setupFireball.style.backgroundColor = hiddenFireballColor.value;
  });

  // На нажатие кнопки [Сохранить]
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    var form = document.querySelector('.setup-wizard-form');
    window.save(new FormData(form), onSaveSuccess, onSaveError);
  });

})();
