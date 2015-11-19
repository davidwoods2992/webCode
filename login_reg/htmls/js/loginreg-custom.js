
$(document).ready(function() {
  // control tips on input fields.
    $('#form').find('input, textarea').on('keyup blur focus', function(e) {

    var $this = $(this),
    label = $this.prev('label.fields');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
    } else if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {

      if ($this.val() === '') {
        label.removeClass('highlight');
      } else if ($this.val() !== '') {
        label.addClass('highlight');
      }
    }

  });

  // $('a').on('click', function(e) {
  //   // prevent page from relocating.
  //   e.preventDefault();

  // });

  $("#form-reg").on("click", function() {
    window.location.href = "reg.html";
  });

});
