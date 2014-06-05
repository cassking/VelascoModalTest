$("div.modal").hide();

$("span#open").click(function() {
  $("div.modal").show("slow");
  $("h1").fadeTo("slow", 0.33);
  $("p").fadeTo("slow", 0.33);
  
 });


$("span#close").click(function() {
  $("div.modal").hide("slow");
  $("h1").fadeTo("slow", 1.0);
  $("p").fadeTo("slow", 1.0);
 });
