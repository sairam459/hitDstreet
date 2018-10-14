var crudDao=require('./CRUDDao');
var general=require('./General');
var helper=require('../helpers/helper')
module.exports={
    botApi:function(req,res){
        var name=req.body.result.action;
		switch(name){
			case "welcomeresponse":{
				res.json({response:{text:"Welcome to Hit 'D' Street,Please let us know your location to know about exciting deals!"}})
			}
            break;
            case "setcityresponse":{
                var city=req.body.result.parameters.city.city;
                crudDao.getAll({params:{name:"Categories"}},null,function(out){
                    categoryNames=[]
                    out.forEach(function(r){
                        categoryNames.push(r.category_name)
                    })
                    res.json({response:{text:"Pick a category",buttons:categoryNames}})
                })
           }
            break;
            case "pickcategoryresponse":{
                var category=req.body.result.parameters.categories;
                res.json({response:{text:"Enter a product"}})
                 
            }
            break;
            case "setproductresponse":{
                 var category=req.body.result.contexts[2].parameters.categories;
                 var Categories=helper.getCollectionObject("Categories")
                  var product=req.body.result.parameters.product;
             
                 Categories.find({category_name:category},function(err,q){
                    		general.feedLoad({params:{id:req.body.id}},null,function(out){
			var Products=helper.getCollectionObject("Products");
			Products.find({$and:[{category_id:q[0].id}, {name:product}]},function(err,t){
				var storeDetails=[];
				var cheapestStore=[]; 
				t.forEach(function(s){
					storeDetails.push(s.shop_id)
					if(s.offers.discount<20){
						cheapestStore.push(s.shop_id)
					}
				})
				finalArray=storeDetails.filter(function(item, pos, self) {
   						 return self.indexOf(item) == pos;
			})
				
				var Stores=helper.getCollectionObject("Stores");
				Stores.find({_id:{"$in":finalArray}},function(err,f){
					var storeNames=f.map(function(obj){return obj.store_name})
					Stores.find({_id:{"$in":cheapestStore}},function(err,a){
						cheapStoreNames=a.map(function(obj){return obj.store_name})
					res.json({response:{text:"These are the stores", buttons:storeNames}});
					})
				
				})
				
			})
		})
                    
                     })

                 


            }
            break;store
        case "setstoreresponse":
            var storename=req.body.result.parameters.store;
            var product=req.body.result.contexts[0].parameters.product;
            var Stores=helper.getCollectionObject("Stores")
            Stores.find({store_name:storename},function(err,f){
                var Products=helper.getCollectionObject("Products")
                Products.find({$and:[{shop_id:f[0].id}, {name:product}]},function(err,d){
                    text=d[0].offers.description;
                    res.json({response:{text:"This Store offers "+text}})
                })
            })
        
    }
}
}