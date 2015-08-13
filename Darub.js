
$(function(){
    $(".element").click(function() {  
        var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                 $(this).addClass("element_reveal"); 
                 $(this).draggable({ disabled: true });
                break;
            
            case 2:
                 $(this).removeClass("element_reveal");
                  $(this).draggable("enable");
                break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration)
    })
})

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
        	//document.querySelector(".element_reveal").style.marginLeft = "-200px";	
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