$("div.modal_boxes").hide();

$("span#open1").click(function() {
  $("div.one").show("slow");
  $("h1").fadeTo("slow", 0.33);
  $("p").fadeTo("slow", 0.33);
 });


$("span#close").click(function() {
  $("div.modal_boxes").hide("slow");
  $("h1").fadeTo("slow", 1.0);
  $("p").fadeTo("slow", 1.0);
 });
