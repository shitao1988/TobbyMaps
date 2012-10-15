
tbm.namespace( "tbm.sysmap" );

tbm.sysmap.Sysmap = {
	map: null,
	layer: null,
	init: function () {
		map = new OpenLayers.Map('main-map',{controls:[]});
		layer = new OpenLayers.Layer.OSM( "Simple OSM Map" );
		map.addLayer( layer );
		map.addControls([new OpenLayers.Control.Navigation(), 
                              new OpenLayers.Control.ZoomBar()] );
		map.setCenter( new OpenLayers.LonLat( 120.315399,31.576196).transform(
				new OpenLayers.Projection( "EPSG:4326" ), map.getProjectionObject() ), 12 );
	}
};