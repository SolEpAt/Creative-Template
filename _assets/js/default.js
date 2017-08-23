$(document).ready(function(){
        //function used to set header background color when user scrolls to about 400px down the page
       $(window).scroll(function(){
          
           var wScroll = $(this).scrollTop();
            //change when background when user scroll's and 
            //set header background color when user is in the mobile viewport
           if(wScroll >= 550 || $( window ).width() <= 767 ){
 
               $('.navbar-default').css({
                   "background" : "rgba(0,0,0,0.8)",
                   "border-bottom" : "4px solid rgba(51,122,183,1)",
                   "transition-property" : "background",
                   "transition-duration" : "1s",
                   "transition-style" : "ease-in",
                   
               });
               
           }else{
               $('.navbar-default').css({
                   "background" : "rgba(0,0,0,0.0)",
                   "border-bottom" : "none",
                   "transition-property" : "background",
                   "transition-duration" : "1s",
                   "transition-style" : "ease-out"
               });
           }
           
           //handles navigation in mobile view to keep fixed and at the top
           if($( window ).width() <= 767 && wScroll >= 550){
              $('.navbar-default').css({
                   "position" : "fixed",
                   "top" : "0",
                  "transition" : "all 5s",
                   
               });
               
               
            }
              
           if( wScroll < 550 && $( window ).width() <= 767){
                 
                   $('.navbar-default').css({
                       "position" : "initial",
                       "top" : "initial",
                      "transition" : "initial",

                   }); 
            
            }
           
       });
    
        //set background color on nav when user is on any section of the page  then refreshes the page
     //set header background color when user is in the mobile viewport
       if( $(window).scrollTop() >= 550 || $( window ).width() <= 767 ){
           $('.navbar-default').css({
                   "background" : "rgba(0,0,0,0.8)",
                   "border-bottom" : "4px solid rgba(51,122,183,1)",
                   "transition-property" : "background",
                   "transition-duration" : "1s",
                   "transition-style" : "ease-in"
            });
          
       }else{
           $('.navbar-default').css({
                   "background" : "rgba(0,0,0,0.0)",
               "border-bottom" : "none",
                   "transition-property" : "background",
                   "transition-duration" : "1s",
                   "transition-style" : "ease-out"
            });
       }
        

    
    //this will hide navigation in mobile view when user clicks on any nav items
    //and also it will navigate to section of the page  
   
       $(".goto").on('click', function(event) {
        
        //hide navigation once user has clicked on the nav element in mobile
        if( $(window).width() <= 767 ){
            
          //check if element doesn't have the collapsed class, if yes add it if it has, remove it
             if($('#collapsemenu').hasClass('collapse') && $('#collapsemenu').hasClass('in') ){
                   $('#collapsemenu').removeClass('in');          

              }
        }
           
           
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;
            console.log(hash);

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1400, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    
//    
//    //switch about me image when user hovers on it
//    $('.img.img-responsive.img-rounded').hover(
//        //handling what happens when user hovers on the element (mouseenter)
//        function(){
//            $('.img.img-responsive.img-rounded').css({
//                "transform": "rotateY(180deg)",
//	            "transition": "all 5s"
//            });
//            
//           $('.img.img-responsive.img-rounded').attr('src','_assets/img/me2.jpg'); 
//            console.log('inside mouse enter function');
//        },
//        
//        //handling mouseleave event
//        function(){
//            $('.img.img-responsive.img-rounded').css({
//                "transform": "rotateY(360deg)",
//	            "transition": "all 5s"
//            });
//            
//           $('.img.img-responsive.img-rounded').attr('src','_assets/img/me.png');
//            console.log('inside mouse leave function');
//        }
//    
//    );
//    
//    
   });