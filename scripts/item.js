function main() {

	var url = window.location.href;
	var item_name = url.split('?')[1].split("=")[1];

	// var item_data = items_data[item_name]

	for(i = 0; i < items_data.length; i++){
		if (items_data[i]["id"] == item_name){
			var item_data = items_data[i];
			break;
		}
	}


	var app = new Vue({
		el: "#itemPage",
		data: item_data,
	});
}



main();