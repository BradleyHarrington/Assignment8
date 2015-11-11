$(function() {
    
    $('.tabMenu .tab-links a').on('click', function(e)  {
        e.preventDefault();
        $
//        console.log($(e.currentTarget).attr('href'));
        var attrValue = $(e.currentTarget).attr('href');
//        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabMenu ' + attrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(e.currentTarget).parent('li').addClass('active').siblings().removeClass('active');
 
        
    });
});