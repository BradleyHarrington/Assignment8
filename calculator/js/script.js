$(function() {

$("#result").css({"background-color":"aliceblue", "border":"3px solid crimson", "font":"25px red"}).width("265px").height("50px");    
$(":button").css({"background-color":"coral", "border":"1px solid crimson"}).width("50px").height("50px");
//$("#container").css("background-color","gray").width("270px");
$(":button#equal").width("256px");

var step1 = 0;
var step2 = 0;    

$(":button").on("click", function(event) {
    event.preventDefault;
//    var step1 = 0;
//    var step2 = 0;
    
    if (event.currentTarget.id !== "equal" && event.currentTarget.id !== "clear") {
//        console.log($(this).val());
        $("#result")[0].value += event.currentTarget.value;
//         var contents = event.currentTarget.value;
//        console.log(contents);
//         $("#result").val(contents) += event.currentTarget.value;
         
    } else if (event.currentTarget.id === "equal") {
//        console.log(event.currentTarget.id);
//        console.log($("#result")[0].value);
        var calc1;
        calc1 = $("#result")[0].value;
        $("#result")[0].value = eval(calc1);
    
    } else if (event.currentTarget.id === "clear") {
        $("#result")[0].value = "";
        
    } else {
        var doNothing;
    }



});

    
});