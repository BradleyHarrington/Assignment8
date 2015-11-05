// 1.	Create a button on a web page. Use the .click() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 

//$(function() {
//    
//$("#button1").click(function(event) {
//    alert(".click me baby");
//});
//
//});


// 2.	Create a button on a web page. Attach the click event using the .bind() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 

//$(function() {
//    
//$("#button1").bind("click", function(event) {
//    alert(".bind me Nanu!!");
//});
//
//});


// 3.	Create a button on a web page. Attach the click event using the .on() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 

//$(function() {
//    
//$("#button1").on("click", function(event) {
//    alert("Ride .on!!");
//});
//
//});

// 4.	Create two buttons on a web page. Attach the click event to both buttons using a single handler using the .on() method. Again, an alert message should be displayed to the user indicating that a button has been clicked when either of the buttons are actually clicked. 

//$(function() {
//    
//$("#button1, #button2").on("click", function(event) {
//    alert("Two button Ride .on!!");
//});
//
//});


// 5.	Create a div on a web page. Use jQuery to set the div element to 400px wide and 400px high. Attach the click, mouseenter, and mouseleave events using the .on() method. Display an alert message to the user indicating that the div was either clicked on, the mouse entered it, or the mouse left it. 

//$(function() {
//
//
//$("#div1").css("background","silver").  
//
//width("400px").height("400px").on({
//    
//    click: function() {alert("You clicked on the div!");},
//    mouseenter: function() {alert("Hovered over the div!");}, 
//    mouseleave: function() {alert("The mouse left the div!");}
//    
//    
//});
//
//});

// 6.	Rewrite the code from number 5. This time add a span tag to the web page. Display three different messages within the span tag when the user enters the div, leaves the div, or clicks on the div.

//$(function() {
//
//
//$("#div1").css("background","silver").  
//
//width("400px").height("400px").on({
//    
//    click: function() {$("span#span1").text("You clicked on the div!");},
//    mouseenter: function() {$("span#span1").text("Hovered over the div!");}, 
//    mouseleave: function() {$("span#span1").text("The mouse left the div!");}
//    
//    
//});
//
//});




// 7.	Create a link within the web page and set its href attribute to browse to google.com. When the user clicks the link, first, prevent it from redirecting to that web site. Second, programmatically style the link so that its color changes to red. Third, display the name of the node that triggered the event within an alert box.

//$(function() {
//    
//    $("a#link1").on("click", function (e) {
//        e.preventDefault();
//        $("a#link1").css("color","red");
//        alert(e.currentTarget + " triggered the event");
//    });
//    
//});



// 8.	Create a div tag within the web page. As the user resizes the browser, display the width and height of the browser window within the div tag.

//$(function() {
//    
//    $(window).resize(function() {
//        $("div#div2").text($(window).width());
//    });
//
//    
//});



// 9.	Create a text field using the <input> tag. When the input has focus, set the background to a light gray color. When the input does not have focus, reset the background back to a white color.

//$(function() {
//    
//    $("#text1").focus(function() {
//        $("#text1").css("background","silver");
//    });
//    $("#text1").blur(function() {
//        $("#text1").css("background","white");
//    });
//
//    
//});



// 10.	Add a form tag within a web page complete with 2 input fields: one that collects name and a second that collects an email. Add a submit button. When the user submits the form, if any one of the two fields is left empty, display an alert box to the user indicating that the fields are required. Give the field that the user left empty a red border. If both fields have values in them, set their borders to green.

$(function() {
    
    $("#btnSubmit").on("click", function (e) {
        e.preventDefault();
        if ($("#name1").val() === "" || $("#email1").val() === "") {
            alert("Both Name and Email fields are required");
        };
        if ($("#name1").val() === "") {
            $("#name1").css("border", "solid 2px red");
         } else if ($("#name1").val() !== "") {
             $("#name1").css("border", "solid 2px green");
         };
        if ($("#email1").val() === "") {
            $("#email1").css("border", "solid 2px red");
         } else if ($("#email1").val() !== "") {
             $("#email1").css("border", "solid 2px green");
         };
        
     return;
    });
    
});






