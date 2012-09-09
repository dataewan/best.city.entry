var barchartsvg;

var drawbarchart = function(){
	var barchartw = $(".ratingplot").width();
	var barcharth = $(".ratingplot").height();

	barchartsvg = d3.select(".ratingplot")
		.append("svg")
		.attr("width", barchartw)
		.attr("height", barcharth);

	var barcharty = d3.scale.linear()
		.domain([0, 100])
		.range([barcharth, 0]);

	var sortedcities = d3.values(cities).sort(sortfn);

	var barwidth = (barchartw)/sortedcities.length;

	barchartsvg.selectAll("rect.bar")
		.data(sortedcities)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("id", function(d){return d.city;})
		.attr("x", function(d, i){return ((barwidth * i));})
		.attr("width", barwidth - 1)
		.attr("y", function(d){ return(barcharty(d.score)); })
		.attr("height", function(d){ return(barcharth - barcharty(d.score)); })
		.on("mouseover", function(d, i){

			d3.selectAll("rect")
				.classed("selected", false);
			d3.select(this)
				.classed("selected", true);

			d3.selectAll("circle.selected")
				.classed("selected", false);
			d3.select("#" + d.city)
				.classed("selected", true);
			redrawpolar(d);
		})
		;
}
