/*parsed HTML*/
$(function(){
	$(".maxheight, .maxheight1, .maxheight2, .maxheight3").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){

	if($(window).width()> 480){
		$(".maxheight").equalHeights()
	}else{
		$(".maxheight").css({'height':'auto'});
	}
    
    
    
    
	if($(window).width()> 440){
		$(".maxheight1").equalHeights()
	}else{
		$(".maxheight1").css({'height':'auto'});
	}    
    
	if($(window).width()> 440){
		$(".maxheight2").equalHeights()
	}else{
		$(".maxheight2").css({'height':'auto'});
	}
    
	if($(window).width()> 480){
		$(".maxheight3").equalHeights()
	}else{
		$(".maxheight3").css({'height':'auto'});
	}
    
}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)
