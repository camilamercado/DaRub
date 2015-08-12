
// var targets = $('.element')
// var width = $('img').offsetWidth;

// console.log(targets);
// var targetImg= targets.children('img');
// console.log(targetImg);

// var imgWidth =targetImg[0].naturalWidth;
// console.log(imgWidth);


// draggable elements

$(function() {
		  $( ".element" ).draggable();
		    // containment: "body"
		  });

		$(function() {                       
		  $(".element").click(function() {  
		    $(this).toggleClass("element_reveal");     
		  });
		});

// Div orientation

		var $divs = $('#one, #two')
		var midX = $('#cumpass').offset().left;

	
		 console.log(midX);
			
			$divs.draggable({
			    drag: function () {
			        var cumpass = $(this), x = $(this).offset().left;
			        // var width = $(this);
			        // var widthX = width[0].offsetWidth;
			        // var newX = x - widthX;


					var img = $(this).children(img), imgX = img[1].offsetWidth, theX = x + imgX;
					console.log(imgX,"+",midX,"=",theX);


			        if(theX > midX){

			   			console.log("!");
			        	$(this).addClass("west"); 
			        	$(this).removeClass("east"); 
			        }

			        if(theX < midX){
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
			        var img = $(this).children(img);		 
				    var text = $(this).children(".text");
				    var h1 = $(this).children(h1);
					 


			        if(y < midY){
			        	$(this).addClass("north"); 
			        	$(this).removeClass("south"); 
			        	$(img).insertBefore(text);
			        }

			        if(y > midY){
			        	$(this).addClass("south"); 
			        	$(this).removeClass("north");
			        	$(img).insertAfter(text);
			        	

			        }

			    }
			});