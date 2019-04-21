'use strict';
(function () {
  var ESC_KEYCODE = 27;

  // Проверяет на ESC
  window.isEscKeyCode = function (keycode) {
    return keycode === ESC_KEYCODE;
  };

  // Удаляет деток
  window.removeChildren = function(elem) {
    while (elem.lastChild) {
      elem.removeChild(elem.lastChild);
    }
  };

  //  Функция генерации случайно числа от min (включительно) до max (не включая)
  window.getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };


})();
