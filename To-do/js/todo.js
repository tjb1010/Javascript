// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click X to delete todo
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  e.stopPropagation();
});

// add todo, 13 is code for "enter" key
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    var input = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + input + "</li>"
    );
  }
});

// fade input in/out
$("#plus").click(function() {
  $("input[type='text']").fadeToggle(0);
});
