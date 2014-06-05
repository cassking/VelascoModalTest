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

$("span#close2").click(function() {
  $("div.easeuppane").hide("slow");
 
 });


$('#content').animate({'margin-top': '50px'}, 1000);


$( "#openpane" ).click(function() {
	 $("div.easeuppane").show("slow");

  $(".easeuppane" ).animate({
  height:200,
  width: 300,
  opacity: 0.5
}, 1000, "linear", function() {
  // alert( "all done" );
});


});
 