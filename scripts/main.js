function main(){
	var items = [];
	for (i = 0; i < items_data.length; i++){
		items[i] = items_data[i]["name"];
	}


	$('#query').typeahead({        
	        local: items,
	});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	$('.tt-query').css('background-color','#fff');  

	$('#searchForm').submit(function(event){

		event.preventDefault();

		console.log("submitted");

		var item_name = $('#query').val();
		var query;
		var valid = false;

		for (i = 0; i < items_data.length; i++){
			if(items_data[i]["name"] == item_name){
				query = items_data[i]["id"];
				valid = true;
				break;
			}
			
		}

		if(valid) {
			// we have the item they searched for, so navigate to page
			window.location.href = "item.html?item=" + query;
		} else {
			// Have bootstrap modal pop up
			$('#invalidSearchModal').modal('show');
		}

	});

	console.log('hello');
}



$(document).ready(function(){
	main();
});



