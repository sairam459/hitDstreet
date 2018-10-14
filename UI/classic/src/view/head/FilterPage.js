
Ext.define('HitDStreet.view.head.FilterPage', {
    extend: 'Ext.container.Container',
	style:{
		backgroundColor:'#6A1B9A'
	},
	
	xtype:'filterpage',
	
	layout:{
	type:'hbox',
	pack:'center'
	},
	items:[{
	xtype:'container',
	width:'100%',
	layout:{
		type:'hbox',
		pack:'end',
	},
	margin:10,
	items:[{xtype:'label',
		text:'offers validity:',
	margin:'5 5 5 5',
	style:{
		"color":"white",
		
	}
	},{
	xtype:'datefield',
	emptyText:'From',
	
	},{
	xtype:'datefield',
	emptyText:'To',
	margin:'0 5 0 5',

	},
	{
	xtype:'combobox',
	
	emptyText:'Select Location',
	margin:'0 10 0 10',
	 queryMode: 'local',
    displayField: 'name',
    valueField: 'abbr',
	store: Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"Chennai", "name":"Chennai"},
        {"abbr":"Bengaluru", "name":"Bengaluru"},
        {"abbr":"Vijayawada", "name":"Vijayawada"},
		{"abbr":"Delhi", "name":"Delhi"},
		{"abbr":"Kolkota", "name":"Kolkota"},
		{"abbr":"Mumbai", "name":"Mumbai"}
    ]
})
	}]
	}]
	
	
    
	



   
});
