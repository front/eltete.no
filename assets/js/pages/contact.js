var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 59.218144,
				lng: 10.939893
			  });
			   var marker = map.addMarker({
		            lat: 59.218144,
					lng: 10.939893,
		            title: 'Loop, Inc.'
		        });
			});
        }

    };
}();