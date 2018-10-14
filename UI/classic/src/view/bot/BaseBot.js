
Ext.define('HitDStreet.view.bot.BaseBot', {
    extend: 'Ext.panel.Panel',
	padding:5,
	frame:true,
	xtype:'basebot',
	height:'100%',
	title:'You can interact here',
	
	width:'30%',

	items:[{
		xtype:'container',
		height:'93%'
		
	},{
	xtype:'container',
	align:'bottom',
	height:'10%',
	layout:{
	type:'hbox',
	},
	float:'bottom',
	items:[{
	xtype:'textfield',
	id:'message',
	width:'85%',
	placeHolder:'enter your text',
	},
	{
	xtype:'button',
	margin:'0 10 0 10',
	text:'Send'}]
	
	}]
	
	
    
	



   
});
