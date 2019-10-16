
'use strict';

(function () {
  var fileChooser = document.querySelector('input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {

    var file = fileChooser.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      console.log(reader.result);

      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  })
})();
