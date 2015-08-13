$(function(){
    $(".element").click(function() {  
        var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                 $(this).addClass("element_reveal"); 
                 $(this).draggable({ disabled: true });

                 var div = $(this), divX = (div[0].offsetWidth) - 80;
                 var img = $(this).children(img), imgX = img[1].offsetWidth;
                 console.log(divX, imgX);
                
                 //$(this).css( "width", divX );

                 // $(this).css( "margin-left", imgX ); 
                 // $(this).find(".west").css("margin-left", "200px");
                
                break;
            
            case 2:
                 $(this).removeClass("element_reveal");
                 $(this).draggable("enable");
                 //$(this).css( "width", "auto" );
                break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration)
    })
})
// Div orientation

var $divs = $('#one, #two, #four' )
var midX = $('#cumpass').offset().left;

$divs.draggable({
    drag: function () {
        var cumpass = $(this), x = $(this).offset().left;
       	var img = $(this).children(img), imgX = img[1].offsetWidth, imgMargin = 0 - imgX; theX = x + imgX;
		console.log(imgX,"+",midX,"=",theX, imgMargin);	

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

