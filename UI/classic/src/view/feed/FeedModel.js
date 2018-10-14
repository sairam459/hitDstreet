
Ext.define('HitDStreet.view.feed.FeedModel', {
    extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.feedmodel',
	requires:['HitDStreet.util.Utility'],
	
	stores:{
	feed:{
	model:'HitDStreet.view.product.ProductModel',
	 proxy: {
                type: 'ajax',
				
                reader: {
                    type: 'json',
					
                },
                url: ''
            },
			
	autoLoad:true,
	listeners:{
		load:'display',
		beforeload:function(){
			
			this.getProxy().setUrl('http://172.29.18.140:8080/hds/feedLoad/'+HitDStreet.user.response.user._id);
			
		}
	}
	},profile:{
	model:'HitDStreet.view.profile.ProfileModel',
	 
	autoLoad:true,
	listeners:{
		beforeload:'setHead',
			load:'check'
	}
	},
	category:{
	model:'HitDStreet.view.profile.CategoryModel',
	 proxy: {
                type: 'ajax',
				
                reader: {
                    type: 'json',
					
                },
                url: 'http://172.29.18.140:8080/hds/Categories'
            },
			
			
			
	autoLoad:true,
	listeners:{
		load:'category',
		beforeload:'setHead',
		
		
	}
	},
		shop:{
			storeId:'shop',
			model:'HitDStreet.view.shop.ShopModel',
	 
	autoLoad:true,
	listeners:{
		//load:'shop',
		beforeload:'setHead',
		
		
	}
		},
		
	product:{
			
			model:'HitDStreet.view.product.ProductModel',
	 
	//autoLoad:true,
	listeners:{
		load:'product',
		//beforeload:'setHead',
		
		
	}
		}
	
	},
	
	/* formulas:{
html: {
	
get: function(get) {
	var addNote = get('addNote');
	return addNote.get('html');



},

}
	}  */  
	



   
});
