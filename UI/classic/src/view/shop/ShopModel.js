
Ext.define('HitDStreet.view.shop.ShopModel', {
    extend: 'Ext.data.Model',
	requires: ['Ext.data.field.Field',
	],
	 
		fields: [
         { name: 'id', type: 'string' },
        { name: 'store_name', type: 'string' },
		
		
		
		{ name: 'mobile', type: 'string' },
		{ name: 'mail', type: 'string' },
		
		{ name: 'owner_id', type: 'string' },
		{ name: 'created_at', type: 'date' },
		{ name: 'updated_at', type: 'date' },
		{ name: 'city',mapping:'location.city' },
		{ name: 'pin',mapping:'location.pin' },
			{name:'location',defaultValue:null,
			depends: [ 'city', 'pin' ],
			convert: function (val, record) {
				 var v;
				 console.log(record.get('city'))
				 v={"city":record.get('city'),
				 "pin":record.get('pin')};
				console.log(v)
            return v;
        }
		}
		
		
		],
		proxy: {
        type: 'rest',
		
        api: {
            
			read:'http://172.29.18.140:8080/hds/Stores',
            create: 'http://172.29.18.140:8080/hds/Stores'
            
         
        },
        reader: {
            type: 'json',
            
        },
	
		
		writer: {
            type: 'json',
            writeAllFields: false,
            writeRecordId: true,
            
        }
		
       
    }
    
	



   
});
