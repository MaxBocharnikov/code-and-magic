'use strict';
(function () {
  window.load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var errorMessage = 'Упс, что-то пошло не так. Повторите попытку';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 10000;
    xhr.open('GET', URL);
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError(errorMessage);
      }
    });

    xhr.addEventListener('error', function () {
      onError(errorMessage);
    });

    xhr.addEventListener('timeout', function () {
      onError('Упс. Волшебники опаздывают. Повторите попытку');
    });
    xhr.send();
  };

  window.save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    var errorMessage = 'Упс, что-то пошло не так. Повторите попытку';
    xhr.responseType = 'json';
    xhr.timeout = 10000;

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad();
      } else {
        onError(errorMessage);
      }
    });

    xhr.addEventListener('error', function () {
      onError(errorMessage);
    });

    xhr.addEventListener('timeout', function () {
      onError('Сообщение шло слишком долго. Повторите попытку');
    });


    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
