
tbm.namespace( "tbm.sysmap" );

tbm.sysmap.Sysmap = {
	map: null,
	layer: null,
	init: function () {
		map = new OpenLayers.Map( 'main-map' );
		layer = new OpenLayers.Layer.OSM( "Simple OSM Map" );
		map.addLayer( layer );
		map.setCenter( new OpenLayers.LonLat( -71.147, 42.472 ).transform(
				new OpenLayers.Projection( "EPSG:4326" ), map.getProjectionObject() ), 12 );
	}
};