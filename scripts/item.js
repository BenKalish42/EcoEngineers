function main(items_data) {

	var url = window.location.href;
	var item_name = url.split('?')[1].split("=")[1];

	var item_data = items_data[item_name]

	var app = new Vue({
		el: "#itemPage",
		data: item_data,
	});
}

var items_data = {
	"can": {
		"name": "Aluminum Cans",
		"recyclable": true,
		"special": false,
		"where": "Aluminum cans can be recycled in any regular blue-colored recycling bin.",
		"facts": "Americans throw away over $1 billion worth of aluminum cans every year. Discarded aluminum is more valuable than any other item in a recycling bin. Aluminum cans are 100% recyclable."
	}
}

main(items_data);