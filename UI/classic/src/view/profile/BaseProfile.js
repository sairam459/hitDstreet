Ext.define('HitDStreet.view.profile.BaseProfile', {
    extend: 'Ext.container.Container',
    xtype: 'baseprofile',
	width:'22%',
	height:'100%',
	scrollable:true,
	controller:'feedcntrl',
	
	style:{
		"backgroundColor":"#272E36"
	},

	items:[{
		xtype:'container',
		layout:{
			type:'vbox',
			align:'center',
			pack:'center',
			padding:'30 0 0 0',
		},
		items:[{
			xtype:'container',
			
			style:{
				"width": "100px",
    "height": "100px",
    "position":"relative",
    "overflow": "hidden",
    "border-radius": "50%"
			},
			items:[{
			xtype:'image',
			
			listeners:{
				afterrender:function(){
					
					this.setSrc(HitDStreet.user.response.user.dp);
					
				}
			},
			height:100,
            width: 100,
			
		}]
		},{
			xtype:'label',
			
			margin:'10 0 0 0',
			style: {
                "font-size": "20px",
                "font-weight": "bold",
				"font-align":"cenetr",
				"color":"white"
				
            },
			listeners:{
				afterrender:function(){
					
					
					this.setHtml(HitDStreet.user.response.user.name);
				}
			}
		},{
			xtype:'container',
			margin:'30 0 0 0',
			itemId:'buttonbox',
			style:{
				backgroundColor:'#424242'
			},
			layout:{
				type:'vbox',
				align:'center',
				pack:'center'
			},
			items:[{
				margin:10,
				xtype:'button',
				cls:'buttonlogout',
				
				iconCls:'x-fa fa-plus',
				html:'create store',
				handler:'storecreate'
				
			}
			]
		},{
				margin:'20 10 10 10',
				xtype:'button',
				iconCls:'x-fa fa-chevron-right',
				cls:'category',
				html:'categories',
				handler:'getCategory'
				
			},{
				margin:'20 10 10 10',
				xtype:'button',
				iconCls:'x-fa  fa-sign-out',
				cls:'buttonlogout',
				html:'logout',
				handler:'logout'
				
			}]
		
	}],
	listeners:{
		afterrender:function(){
			var me =this;
			
			if(HitDStreet.user.response.storeDetails){
				
				var storehead=Ext.create('Ext.form.Label',{
					
				
				text:'My stores',
				margin:5,
				style: {
                "font-size": "16px",
                "font-weight": "bold",
				"font-align":"center",
				"color":"white"
				
            }
				}
				
				);
				me.down('#buttonbox').add(storehead);
				var a=HitDStreet.user.response.storeDetails;
				
				a.forEach(function(v){
					console.log(v);
					var storebutton=Ext.create('Ext.button.Button',{
						margin:5,
				
				cls:'buttonlogout',
				html:v.store_name,
				buttonId:v._id,
				handler:'productclick'
				/* handler:function(b,v){
					debugger;
				b.up('baseprofile').getController().productclick(b,v);
				} */
					});
					
					
					me.down('#buttonbox').add(storebutton);
				});
			}
		}
	}


});