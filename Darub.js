$(function() {
		  $( ".element" ).draggable();
		    containment: "body"
		  });

		$(function() {                       
		  $(".element").click(function() {  
		    $(this).toggleClass("element_reveal");     
		  });
		});

		var $divs = $('#one, #two')
		var midX = $('#cumpass').offset().left;
	
		 console.log(midX);
			
			$divs.draggable({
			    drag: function () {
			        var cumpass = $(this), x = $(this).offset().left;
			        console.log(x);

			        if(x > midX){
			        	$(this).addClass("west"); 
			        	$(this).removeClass("east"); 
			        }

			        if(x < midX){
			        	$(this).addClass("east"); 
			        	$(this).removeClass("west"); 
			        }

			    }
			});

			var $divs = $('#three')
			var midY = $('#cumpass').offset().top;
			 console.log(midY);
			
			$divs.draggable({
			    drag: function () {
			        var cumpass = $(this), y = $(this).offset().top;
			        console.log(y);


			        if(y < midY){
			        	$(this).addClass("north"); 
			        	$(this).removeClass("south"); 
			        }

			        if(y > midY){
			        	$(this).addClass("south"); 
			        	$(this).removeClass("north"); 
			        }

			    }
			});