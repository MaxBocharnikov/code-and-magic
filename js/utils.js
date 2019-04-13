'use strict';
(function () {
  var ESC_KEYCODE = 27;
  window.isEscKeyCode = function (keycode) {
    return keycode === ESC_KEYCODE;
  };
})();
