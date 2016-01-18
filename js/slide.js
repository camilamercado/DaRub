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
        // console.log(brute[counter].image);
       
      }
    }
  });




