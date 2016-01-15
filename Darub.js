// DO NOT ALTER THIS CONTENT
// IT DIRECTS THE ENTRY MODULES AND THE CONTENT WITHIN 
// THEM HOW TO ALLIGN THEMSELVES UPON SWITCHING BETWEEN
// EACH DIRECTION THRESHOLD

var state="";
$("img").mouseover(function(){state ="lock";});
$("img").mouseout(function(){state ="open";});

$(function(){
    $(".element").click(function() {  
        var iteration=$(this).data('iteration')||1
        switch ( iteration) {
            case 1:
                 $(this).addClass("element_reveal"); 
                // $(this).draggable({ disabled: true });

                 var div = $(this), divX = (div[0].offsetWidth) - 80;
                 var img = $(this).children(img), imgML = -(img[1].offsetWidth + 20), imgMT = -(img[2].offsetHeight + 20);

                 if ($(this).hasClass('west')) {
                     $(this).css('margin-left', imgML); 
                      //console.log(imgML);
                 }
                 if ($(this).hasClass('south')) {
                     $(this).css('margin-top', imgMT); 
                     //console.log(imgMT);
                 }
                 $(this).find('iframe').show();
                 $(this).find('.videoSlide').hide();
            
            break;  
            case 2:
                 if (state==="lock") {
                    //no action
                 } else {
                 $(this).removeClass("element_reveal");
                 $(this).find('iframe').hide();
                 $(this).find('.videoSlide').show();
                 $(this).css('margin-left', '0px');
                 $(this).css('margin-top', '0px');
                 
                 }
            break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration)
    })
})

// ONLY EDITABLE CONTENT BELOW, 
// ADD THE NAME OF NEW ELEMENTS HERE IF THEY HAVE AN 
// INITIAL DIRECETION CLASS OF EAST OR WEST

var $divs = $('#one, #two, #four' )

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

var $divs = $('#three', '#five')

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




