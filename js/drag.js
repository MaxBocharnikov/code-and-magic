'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var userPic = setup.querySelector('.upload');

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

      setup.style.left = setup.offsetLeft + shift.x + 'px';
      setup.style.top = setup.offsetTop + shift.y + 'px';
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
