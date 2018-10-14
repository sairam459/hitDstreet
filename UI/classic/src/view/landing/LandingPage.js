
Ext.define('HitDStreet.view.landing.LandingPage', {
    extend: 'Ext.container.Viewport',
    xtype: 'landingpage',
	style:{
		"backgroundColor":"white"
	},
	requires:['HitDStreet.view.feed.BaseFeed',
	'HitDStreet.view.feed.FeedModel',
	'HitDStreet.view.feed.FeedCntrl',
	'HitDStreet.view.profile.BaseProfile',
	'HitDStreet.view.bot.BaseBot',
	'HitDStreet.view.head.HeaderPage',
	'HitDStreet.view.head.FilterPage',
	'HitDStreet.view.main.Foot'],
	
	viewModel:'feedmodel',
	controller:'feedcntrl',
	bind:{
		data:'{feed}'
	}, 
	flex:1,
	 layout:{
		 type:'vbox',
		 align:'stretch',
		 
	 },
	 listeners:{
		afterrender:function(){
			responsiveVoice.speak('Say Hi Flash to start Voice Assistance' );
		}
	 },
	 
items:[{xtype:'headerpage',
height:'10%',
},{xtype:'filterpage',
height:'10%',
},{
	xtype:'container',
	height:'80%',
	
	scrollable:{
		y:true,
		size:0
	},
	cls:'x-scroll-bar-y',
	layout:{
	type:'border',
	align:'center'
	},
	items:[{
		xtype:'baseprofile',
		region:'west',
		
	},{
		xtype:'container',
		align:'center',
		region:'center',
		scrollable:true,
		margin:'10 0 0 50',
		height:'100%',
		
		
		
		items:[{
			xtype:'container',
			height:'100%',
			
			itemId:'feed',
		},{
			xtype:'foot',
			layout:{
				type:'hbox',
				pack:'center'
			},
			width:'100%',
		}]
	},{
		xtype:'chatbot',
		region:'east',
		margin:'3 5 3 80'
	}]	


}]

	



   
});
