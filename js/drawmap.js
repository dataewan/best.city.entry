var sortfn = function(a, b){
	if (a.score < b.score)
		return 1;
	if (a.score > b.score)
		return -1;
	return 0;
};


var redrawmap = function(){
	var x = d3.scale.linear()
		.domain([-180, 190])
		.range([0, w]);
	var y = d3.scale.linear()
		.domain([84, -86])
		.range([0, h]);

	var citymarkers = worldmapsvg.selectAll("circle")
		.data(d3.values(filteredcities))

	citymarkers.enter()
		.append("circle")
		.attr("class", "citymarker")
		.attr("id", function(d){return d.city;})
		.attr("cx", function(d){return x(d.Long);})
		.attr("cy", function(d){return y(d.Lat);})
		.attr("r", 3);
	citymarkers.on("mouseover", function(d){
		d3.selectAll("circle.selected")
			.classed("selected", false);
		d3.select(this).classed("selected", true);

		d3.selectAll("rect")
			.classed("selected", false);
		d3.select("rect#" + d.city)
			.classed("selected", true);
		redrawpolar(d);
	});
	
	citymarkers.append("title")
			.text(function (d, i){return d.city.replace(/\./g, " ")});


	citymarkers.exit()
		.transition()
		.duration(200)
		.attr("r", 0);
};

var makescorenicer = function(score){
	switch(score)
	{
		case 5:
			return "Intolerable";
			break;
		case 4:
			return "Bad";
			break;
		case 3:
			return "Average";
			break;
		case 2:
			return "Good";
			break;
		case 1:
			return "Ideal";
			break;
	}
}

var oldscore,
	oldlabel;

var redrawpolar = function(city){
	var formatter = d3.format(".1f");
	citylabel.text(city.city.replace(/\./g, " "));
	scorelabel.text("Overall score : " + formatter(city.score));

	console.log(city.city);
	var cityindicators = getdata(city);

	if (oldscore & oldlabel){
		var label = datalabels[oldlabel].replace(/\./g," ");
		var score = makescorenicer(cityindicators[oldlabel]);
		$("div#individualscorelabel").text(label + " " + score);
	}

	var radiusscale = d3.scale.linear()
		.domain([1, 5])
		.range([cy, 50]);

	var newarcs = polarsvg.selectAll("path")
		.data(cityindicators);
	newarcs.transition()
		.attr("d", d3.svg.arc()
				.startAngle(function(d,i){return i*Math.PI*2/40;})
				.endAngle(function(d,i){return (i+1)*Math.PI*2/40;})
				.innerRadius(30)
				.outerRadius(function(d){return radiusscale(d);}));

	newarcs.on("mouseover", function(d, i){
		oldscore = d;
		oldlabel = i;
		var label = datalabels[oldlabel].replace(/\./g," ");
		var score = makescorenicer(oldscore);
		$("div#individualscorelabel").text(label + " " + score);
	});
};

