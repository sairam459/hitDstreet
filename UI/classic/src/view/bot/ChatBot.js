/**
 * This view is an example list of people.
 */
Ext.define('HitDStreet.view.main.ChatBot', {
    extend: 'Ext.panel.Panel',
	
	xtype:'chatbot',
	
	id:'mainview',
	layout:'vbox',
	height:'100%',
	title:'You can interact here',
	
	width:'30%',
	style: {borderColor:'#6a1b9a', borderStyle:'solid', borderWidth:'1px'},
	items:[{
		xtype:'container',
		
		width:'100%',
		height:'100%',
		padding:10,
		layout:{
			type:'vbox',
			pack:'end'
			},
		scrollable:true,
		cls:'messages',
		id:'message-box',
		flex:1
		
	}, {
		xtype:'toolbar',
		docked:'bottom',
		layout:'hbox',
		
		items:[{
	xtype:'textfield',
	width:230,
	id:'message',
	
	emptyText:'enter your text',
	listeners:{
		specialkey:'enterpress'
	}
	},{
	xtype:'button',
	itemId:'send',
	margin:'0 5 0 5',
	text:'Send',
	handler:'addMessage'}]
	} ],
	


});
