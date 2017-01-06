(function($) {

    // Toggle menu
    $('.burger-menu').click(function() {
      $( ".navigation, nav" ).fadeToggle({
        left: "-270px"
      }, 3000, function() {
          
      });
    }); 


})(jQuery);