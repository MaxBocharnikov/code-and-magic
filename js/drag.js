'use strict';

(function () {
  var userPic = window.setup.querySelector('.upload');

  var mouseDownHandler = function (downEvt) {
    downEvt.preventDefault();
    var drag = false;

    var currentCoord = {
      x: downEvt.clientX,
      y: downEvt.clientY
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      drag = true;

      var shift = {
        x: moveEvt.clientX - currentCoord.x,
        y: moveEvt.clientY - currentCoord.y
      };

      currentCoord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.style.left = window.setup.offsetLeft + shift.x + 'px';
      window.setup.style.top = window.setup.offsetTop + shift.y + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    var userPicClickHandler = function (evt) {
      if (drag) {
        evt.preventDefault();
        drag = false;
      }
    };


    document.addEventListener('mousemove', mouseMoveHandler);
    userPic.addEventListener('mouseup', mouseUpHandler);
    userPic.addEventListener('click', userPicClickHandler);
  };

  userPic.addEventListener('mousedown', mouseDownHandler);
})();
