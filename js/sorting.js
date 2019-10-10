'use strict';

(function () {

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.mantleColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.eyeColor) {
      rank += 1;
    }

    return rank;
  };

  window.sorting = function (arry) {
    var sortArry = arry.slice().sort(function (right, left) {
      var rankDiff = getRank(left) - getRank(right);
      return rankDiff;
    });

    return sortArry;
  };


})();
