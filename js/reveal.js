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
                 //$(this).draggable({ disabled: true });

                 var div = $(this), divX = (div[0].offsetWidth) - 80,
                 img = $(this).children(img),
                 imgML = -(img[1].offsetWidth + 20), 
                 imgMT = -(img[2].offsetHeight + 20);
        
                 if ($(this).hasClass('west')) {
                     $(this).css('margin-left', imgML); 
                      
                 } if ($(this).hasClass('south')) {
                     $(this).css('margin-top', imgMT); 
                     
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
                     
                     if ($(this).hasClass('west')) {
                        var imageW = $(this).find("img").width();
                        $(this).css('margin-left', imageW);
                     
                     }  
                 
                 }
            break;
        }
        iteration++;
        if (iteration>2) iteration=1
        $(this).data('iteration',iteration)
    })
})

