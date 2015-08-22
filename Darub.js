
$(function() {
		  $( ".element" ).draggable();
		  
		    containment: "body"
		  });

		$(function() {                       
		  $(".element").click(function() {  
		    $(this).toggleClass("element_reveal");
		   $( ".element_reveal" ).draggable( "option", "addClasses", false );

		  });
		});


		// var state = true;

		// $(".element").on('click', function() {
		//      $(this).addClass( "element_reveal", state ? this.value : 'normal' );
		//     state = !state;
		// });


// Div orientation

var $divs = $('#one, #two')
var midX = $('#cumpass').offset().left;

$divs.draggable({
    drag: function () {
        var cumpass = $(this), x = $(this).offset().left;
       	var img = $(this).children(img), imgX = img[1].offsetWidth, theX = x + imgX;
		console.log(imgX,"+",midX,"=",theX);
	

        if(theX > midX){
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