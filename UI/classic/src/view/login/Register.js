
Ext.define('HitDStreet.view.login.Register', {
    extend: 'Ext.container.Container',


    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
	
    items: [{
	xtype:'form',
	margin:5,
	items:[{
	xtype:'textfield',
	name:'name',
	fieldLabel:'Name',
	},
	{
	xtype:'textfield',
	fieldLabel:'Password',
	inputType:'password',
	name:'password'
	},
	{
	xtype:'textfield',
	fieldLabel:'Username',
	name:'username'
	},
	{
            xtype      : 'fieldcontainer',
            fieldLabel : 'Gender',
			itemId:'gr',
            defaultType: 'radiofield',
			name:'gender',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {	
                    boxLabel  : 'M',
                    name      : 'gender',
					inputValue:'M',
					itemId:'he'
                    
                }, {
                    boxLabel  : 'F',
                    name      : 'gender',
					inputValue:'F',
					itemId:'she'
                    
                }
            ]
        },
	{
	xtype:'textfield',
	fieldLabel:'email',
	name:'mail'
	},
	{
	xtype:'textfield',
	fieldLabel:'mobie no',
	name:'mobile'},
	{xtype:'textfield',
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
