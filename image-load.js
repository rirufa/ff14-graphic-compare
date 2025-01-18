var SELECTED_COOKIE = "selectd";

$(document).ready(function() {
	$("#select_image_button").click(function (e){
		var target = $("#race-selector").val();
		$("img").each(function(index,item){
			var datasrc = $(item).attr("data-src");
			var datatype = $(item).attr("data-type");
			$(item).attr("src","/" + datatype + "/" + target + "/" + datasrc);
		});
		sessionStorage.setItem(SELECTED_COOKIE,$("#race-selector").prop("selectedIndex"));
		$(".myImageCompare").each(function (index,item){
			$(item).imagesCompare();
		});
	});

	var selected_index = parseInt(sessionStorage.getItem(SELECTED_COOKIE));
	$("#race-selector").prop("selectedIndex",selected_index);
	$("#select_image_button").click();
}); 
