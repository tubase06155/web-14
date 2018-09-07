$(document).ready(function() {
    $('#textarea_Question').on("input", function() {
      $('#count').text($('#textarea_Question').attr('maxlength') - $('#textarea_Question').val().length);
    });
  });