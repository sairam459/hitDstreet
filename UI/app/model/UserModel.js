
Ext.define('HitDStreet.model.UserModel', {
    extend: 'Ext.data.Model',
	idProperty: 'id',

    requires: ['Ext.data.field.Field',
	],
	 fields: [
         { name: 'id', type: 'string' },
        { name: 'username', type: 'string' },
		{ name: 'password', type: 'string' },
		{ name: 'name', type: 'string' },
		{ name: 'mobile', type: 'string' },
		{ name: 'mail', type: 'string' },
		{ name: 'owner', type: 'boolean' },
		{ name: 'created_at', type: 'date' },
		{ name: 'updated_at', type: 'date' },
		{ name: 'location' },
		
		
		],
		
		 proxy: {
        type: 'rest',
        api: {
            //read: iPeriscope.constants.IP_ADDRESS+'/employee/get/ProjectDetails/',
			
            create: 'http://172.29.19.147/hds/Users'
            
         
        },
        reader: {
            type: 'json',
            
        },
		writer: {
            type: 'json',
            writeAllFields: false,
            writeRecordId: true
            
        }
		
       
    }
});
