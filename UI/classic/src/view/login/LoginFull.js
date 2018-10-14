
Ext.define('HitDStreet.view.login.LoginFull', {
    extend: 'Ext.container.Viewport',
	height:'100%',
	width:'100%',
requires: [
        
		'HitDStreet.view.login.Login'
		
       
        
    ],
	    style: {
        'background-image': 'url(resources/images/logging.jpg)',
        'background-size': 'cover',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
    },
xtype:'loginfull',

    layout: {
        type: 'hbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
            xtype: 'container',
			itemId:'loginFull',
			
            items: [{
                xtype: 'login'
            }]

        }

    ]

   
});
