
Ext.define('HitDStreet.view.head.HeaderPage', {
    extend: 'Ext.container.Container',
	style:{
		backgroundColor:'#6A1B9A'
	},
	
	xtype:'headerpage',
	
	layout:{
	type:'hbox',
	},
	items:[{
	xtype:'container',
	margin:10,
	height:200,
	width:400,
	items:[{
	xtype:'image',
	src:'../resources/images/logo.png',
	height:65,
	width:300
	
	}]
	}]
	
	
    
	



   
});
