
Ext.define('HitDStreet.view.shop.Shop', {
    extend: 'Ext.container.Container',


    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
	
    items: [{
	xtype:'form',
	
	items:[{
	xtype:'textfield',
	name:'store_name',
	fieldLabel:'Store Name',
	},
	
	
	
	{
	xtype:'textfield',
	fieldLabel:'email',
	name:'mail'
	},
	{
	xtype:'textfield',
	fieldLabel:'mobie no',
	name:'mobile'
	},
	{
	xtype:'textfield',
	fieldLabel:'city',
	name:'city'
	},
	{
		xtype:'textfield',
	fieldLabel:'PIN',
	name:'pin'
	}
	
	]
	}]


   
});
