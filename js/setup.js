'use strict';

//  Функция генерации случайно числа от min (включительно) до max (не включая)
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//  Функция генерирует Имя + Отчество
var generateName = function (firstNames, lastNames) {
  var firstNameIndex = getRandomNumber(0, firstNames.length);
  var lastNameIndex = getRandomNumber(0, lastNames.length);

  //  Случайным образом выбираем, с чего будет начинаться полное имя
  //  0 - имя + фамилия
  //  1 - фамилия + имя
  if (!getRandomNumber(0, 2)) {
    return firstNames[firstNameIndex] + ' ' + lastNames[lastNameIndex];
  }
  return lastNames[lastNameIndex] + ' ' + firstNames[firstNameIndex];
};


//  Функция генерирует цвет плаща
var generateCoatColors = function (colorsList) {
  var colorListIndex = getRandomNumber(0, colorsList.length);
  return colorsList[colorListIndex];
};

//  Функция генерирует цвет глаз
var generateEyeColors = function (colorsList) {
  var colorListIndex = getRandomNumber(0, colorsList.length);
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

//  Функция отображет окно выбора мага, удаляя у элемента класс hidden
var showSetup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

//  Функция скрывает окно выбора мага, добавляя  элементу класс hidden
var hideSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

//  Функция отображет блок настройки мага, удаляя у элемента класс hidden
var showSimilar = function () {
  var setup = document.querySelector('.setup-similar');
  setup.classList.remove('hidden');
};


//  Функция отрисовывает мага по шаблону
var renderWizards = function (wizard, template) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  return wizardElement;
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

// На нажатия esc
var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    hideSetup();
  }
};

//  Функция изменяет цвет
var changeColor = function (currentColor, colors) {
  debugger;
  var index = getRandomNumber(0, colors.length - 1);
  var color = colors[index];
  if (color === currentColor) {
    color = changeColor(currentColor, colors);
  }
  return color;
};

//  Реализация программы

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUsername = setup.querySelector('.setup-user-name');
var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat ');
var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

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

var hiddenCoatColor = setup.querySelector('input[name=coat-color]');
var hiddenEyesColor = setup.querySelector('input[name=eyes-color]');
var hiddenFireballColor = setup.querySelector('input[name=fireball-color]');

//  Step 1 - отображаем мага
//  showSetup();

//  Step 2 - генерируем магов
var wizards = generateRandomWizards(wizardSettingsList, 4);

// Step 3 - отрисовываем магов
var setupWizardsList = document.querySelector('.setup-similar-list'); //  Куда будем записывать магов
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); //  Шаблон

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  var renderedWizard = renderWizards(wizards[i], wizardTemplate);
  fragment.appendChild(renderedWizard);
}

// Step 4 - добавляем готовый фрагмент в DOM (класс setup-similar-list)
setupWizardsList.appendChild(fragment);

// Step 5 - отображаем блок выбора магов
showSimilar();

//  Модуль 4

//  Step 1 - Открытие - закрытие окна настройки персонажа
setupOpen.addEventListener('click', showSetup);
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    showSetup();
  }
});

setupClose.addEventListener('click', hideSetup);
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    hideSetup();
  }
});

setupUsername.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUsername.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

//  Step 3 - Изменение цвета мантии персонажа по нажатию
setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = changeColor(setupWizardCoat.style.fill, coatColors);
  hiddenCoatColor.value = setupWizardCoat.style.fill;
});

//  Step 4 - Изменения цвета глаз персонажа по нажатию
setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = changeColor(setupWizardEyes.style.fill, eyesColors);
  hiddenEyesColor.value = setupWizardEyes.style.fill;
});

//  Step 5 - Изменения цвета фаерболла по нажатию
setupFireball.addEventListener('click', function () {
  hiddenFireballColor.value = changeColor(hiddenFireballColor.value, fireballColors);
  setupFireball.style.backgroundColor = hiddenFireballColor.value;
});

