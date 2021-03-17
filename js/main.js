$(document).ready(function(){


    // 
    /* TOP Menu Stick  */
    $(function () {
        var nua = navigator.userAgent
        var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
        if (isAndroid) {
          $('select.form-control').removeClass('form-control').css('width', '100%')
        }
      })
    
  
    // counter-area start  //
    $('.counter').counterUp(3000);
    // counter-area end  //


     // one page nav start //
     $('#nav').onePageNav();

     // one page nav end //
     

     // parallax-active start //
     $('.bg').parallax("50%", 0.4);

     // parallax-active end //
    
    // mobile - menu -active //
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",

    });




    // // slider - active
    // $('.slider-active').owlCarousel({
    //     loop:true,
    //     nav:false,
    //     responsive:{  
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // }) 
    // // slider end //

// slider-area 





  // testimonial slider start //
    $('.testimonial ')({
        loop:true,
        nav:false,
        responsive:{  
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
  // testimonial slider end //



    // latest-blog-active slider start //
    $('.blog-active').owlCarousel({
        autoplay:true,
        smartSpeed:3000,
        loop:true,
        nav:false,
        responsive:{  
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
  // blog-active slider end //
  


      // brand-active slider start //
      $('.brand-active').owlCarousel({
        autoplay:true,
        smartSpeed:3000,
        loop:true,
        nav:false,
        dots:false,
        responsive:{  
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  // brand-active slider end //
 


});
