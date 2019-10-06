'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.setup.querySelector('.setup-close');
  var setupUserName = window.util.setup.querySelector('.setup-user-name');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var START_DIALOG_TOP = 80;
  var START_DIALOG_LEFT = 50;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  };

  var onPopupOpenEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onPopupEnterPress);
    window.backend.load(window.outputWizards, window.util.outputErrors);
  };

  var closePopup = function () {
    window.util.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupClose.removeEventListener('click', closePopup);
    setupClose.removeEventListener('keydown', onPopupEnterPress);
    window.util.setup.style.top = START_DIALOG_TOP + 'PX';
    window.util.setup.style.left = START_DIALOG_LEFT + '%';
    window.util.removeSimilarWizard();
  };

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', onPopupOpenEnterPress);

  // ----Не позволяет распространиться событию, когда фокус находится на инпуте для ввода имени---
  setupUserName.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });
  // ///////////////////////////////////////////////////////////////////////////////////


  // --------Этот кусок кода отвечает за перетаскивания попапа в окне браузера---------------------
  var dialogHandler = window.util.setup.querySelector('.upload'); // Находим элемент при нажатии которого мы сможем передвигать попап

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // -----Кортдинаты мышки в момент нажатии на найденный элемент "dialogHandler"------
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    // ////////////////////////////////////////////////////////////////////

    var dragged = false; // в зависимости от значения этой функции будет выполняться ниженаписанныя функция "onClickPreventDefault"

    var onMouseMove = function (moveEvt) { // Это функция будет вызываться каждый раз когда будет двигаться мышка нажавщая элемент "dialogHandler"
      moveEvt.preventDefault();
      dragged = true;

      // ---- При выполнении функции "onMouseMove" эти два объекта способствуют тому, что shift.x и shift.y всегда будут равны 1 или -1, в зависимости куда мышка двигается------------
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // ---Благодаря тому, что мы можем в зависимость от напрвления мышки получать 1 или -1, мы также можем в зависимости от направления мышки менять top и left нашего попапа
      window.util.setup.style.top = (window.util.setup.offsetTop - shift.y) + 'px';
      window.util.setup.style.left = (window.util.setup.offsetLeft - shift.x) + 'px';
      // /////////////////////////////////////////////////////////////////////////////////////////////

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      // ---Отменяет действия по умолчанию элемента "dialogHandler"
      if (dragged) {
        var onClickPreventDefault = function (evtDefault) {
          evtDefault.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
      // //////////////////////////////////////////////////////////////

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var form = window.util.setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.util.setup.classList.add('hidden');
    }, window.util.outputErrors);
    evt.preventDefault();
    window.util.removeSimilarWizard();
  });

})();
