'use strict';

window.setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = window.setup.querySelector('.setup-close');
var setupUsername = window.setup.querySelector('.setup-user-name');


// На нажатия esc
var onPopupEscPress = function (evt) {
  if (window.isEscKeyCode(evt.keyCode)) {
    window.hideSetup();
  }
};

// Оригинальные координаты окна выбора настройки мага
var originalSetupCoorinat = {};

//  Функция отображет окно выбора мага, удаляя у элемента класс hidden
window.showSetup = function () {
  showSimilar();
  originalSetupCoorinat.x = window.setup.style.left;
  originalSetupCoorinat.y = window.setup.style.top;
  window.setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

//  Функция скрывает окно выбора мага, добавляя  элементу класс hidden
window.hideSetup = function () {
  window.setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  window.setup.style.left = originalSetupCoorinat.x;
  window.setup.style.top = originalSetupCoorinat.y;
  window.cleanSetup();
};
// Открытие - закрытие окна настройки персонажа
setupOpen.addEventListener('click', window.showSetup);
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    window.showSetup();
  }
});

setupClose.addEventListener('click', window.hideSetup);
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    window.hideSetup();
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


