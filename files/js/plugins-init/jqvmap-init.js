(function ($) {
    "use strict"


/*******************
jQvectormap
*******************/

     $('#world-map').vectorMap({ 
        map: 'world_en',
        backgroundColor: 'transparent',
        borderColor: 'rgb(239, 242, 244)',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: 'rgb(239, 242, 244)',
		colors: { in: "rgba(25, 123, 194, 1)",
            gb: "rgba(25, 123, 194, 0.8)",
            tr: "rgba(25, 123, 194, 0.7)",
            us: "rgba(25, 123, 194, 0.6)",
            ru: "rgba(25, 123, 194, 0.5)",
        },
        enableZoom: true,
        hoverColor: 'rgba(25, 123, 194, 0.9)',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: 'rgba(25, 123, 194, 0.9)',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "'
                + region
                + '" which has the code: '
                + code.toUpperCase();
     
            alert(message);
        }
		
    }); 
	 



    $('#usa').vectorMap({ 
        map: 'usa_en',
        backgroundColor: 'transparent',
        borderColor: 'rgb(239, 242, 244)',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: 'rgb(239, 242, 244)',
		colors: { 
            va: "rgba(25, 123, 194, 0.8)",
            tx: "rgba(25, 123, 194, 0.7)",
        },
        enableZoom: true,
        hoverColor: 'rgba(25, 123, 194, 0.9)',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: 'rgba(25, 123, 194, 0.9)',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "'
                + region
                + '" which has the code: '
                + code.toUpperCase();
     
            alert(message);
        }
    });
})(jQuery);