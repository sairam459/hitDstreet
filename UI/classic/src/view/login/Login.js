
Ext.define('HitDStreet.view.login.Login', {
    extend: 'Ext.form.Panel',
    //xtype: 'app-main',
    alias: 'widget.login',

   
  controller:'logincontroller',
    
height:300,
			width:300,
//title:'Partner Login',



    titleAlign: 'center',
   
	layout: {
		 type: 'vbox',
		 align :'center',
		 pack:'center'
		},


items : [{
			xtype:'form',
			
			layout: {
		 type: 'vbox',
		 align :'center',
		 pack:'center'
		},
			
			items:[{
				xtype:'label',
				text:'Hit D Street',
				style:{
					color:'#6A1B9A',
					fontSize:'x-large'
				},
				margin:'10 10 60 0'
			},{
            xtype: 'textfield',
            emptyText: 'User Name',
            name: 'username',
            allowBlank: false,
			reference:'username',
            listeners:{
          
                specialkey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            emptyText: 'Password',
            inputType: 'password',
            allowBlank: false,
            name: 'password',
			reference:'password',
            
			listeners: {
			
                specialkey: 'onSpecialKey'
            }

        } ,{

            xtype:'label',
			text:'invalid Credentials',
           
            reference: 'error',
            padding: '0 0 60 0',
            //style:"color:'red';" ,
            hidden: true



        },
		
		{xtype:'container',
		
		layout:'hbox',
		margin:'10 0 0 0',
		items:[
		{
            xtype: 'button',
			
			cls:'headr',
            text: 'Register',
			itemId:'register',
			align:'center',
            handler: 'register',
			
			
			

        },{
            xtype: 'button',
			margin:'0 0 0 10',
			cls:'headr',
            text:'Hit',
			itemId:'btn',
			align:'center',
            handler: 'login',
			
			

        }]
		}
		
		]
		} 
		]
        


});