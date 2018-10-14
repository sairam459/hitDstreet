
Ext.define('HitDStreet.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
	alias:'controller.logincontroller',
	requires:[
	'HitDStreet.view.landing.LandingPage'],
	login:function(button){
		var me =this;
	var u=this.lookupReference('username').getValue();
	var p=this.lookupReference('password').getValue();
	
	var data={"username":u,
	"password":p}; 
	 Ext.Ajax.request({
            url: HitDStreet.constants.IP_ADDRESS+'/hds/Users/login',
            method: 'POST',
			
            jsonData: Ext.encode(data),
            callback: function(req, success, response) {
				 /* button.up('loginfull').destroy();
                   var c= Ext.create('HitDStreet.view.landing.LandingPage');
				   c.show();   */
                var res = Ext.decode(response.responseText);
				
				HitDStreet.user=res;
				console.log(res);
                if (res.responseCode == 'success') {
                    button.up('loginfull').destroy();
                   var c= Ext.create('HitDStreet.view.landing.LandingPage');
				   c.show();
				   console.log(c);
                   // HitDStreet.user = res.employee;
					
                } else {
                    me.lookupReference('error').setStyle('color', 'red');
                   me.lookupReference('error').show();
                   
                }

            }
        });
	
	
	},
	
	onSpecialKey:function(field, e){
					var button = field.up('form').down('#btn');
                    if (e.getKey() == e.ENTER) {
						
                        this.login(button);
                    }
                },

	register:function(parentButton){
		var me =this;
		var record=Ext.create('HitDStreet.view.profile.ProfileModel');
		var w=Ext.create('Ext.window.Window',{
		height:450,
		width:400,
		
		buttons:[{
		
		text:'create',
		
		handler:function(childButton) {
                    me.usercreate(childButton, record, parentButton);
                }
	}]
		
		});
		w.add(Ext.create('HitDStreet.view.login.Register'))
		w.show();
		
		w.down('form').loadRecord(record);
		
	},
	
	usercreate:function(childButton, record, parentButton){
		
		childButton.up('window').down('form').updateRecord(record);
		
		
		record.save();
		console.log(record.data);
		
		childButton.up('window').close();
		Ext.toast('you have created account successfully');
		Ext.toast('Please sign to continue');
		
	}
   
});
