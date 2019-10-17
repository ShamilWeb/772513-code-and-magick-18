
'use strict';

(function () {
  var fileChooser = document.querySelector('input[type=file]');
  var preview = document.querySelector('.setup-user-pic');
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  // -----------Проверяет загруженный файл изображение или нет----------------------------
  var doesСheckImg = function (file) {
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });
    return matches;
  };
  // ///////////////////////////////////////////////////////////////////////////////

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];

    if (doesСheckImg(file)) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
