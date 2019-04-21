'use strict';
(function () {
  //  Функция генерирует Имя + Отчество
  var generateName = function (firstNames, lastNames) {
    var firstNameIndex = window.getRandomNumber(0, firstNames.length);
    var lastNameIndex = window.getRandomNumber(0, lastNames.length);
    //  Случайным образом выбираем, с чего будет начинаться полное имя
    //  0 - имя + фамилия
    //  1 - фамилия + имя
    if (!window.getRandomNumber(0, 2)) {
      return firstNames[firstNameIndex] + ' ' + lastNames[lastNameIndex];
    }
    return lastNames[lastNameIndex] + ' ' + firstNames[firstNameIndex];
  };
  //  Функция генерирует цвет плаща
  var generateCoatColors = function (colorsList) {
    var colorListIndex = window.getRandomNumber(0, colorsList.length);
    return colorsList[colorListIndex];
  };
  //  Функция генерирует цвет глаз
  var generateEyeColors = function (colorsList) {
    var colorListIndex = window.getRandomNumber(0, colorsList.length);
    return colorsList[colorListIndex];
  };
  //  Функция генерирует одного мага
  var generateWizard = function (wizardSettingsList) {
    var wizard = {};
    wizard.name = generateName(wizardSettingsList.firstNames, wizardSettingsList.lastNames);
    wizard.coatColor = generateCoatColors(wizardSettingsList.coatColors);
    wizard.eyeColor = generateEyeColors(wizardSettingsList.eyesColors);
    return wizard;
  };
  // Функциия случайной генерации магов
  var generateRandomWizards = function (wizardSettingsList, quantity) {
    var generatedWizards = [];
    for (var i = 0; i < quantity; i++) {
      var wizard = generateWizard(wizardSettingsList);
      generatedWizards.push(wizard);
    }
    return generatedWizards;
  };

  // Объект с возможными настройками волшебник
  var wizardSettingsList = {
    firstNames: [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Викто',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],

    lastNames: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],

    coatColors: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],

    eyesColors: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ]
  };


 // window.wizards = generateRandomWizards(wizardSettingsList, 4);
})();
