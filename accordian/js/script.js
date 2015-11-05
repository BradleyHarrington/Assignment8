$(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      
        
      //Change Classes
      $(this).find("i").toggleClass("fa-minus-circle fa-plus-circle");
      $(this).toggleClass("accordion-toggle-minus accordion-toggle-plus");
//        console.log(this);
        
      // Check if H4 has class, remove h4 class and i class and hide panel

        console.log($(this).siblings("h4").hasClass("accordion-toggle-minus"));
    
    if ($(this).siblings("h4").hasClass("accordion-toggle-minus")) {
        
        $(this).siblings("h4").removeClass("accordion-toggle-minus");
        $(this).siblings("h4").find("i").removeClass("fa-minus-circle");
        $(".accordion-content").not($(this).next()).slideUp('fast');

    }    
    // if H4 has No neither class, add the plus class
        if (!$(this).siblings("h4").hasClass("accordion-toggle-minus") && !$(this).siblings("h4").hasClass("accordion-toggle-minus")) {
        
        $(this).siblings("h4").addClass("accordion-toggle-plus");
        $(this).siblings("h4").find("i").addClass("fa-plus-circle");

    }        
        
        
    });
  });
    
    
    
  