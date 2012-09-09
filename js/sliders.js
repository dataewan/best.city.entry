var filters = {}

$(function(){
 $('.slider#stability').slider({
     range   : true,
     min     : 1,
     max     : 5,
     values  : [1, 5],
     slide   : function(event, ui){
         filters['Prevalence.of.Petty.Crime'] = {'Prevalence.of.Petty.Crime' : [ui.values[0], ui.values[1]]};
         filters['Prevalence.of.Violent.crime'] = {'Prevalence.of.Violent.crime' : [ui.values[0], ui.values[1]]};
         filters['Threat.of.military.conflict'] = {'Threat.of.military.conflict' : [ui.values[0], ui.values[1]]};
         filters['Threat.of.civil.unrest'] = {'Threat.of.civil.unrest' : [ui.values[0], ui.values[1]]};
         filters['Threat.of.terrorism'] = {'Threat.of.terrorism' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.private.healthcare'] = {'Availability.of.private.healthcare' : [ui.values[0], ui.values[1]]};
         filter();
     }
 });
 $('.slider#culture').slider({
     range   : true,
     min     : 1,
     max     : 5,
     values  : [1, 5],
     slide   : function(event, ui){
         filters['Level.of.social.or.religious.restrictions'] = {'Level.of.social.or.religious.restrictions' : [ui.values[0], ui.values[1]]};
         filters['Level.of.censorship'] = {'Level.of.censorship' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.local.sporting.events'] = {'Availability.of.local.sporting.events' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.well.known.sports.events'] = {'Availability.of.well.known.sports.events' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.sporting.facilities'] = {'Availability.of.sporting.facilities' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.quality.theatre.productions'] = {'Availability.of.quality.theatre.productions' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.classic.music.concerts'] = {'Availability.of.classic.music.concerts' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.modern.music.concerts'] = {'Availability.of.modern.music.concerts' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.global.satellite.TV.'] = {'Availability.of.global.satellite.TV.' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.bars.or.coffee.shops'] = {'Availability.of.bars.or.coffee.shops' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.nightclubs'] = {'Availability.of.nightclubs' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.restaurants'] = {'Availability.of.restaurants' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.quality.hotels'] = {'Availability.of.quality.hotels' : [ui.values[0], ui.values[1]]};
         filters['Climate.rating'] = {'Climate.rating' : [ui.values[0], ui.values[1]]};
         filter();
     }
 });
 $('.slider#education').slider({
     range   : true,
     min     : 1,
     max     : 5,
     values  : [1, 5],
     slide   : function(event, ui){
         filters['Availability.of.private.education'] = {'Availability.of.private.education' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.private.education'] = {'Quality.of.private.education' : [ui.values[0], ui.values[1]]};
         filters['Education.indicators'] = {'Education.indicators' : [ui.values[0], ui.values[1]]};
         filter();
     }
 });
 $('.slider#infrastructure').slider({
     range   : true,
     min     : 1,
     max     : 5,
     values  : [1, 5],
     slide   : function(event, ui){
         filters['Quality.of.road.network'] = {'Quality.of.road.network' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.public.transport'] = {'Quality.of.public.transport' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.regional.or.international.links'] = {'Quality.of.regional.or.international.links' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.links.to.nearest.airport'] = {'Quality.of.links.to.nearest.airport' : [ui.values[0], ui.values[1]]};
         filters['Distance.to.nearest.airport.in.miles'] = {'Distance.to.nearest.airport.in.miles' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.good.quality.housing'] = {'Availability.of.good.quality.housing' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.Electricity.provision'] = {'Quality.of.Electricity.provision' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.Gas.provision'] = {'Quality.of.Gas.provision' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.Water.provision'] = {'Quality.of.Water.provision' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.telecommunications.service'] = {'Quality.of.telecommunications.service' : [ui.values[0], ui.values[1]]};
         filters['Corruption'] = {'Corruption' : [ui.values[0], ui.values[1]]};
         filter();
     }
 });
 $('.slider#healthcare').slider({
     range   : true,
     min     : 1,
     max     : 5,
     values  : [1, 5],
     slide   : function(event, ui){
         filters['Quality.of.private.healthcare.provision'] = {'Quality.of.private.healthcare.provision' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.public.healthcare'] = {'Availability.of.public.healthcare' : [ui.values[0], ui.values[1]]};
         filters['Quality.of.public.healthcare.provision'] = {'Quality.of.public.healthcare.provision' : [ui.values[0], ui.values[1]]};
         filters['Availability.of.over.the.counter.drugs'] = {'Availability.of.over.the.counter.drugs' : [ui.values[0], ui.values[1]]};
         filters['Discomfort.of.climate.to.travellers'] = {'Discomfort.of.climate.to.travellers' : [ui.values[0], ui.values[1]]};
         filters['Healthcare.indicators'] = {'Healthcare.indicators' : [ui.values[0], ui.values[1]]};
         filter();
     }
 });
});
