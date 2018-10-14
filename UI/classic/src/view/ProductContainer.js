
Ext.define('HitDStreet.view.product.ProductContainer', {
    extend: 'Ext.container.Container',
	listeners:{
	afterrender:function(){
	
	
	}
	},
	height: 420,
    width: 570,
	items:[{
		xtype:'container',
		margin:10,
		items:[{
			xtype:'label',
			itemId:'description',
			text:'',
			
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
