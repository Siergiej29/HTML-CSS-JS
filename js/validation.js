$(document).ready(function() {
  $(".log-in-btn").click(function(event) {
  event.preventDefault();
  validateForm(); 
    // WAŻNE !!!!! ten modal powinien byc raczej w ifie wersji true, ale narazie jest tu bo chce się pochwalić :D
  });
});

function Modal() {
  var modal = document.getElementById("own-modal");
  var close = document.getElementById("close")[0];
  var login = $("#login");
  var password = $("#passw");
  $("#own-modal").css("display", "block");
  $(close).click(function() {
    $(modal).css("display","none");
  });
  $(modal).click(function() {
    $(modal).css("display","none");
  });
}

function validateForm() {
  var reLogin = /.+@.+/;
  var login = $("#login");
  var password = $("#passw");
  if (reLogin.test(login.val()) && (password.val().length)>=8) {
    Modal();
  }
  else {
    $(".wrong-log").css("display", "block");
  }
}

//$("button[type="submit"]").removeAttr("data-toogle");
//$("button[type="submit"]").attr("data-toogle","modal");
//$(".bs-example-modal-sm").modal(show: false);