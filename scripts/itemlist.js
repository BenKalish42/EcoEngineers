function main() {

	var itemlist = new Vue({
		el: "#itemListPage",
		data: {
			items: items_data,
		}
	});

	// filterable search
	$("#itemSearchBar").keyup(function(){
		var input, filter, table, tr, td, i;
		filter = this.value.toUpperCase();
		table = document.getElementById("itemTable");
		tr = table.getElementsByTagName("tr");

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 1; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[0];
			if (td) {
				if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			} 
		}
	});

	// checkbox listener: changes list based on checkbox val
	$('input:checkbox').change(function(){
		var value = this.value;
		var checked = $(this).is(':checked');
		var table = document.getElementById("itemTable");
		var tr = table.getElementsByTagName("tr");

		for (i = 1; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[1];
			var recyclability = td.getElementsByTagName("span")[0].innerHTML.toLowerCase();
			if (td && recyclability == value) {
				if (checked) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}

			}
		}
	});

	// make items clickable
	$(".item-search-row").click(function() {
        window.location.href = $(this).data("href");
    });

	// filter list based on the page they came from
	var url = window.location.href;
	var items_name = url.split('?')[1].split("=")[1];
	var checkboxes = document.getElementsByClassName("filter-buttons")[0].getElementsByTagName("input");

	var x = 0;
	var loopArray = function(arr) {
	    checkCheckbox(arr[x],function(){
	        // set x to next item
	        x++;

	        // any more items in array? continue loop
	        if(x < arr.length) {
	            loopArray(arr);   
	        }
	    }); 
	}
	function checkCheckbox(checkbox,callback) {
	    // code to show your custom alert
	    // in this case its just a console log
	    if(checkbox.value != items_name){
	    	$(checkbox).prop("checked", false).change()
		}
	    // do callback when ready
	    callback();
	}

	loopArray(checkboxes);

}

function itemPage(id){
	window.location.href = "item.html?item=" + id;
}


main();