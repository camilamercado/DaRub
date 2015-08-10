
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
			        var img = $(this).children(img);
					 console.log(img);
					 var text = $(this).children(".text");
					 var h1 = $(this).children(h1);
					 console.log(img);


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