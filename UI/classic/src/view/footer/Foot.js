
Ext.define('HitDStreet.view.main.Foot',{
extend:'Ext.container.Container',
xtype:'foot',
cls:'foot',                        
layout:{
	type:'hbox',
	align:'center'
},

padding:20,
width:'100%',

items:[{
	xtype:'container',
	width:'45%'
	
},{
	xtype:'container',
layout:{
	type:'vbox',
	pack:'center',
	align:'center'
},
//margin:'10 0 0 0',
items:[{xtype:'label',
	text:'Address: Road No.31, Opp. Phoenix Mall, Velachery-603 103',
	padding:10,
	cls:'footText'
	/*,
		style:{
		"color":"white",
		"font-size": "150%",
		"font-weight": "bold",
		"font-family": "Times New Roman"
	}*/
},
	{
	xtype:'label',
	text:'Phone Number:9489541017',
	padding:10,
	cls:'footText'
	/*,
		style:{
		"color":"white",
		"font-size": "150%",
		"font-weight": "bold",
		"font-family": "Times New Roman"
	}*/
}


]},
{
	xtype:'about',
	margin:'0 0 0 450'
}
	

]

});
