
var helper=require('../helpers/helper')
var general=require('./General')

module.exports={
    getAll:function(req,res,callback){
		var collection=helper.getCollectionObject(req.params.name)
		collection.find(function(err, documents) {
			res==null?callback(documents):res.json({response:documents});
		});
},
createDocument:function(req,res){
	var collection=helper.getCollectionObject(req.params.name)
	new collection(req.body).save(function(err,document){
		if (err)
			res.send(err);
    	res.json({response:document});
	 });
},
loginCheck:function(req,res){
	var collection=helper.getCollectionObject(req.params.name)
	 collection.findOne({$and:[{username: req.body.username}, {password:req.body.password}]},function(err,document){
	 	 if (!document)
	 	 	res.json({response:"Invalid Credentials"})
		else{	
			var start={latitude:12.9673484,longitude:80.15268879};
			
			if(document.owner){
				console.log(document.id)
				general.storeNameCollect(document.id,function(out){
					
					res.json({token:null,responseCode:"success",response:{storeDetails:out,user:document}});
				})
  
			}
			else{
				res.json({token:null,responseCode:"success",response:{user:document}});
			}

	}});
},
updateDocument:function(req,res){
	var collection=helper.getCollectionObject(req.params.name);
    collection.findByIdAndUpdate(req.params.id,{"$set":req.body},{new:true},function(err,document){
		if (err)
			res.send(err);
        res.json({response:document});
    })
},
getParticularDocument:function(req,res){
	var collection=helper.getCollectionObject(req.params.name);
	collection.findById(req.params.id,function(err,document){
		if (err)
			res.send(err);
		res.json({response:document});
	})
},
deleteDocument:function(req,res){
	var collection=helper.getCollectionObject(req.params.name);
	collection.findByIdAndRemove(req.params.id,function(err,deletedDocument){
		if(err)
			res.send(err);
		res.json({response:'Document(s) of '+deletedDocument.name+' deleted successfully'});
		
	})},
	
	filterByCategory:function(req,res,callback){
		general.feedLoad({params:{id:req.body.id}},null,function(out){
			var Products=helper.getCollectionObject("Products");
			Products.find({$and:[{category_id: req.body.category_id}, {name:req.body.name}]},function(err,t){
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
					res.json({response:{storeNames:storeNames,cheapestStore:cheapStoreNames,nearestStore:storeNames[0]}});
					})
				
				})
				
			})
		})
	}
}
