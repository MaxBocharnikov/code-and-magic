'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat ');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var hiddenCoatColor = setup.querySelector('input[name=coat-color]');
  var hiddenEyesColor = setup.querySelector('input[name=eyes-color]');
  var hiddenFireballColor = setup.querySelector('input[name=fireball-color]');

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


  // Step 3 - Изменение цвета мантии персонажа по нажатию
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

})();
