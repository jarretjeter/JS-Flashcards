$(document).ready(function() {
  $('.clickable').click(function()  {
    // $('#clickable').toggle();
    // $('#clickable').toggle();
  });
  $("#javaPrompt").click(function() {
    // $("li").removeClass();
    $("#javaDef").toggle();
    $("#javaDef").addClass("definition")
  });
  
  $("#opPrompt").click(function() {
    $("#opDef").toggle();
    $("#opDef").addClass("definition");
  });

  $("#varPrompt").click(function() {
    $("#varDef").toggle();
    $("#varDef").addClass("definition");
  });

  $("#funPrompt").click(function() {
    $("#funDef").toggle();
    $("#funDef").addClass("definition");
  });

  $("#methPrompt").click(function() {
    $("#methDef").toggle();
    $("#methDef").addClass("definition");
  });

});




