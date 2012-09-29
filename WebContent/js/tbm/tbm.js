if ( tbm == null )
	var tbm = {};

tbm.CLASS_NAME = "otp";

tbm.namespace = function ( ns, context ) {
	ns = ( typeof ns == 'string' ) ? [ ns ] : ns;
	context = context || window;
	var num = ns.length;
	for ( var i = 0; i < num; ++i) {
		var parts = ns[i].split( '.' );
		var base = parts.shift();
		if ( typeof context[base] == 'undefined' ) {
			context[base] = {};
		}
		if ( parts.length > 0 ) {
			tbm.namespace( [ parts.join( '.' ) ], context[base] );
		}
	}
};

        
  