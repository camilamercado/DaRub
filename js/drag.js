// ONLY EDITABLE CONTENT BELOW, 
// ADD THE NAME OF NEW ELEMENTS HERE IF THEY HAVE AN 
// INITIAL DIRECETION CLASS OF EAST OR WEST

var $divs = $('.east' , '.west' )

//DO NOT ALTER CONTENT BELOW

var midX = $('#cumpass').offset().left;

$divs.draggable({
    drag: function () {
        var cumpass = $(this), x = $(this).offset().left;
        var img = $(this).children(img), imgX = img[1].offsetWidth, imgMargin = 0 - imgX; theX = x + imgX;
        
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

// ONLY EDITABLE CONTENT BELOW, 
// ADD THE NAME OF NEW ELEMENTS HERE IF THEY HAVE AN 
// INITIAL DIRECETION CLASS OF NORTH OR SOUTH

var $divs = $('.north', '.south')

//DO NOT ALTER CONTENT BELOW

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




