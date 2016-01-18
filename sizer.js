$( document ).ready(function() {

	$(".element").each(function(){
	    var images = $(this).find("img");
	    var width = $(this).width();
	    var height = $(this).height();
	    var offsetL = $(this).offset().left + "px";
	    var offsetT = $(this).offset().top + "px"; 
	    
	     $(images).css("width", width);
	     $(images).css("height", height);
	
	});

    $(".element").click(function(){
	    var images = $(this).find("img");
	    var width = images.width();
	    var height = images.height();
	    var id = $(this).closest("div").attr("id");  
	    var eClass = $(this).closest("div").attr("class");  

	    if (eClass.indexOf("element_reveal") >= 0) {

	    	//set text to equal same dimensions of image

	    	$(this).find(".text").css("width", width); 
	    	$(this).find(".text").css("height", height);  

    		 
		    if (eClass.indexOf("north") >= 0 || eClass.indexOf("south") >= 0) {
		    	
		    	var newWidth= width + 20 +"px"; 
		    	var newHeight= (height * 2) + 44 +"px"; 
		    	$(this).css("width", newWidth);
		    	$(this).css("height", newHeight);
		    };

		    if (eClass.indexOf("east") >= 0 || eClass.indexOf("west") >= 0) {

		    	var newWidth= (width * 2) + 20 +"px"; 
		    	var newHeight= height + 20 +"px"; 
		    	$(this).css("width", newWidth);
		    	$(this).css("height", newHeight);
		    };
		
		} else {
			$(this).css("width", "0px");
		    $(this).css("height", "0px");
		}
	});
    
});