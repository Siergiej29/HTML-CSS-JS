$(document).ready(function() {
  $(".log-in-btn").click(function(event) {
  event.preventDefault();
  validateForm(); 
  });
});

function Modal() {
  var modal = document.getElementById("own-modal");
  var close = document.getElementById("close")[0];
  var login = $("#login");
  var password = $("#passw");
  $("#own-modal").show();
  $(".login-name").text(login.val());
  $(".pass-name").text(password.val());
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

