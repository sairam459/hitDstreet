Ext.define('HitDStreet.view.feed.BaseFeed', {
    extend: 'Ext.container.Container',
    xtype: 'basefeed',

	margin:5,


    layout: {
		type:'vbox',
		
	},
    height: 450,
    width: 570,
	style:{
		"backgroundColor":"white",
		"box-shadow":" 0 0 10px rgba(0,0,0,0.6)"
	},


    items: [{
        xtype: 'container',
        width: '100%',
        height: '20%',
        layout: 'hbox',
		padding:10,
        items: [ {xtype:'container',
		align:'left',
		height:'100%',
		layout:{
			type:'vbox',
			pack:'center'
		},
		items:{
            xtype: 'label',
            text: '',
			itemId:'heading',
			
            style: {
                "font-size": "30px",
                "font-weight": "bold",
				"font-align":"left",
				
            }
        }
		}]
    },{
			xtype:'container',
			
			items:[{
				xtype:'label',
				text:'',
				itemId:'desc'
				
			}]
		}, {
		xtype:'container',
		margin:10,
		items:[{
			xtype:'label',
			itemId:'store',
			text:'',
			style: {
                "font-size": "20px",
                "font-weight": "bold",
				"font-align":"left",
				
            }
		}]
	},{
        xtype: 'container',
		padding:5,
		width:'100%',
		
        items: [{
            xtype: 'image',
			align:'center',
            src: '',
            height: 320,
            width: 560,
			itemId:'big',
			listeners: {
		render: function(c){
			c.getEl().on({
				click: function() {
					alert('ok');
				}
			});
		}
	}
        }]
    }]
});