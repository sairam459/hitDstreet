
Ext.define('HitDStreet.view.product.ProductModel', {
    extend: 'Ext.data.Model',
	requires: ['Ext.data.field.Field',
	],
	 
		fields: [
         { name: 'id', type: 'string' },
        { name: 'store_id', type: 'string' },
		
		
		
		{ name: 'name', type: 'string' },
		{ name: 'category_id', type: 'string' },
		
		{ name: 'photo', type: 'string' },
		{ name: 'created_at', type: 'date' },
		{ name: 'updated_at', type: 'date' },
		{ name: 'from', type: 'date' },
		{ name: 'to', type: 'date' },
		{ name: 'description',type:'string' },
		{ name: 'discount',type:'number' },
			{name:'location',defaultValue:null,
			depends: [ 'from', 'to' ,'description','discount'],
			convert: function (val, record) {
				 var v;
				 
				 v={"description":record.get('description'),
				 "discount":record.get('discount'),
				 "from":record.get('from'),
				 "to":record.get('to')};
				console.log(v)
            return v;
        }
		}
		
		
		],
		proxy: {
        type: 'rest',
		
        api: {
            
			read:'http://172.29.18.140:8080/hds/getProducts',
            create: 'http://172.29.18.140:8080/hds/Products'
            
         
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
