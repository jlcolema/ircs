// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	/*-------------------------------------------
		Highlights
	-------------------------------------------*/

	$(".highlights .slides").cycle({ 
		fx:     'fade', 
		speed:  'slow', 
		timeout: 9000, 
		pager:  '.highlights .tabs', 
		pagerAnchorBuilder: function(idx, slide) { 
			// return selector string for existing anchor 
			return '.highlights .tabs li:eq(' + idx + ') a'; 
		} 
	});

	/*-------------------------------------------
		Other Services Tabs
	-------------------------------------------*/

	// Normal

	$(".tab-content").hide(); // Hide all content
	$(".other-services .tabs li:first").addClass("active").show(); // Activate first tab
	$(".tab-content:first").show(); // Show first tab content
	
	// Active

	$(".other-services .tabs li").click(function() {

		$(".other-services .tabs li").removeClass("active"); // Remove any "active" class
		$(this).addClass("active"); // Add "active" class to selected tab
		$(".tab-content").hide(); // Hide all tab content
		var activeTab = $(this).find("a").attr("href"); // Find the rel attribute value to identify the active tab + content
		$(activeTab).show(); // Fade in the active content
		return false;

	});

	/*-------------------------------------------
		Tips
	-------------------------------------------*/

	$('.tips .slides').cycle({ 
		fx:     'fade', 
		speed:  'fast', 
		timeout: 0, 
		next:   '.tips .next', 
		prev:   '.tips .prev' 
	});


});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/