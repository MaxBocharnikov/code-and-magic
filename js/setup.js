'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUsername = setup.querySelector('.setup-user-name');

// На нажатия esc
var onPopupEscPress = function (evt) {
  if (window.isEscKeyCode(evt.keyCode)) {
    hideSetup();
  }
};

// Оригинальные координаты окна выбора настройки мага
var originalSetupCoorinat = {};

//  Функция отображет окно выбора мага, удаляя у элемента класс hidden
var showSetup = function () {
  originalSetupCoorinat.x = setup.style.left;
  originalSetupCoorinat.y = setup.style.top;
  setup.classList.remove('hidden');
  showSimilar();
  document.addEventListener('keydown', onPopupEscPress);
};

//  Функция скрывает окно выбора мага, добавляя  элементу класс hidden
var hideSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setup.style.left = originalSetupCoorinat.x;
  setup.style.top = originalSetupCoorinat.y;
};
// Открытие - закрытие окна настройки персонажа
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

//  Функция отображет блок настройки мага, удаляя у элемента класс hidden
var showSimilar = function () {
  var setupSimilar = document.querySelector('.setup-similar');
  window.getSimilarWizards();
  setupSimilar.classList.remove('hidden');
};


