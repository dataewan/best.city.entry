var polarsvg;
var polarwidth;
var polarheight;
var citylabel,
	scorelabel;
var polargroup;
var arcs;
var arc;

var cx,
	cy;
var arcdata = [
		 {
		 	"end.angle": 0.15708,
		 		"start.angle":      0 
	 	},
	 	 {
	 	 	  "end.angle": 0.31416,
	 	 	  "start.angle": 0.15708 
		 },
		 {
		 	  "end.angle": 0.47124,
		 	  "start.angle": 0.31416 
		 },
		 {
		 	  "end.angle": 0.62832,
		 	  "start.angle": 0.47124 
		 },
		 {
		 	  "end.angle": 0.7854,
		 	  "start.angle": 0.62832 
		 },
		 {
		 	  "end.angle": 0.94248,
		 	  "start.angle": 0.7854 
		 },
		 {
		 	  "end.angle": 1.0996,
		 	  "start.angle": 0.94248 
		 },
		 {
		 	  "end.angle": 1.2566,
		 	  "start.angle": 1.0996 
		 },
		 {
		 	  "end.angle": 1.4137,
		 	  "start.angle": 1.2566 
		 },
		 {
		 	  "end.angle": 1.5708,
		 	  "start.angle": 1.4137 
		 },
		 {
		 	  "end.angle": 1.7279,
		 	  "start.angle": 1.5708 
		 },
		 {
		 	  "end.angle":  1.885,
		 	  "start.angle": 1.7279 
		 },
		 {
		 	  "end.angle":  2.042,
		 	  "start.angle":  1.885 
		 },
		 {
		 	  "end.angle": 2.1991,
		 	  "start.angle":  2.042 
		 },
		 {
		 	  "end.angle": 2.3562,
		 	  "start.angle": 2.1991 
		 },
		 {
		 	  "end.angle": 2.5133,
		 	  "start.angle": 2.3562 
		 },
		 {
		 	  "end.angle": 2.6704,
		 	  "start.angle": 2.5133 
		 },
		 {
		 	  "end.angle": 2.8274,
		 	  "start.angle": 2.6704 
		 },
		 {
		 	  "end.angle": 2.9845,
		 	  "start.angle": 2.8274 
		 },
		 {
		 	  "end.angle": 3.1416,
		 	  "start.angle": 2.9845 
		 },
		 {
		 	  "end.angle": 3.2987,
		 	  "start.angle": 3.1416 
		 },
		 {
		 	  "end.angle": 3.4558,
		 	  "start.angle": 3.2987 
		 },
		 {
		 	  "end.angle": 3.6128,
		 	  "start.angle": 3.4558 
		 },
		 {
		 	  "end.angle": 3.7699,
		 	  "start.angle": 3.6128 
		 },
		 {
		 	  "end.angle":  3.927,
		 	  "start.angle": 3.7699 
		 },
		 {
		 	  "end.angle": 4.0841,
		 	  "start.angle":  3.927 
		 },
		 {
		 	  "end.angle": 4.2412,
		 	  "start.angle": 4.0841 
		 },
		 {
		 	  "end.angle": 4.3982,
		 	  "start.angle": 4.2412 
		 },
		 {
		 	  "end.angle": 4.5553,
		 	  "start.angle": 4.3982 
		 },
		 {
		 	  "end.angle": 4.7124,
		 	  "start.angle": 4.5553 
		 },
		 {
		 	  "end.angle": 4.8695,
		 	  "start.angle": 4.7124 
		 },
		 {
		 	  "end.angle": 5.0265,
		 	  "start.angle": 4.8695 
		 },
		 {
		 	  "end.angle": 5.1836,
		 	  "start.angle": 5.0265 
		 },
		 {
		 	  "end.angle": 5.3407,
		 	  "start.angle": 5.1836 
		 },
		 {
		 	  "end.angle": 5.4978,
		 	  "start.angle": 5.3407 
		 },
		 {
		 	  "end.angle": 5.6549,
		 	  "start.angle": 5.4978 
		 },
		 {
		 	  "end.angle": 5.8119,
		 	  "start.angle": 5.6549 
		 },
		 {
		 	  "end.angle":  5.969,
		 	  "start.angle": 5.8119 
		 },
		 {
		 	  "end.angle": 6.1261,
		 	  "start.angle":  5.969 
		 },
		 {
		 	  "end.angle": 6.2832,
		 	  "start.angle": 6.1261 
		 } 
]

var setuppolar = function(){
	calculateheight();
	polarwidth = $("#polarchart").width();
	polarheight = h - 20 - 10 - 10;
	polarsvg = d3.select("#polarchart")
						.append("svg")
						.attr("id", "polarsvg")
						.attr("width", polarwidth)
						.attr("height", polarheight);
	citylabel = d3.select("div#citylabel");
	scorelabel = d3.select("div#scorelabel");

	cx = polarwidth/2;
	cy = polarheight/2;

	polargroup = polarsvg.append("g")
		.attr("transform", "translate(" + cx + ", "+ cy + ")");


	arc = function(d, i){
		return d3.svg.arc()
			.startAngle(function(i) {return (i*Math.PI/20);})
			.endAngle(function(i) {return ((i+1)*Math.PI/20);})
			.innerRadius(30)
			.outerRadius(radiusscale(d));
	};
	
	arcs = polargroup.selectAll("arc")
		.data(arcdata)
		.enter()
		.append("path")
		.attr("d", d3.svg.arc()
					.startAngle(function(d) {return d["start.angle"];})
					.endAngle(function(d) {return d["end.angle"];})
					.innerRadius(30)
					.outerRadius(50));
};


var calculateheight = function(){
	// The raw image is 644.2442 wide and 296.29111 high. Use these 
	// values to calculate how high the div should be.
	h = w/644.2422 * 296.29111;
}


var getdata = function(city){
	return [
		city["Prevalence.of.Petty.Crime"],
		city["Prevalence.of.Violent.crime"],
		city["Threat.of.military.conflict"],
		city["Threat.of.civil.unrest"],
		city["Threat.of.terrorism"],
		city["Availability.of.private.healthcare"],
		city["Quality.of.private.healthcare.provision"],
		city["Availability.of.public.healthcare"],
		city["Quality.of.public.healthcare.provision"],
		city["Availability.of.over.the.counter.drugs"],
		city["Healthcare.indicators"],
		city["Climate.rating"],
		city["Discomfort.of.climate.to.travellers"],
		city["Level.of.social.or.religious.restrictions"],
		city["Level.of.censorship"],
		city["Availability.of.local.sporting.events"],
		city["Availability.of.well.known.sports.events"],
		city["Availability.of.sporting.facilities"],
		city["Availability.of.quality.theatre.productions"],
		city["Availability.of.classic.music.concerts"],
		city["Availability.of.modern.music.concerts"],
		city["Availability.of.global.satellite.TV."],
		city["Availability.of.bars.or.coffee.shops"],
		city["Availability.of.nightclubs"],
		city["Availability.of.restaurants"],
		city["Availability.of.quality.hotels"],
		city["Corruption"],
		city["Availability.of.private.education"],
		city["Quality.of.private.education"],
		city["Education.indicators"],
		city["Quality.of.road.network"],
		city["Quality.of.public.transport"],
		city["Quality.of.regional.or.international.links"],
		city["Quality.of.links.to.nearest.airport"],
		city["Distance.to.nearest.airport.in.miles"],
		city["Availability.of.good.quality.housing"],
		city["Quality.of.Electricity.provision"],
		city["Quality.of.Gas.provision"],
		city["Quality.of.Water.provision"],
		city["Quality.of.telecommunications.service"]
	];
}
var datalabels = [
		"Prevalence.of.Petty.Crime",
		"Prevalence.of.Violent.crime",
		"Threat.of.military.conflict",
		"Threat.of.civil.unrest",
		"Threat.of.terrorism",
		"Availability.of.private.healthcare",
		"Quality.of.private.healthcare.provision",
		"Availability.of.public.healthcare",
		"Quality.of.public.healthcare.provision",
		"Availability.of.over.the.counter.drugs",
		"Healthcare.indicators",
		"Climate.rating",
		"Discomfort.of.climate.to.travellers",
		"Level.of.social.or.religious.restrictions",
		"Level.of.censorship",
		"Availability.of.local.sporting.events",
		"Availability.of.well.known.sports.events",
		"Availability.of.sporting.facilities",
		"Availability.of.quality.theatre.productions",
		"Availability.of.classic.music.concerts",
		"Availability.of.modern.music.concerts",
		"Availability.of.global.satellite.TV.",
		"Availability.of.bars.or.coffee.shops",
		"Availability.of.nightclubs",
		"Availability.of.restaurants",
		"Availability.of.quality.hotels",
		"Corruption",
		"Availability.of.private.education",
		"Quality.of.private.education",
		"Education.indicators",
		"Quality.of.road.network",
		"Quality.of.public.transport",
		"Quality.of.regional.or.international.links",
		"Quality.of.links.to.nearest.airport",
		"Distance.to.nearest.airport.in.miles",
		"Availability.of.good.quality.housing",
		"Quality.of.Electricity.provision",
		"Quality.of.Gas.provision",
		"Quality.of.Water.provision",
		"Quality.of.telecommunications.service"
	]
