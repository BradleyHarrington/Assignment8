$(function() {
    $("img").css("display","none");
    $("img:nth-of-type(1)").css("display","block");

//    console.log($("img").length);
    
    
$('img').on("click", function(){ 
//    console.log("image clicked");
//    console.log(this);
    $(this).css("display","none");
//    $(this).fadeOut("slow");
//    $(this).next().css("display","block");
    $(this).next().fadeIn("slow");
    if ($(this).next().length === 0) {
        $("img:nth-of-type(1)").fadeIn("slow");
    
    }
//    console.log($(this).next());
   
});
    

$("li#1").on("click", function() {
//    console.log($(this).val());
    $("img").css("display","none");
    $("img:nth-of-type(1)").fadeIn("slow");
});
    
$("li#2").on("click", function() {
//    console.log($(this).val());
    $("img").css("display","none");
    $("img:nth-of-type(2)").fadeIn("slow");
});
    
$("li#3").on("click", function() {
//    console.log($(this).val());
    $("img").css("display","none");
    $("img:nth-of-type(3)").fadeIn("slow");
});
    
$("li#4").on("click", function() {
//    console.log($(this).val());
    $("img").css("display","none");
    $("img:nth-of-type(4)").fadeIn("slow");
});
    
$("li#5").on("click", function() {
//    console.log($(this).val());
    $("img").css("display","none");
    $("img:nth-of-type(5)").fadeIn("slow");
});


});







