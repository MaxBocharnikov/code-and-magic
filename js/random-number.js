'use strict';

(function () {
  //  Функция генерации случайно числа от min (включительно) до max (не включая)
  window.getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
})();
