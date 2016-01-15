var pages = [

      { 
        'id' : "one",    
        frames : [
          { image : "css/img/01.jpg" },
          { image : "css/img/04.jpg" },
          { image : "css/img/02.jpg" },
          { image : "css/img/03.jpg" }
        ],            
      },

      { 
        'id' : "two",    
        frames : [
          { image : "css/img/06.jpg" },
          { image : "css/img/05.jpg" },
          { image : "css/img/07.jpg" }
        ],            
      },

      { 
        'id' : "three",    
        frames : [
          { image : "css/img/06.jpg" },
          { image : "css/img/01.jpg" },
          { image : "css/img/07.jpg" }
        ],            
      },

      { 
        'id' : "four",    
        frames : [
          { image : "css/img/04.jpg" },
          { image : "css/img/03.jpg" },
          { image : "css/img/07.jpg" }
        ],            
      }
]; 


  counter = 0;

  $('.slidemod').click(function () {
      
      for(var i = 0; i < pages.length; i++) {
      var id = $(this).closest("div").attr("id");  
      var brute = pages[i].frames;

        if( id === pages[i].id ){

         counter = (counter + 1) % brute.length; 
         $(this).attr('src',brute[counter].image);
         console.log(brute[counter].image);
       
      }
    }
  });

// $('.video').click(function () {
//   $('iframe').show();
//   $('.videoSlide').hide();

// });

    // $(".video").click(function() {  
    //  // console.log("x");
    //     var iteration=$(this).data('iteration')||1
    //     switch ( iteration) {
    //         case 1:
    //         console.log("x");
    //             $('iframe').show();
    //             $('.videoSlide').hide();
    //         break;  
    //         case 2:
    //             $('.videoSlide').show();
    //             $('iframe').hide();
    //         break;
    //     }
    //     iteration++;
    //     if (iteration>2) iteration=1
    //     $(this).data('iteration',iteration)
    // })



