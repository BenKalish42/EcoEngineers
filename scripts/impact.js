function main() {

	var app = new Vue({
		el: "#impactPage",
		data: {
			amount: 0,
			percent: 0,
			calculated: false,
		}
	});

	const epy = 692.0

	var plotted = false;

	$("#calculateForm").submit(function(event){

		event.preventDefault();

		var num_people = $("#numPeople").val();
		var num_years = $("#numYears").val();

		var item_values = {
			cans: 89.38,
			plastic: 35.56,
			glass: 25.39,
			newspaper: 113.14,
			magazines: 27.46,
		}

		for (var el of $('#recyclableItems').find('input')){
			if (!el.checked){
				item_values[$(el).val()] = 0;
			}
		}

		// calculate emissions data
		var normal_total = num_people*num_years*epy;
		var emissions_reduction = objectSum(item_values);
		var calculated_total = num_people*num_years*(epy - emissions_reduction);

		// set Vue variables
		app.amount = truncateDecimals(normal_total - calculated_total);
		app.percent = truncateDecimals((1-(calculated_total/normal_total))*100.0);
		app.calculated = true;



		// Plotly Graph

		var trace1 = {
		  x: [],
		  y: [],
		  type: 'scatter',
		  name: 'Average Emissions'
		};

		var trace2 = {
		  x: [],
		  y: [],
		  type: 'scatter',
		  name: 'Your Emissions'
		};

		for (var i = 0; i <= num_years; i++){
			trace1["x"][i] = i
			trace1["y"][i] = i*num_people*epy

			trace2["x"][i] = i
			trace2["y"][i] = i*num_people*(epy-emissions_reduction)
		}

		var data = [trace1, trace2];

		var layout = {
		  title:'Your CO2 Emissions At Northwestern',
		  xaxis: {
		  	title: "Years"
		  },
		  yaxis: {
		  	title: "Total lbs CO2 Emitted to date"
		  }
		};

		if(plotted){
			Plotly.react('emissionsChart', data, layout);
		} else{
			Plotly.newPlot('emissionsChart', data, layout);
		}

		plotted = true;

	});

}

function objectSum(obj) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

function truncateDecimals (number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
};

main();