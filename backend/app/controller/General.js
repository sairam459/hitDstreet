var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var helper=require('../helpers/helper');
var Users=require('../models/Users');
var haversine = require('haversine')
module.exports={
    storeNameCollect:function(id,callback){
        
			var collection=helper.getCollectionObject("Stores");

			collection.find({owner_id:id},{id:1,store_name:1},function(err,documents){
				
					callback(documents)
			})

    },
	feedLoad:function(req,res,callback){

		
		Users.findById(req.params.id,{'coordinates.latitude':1,'coordinates.longitude':1},function(err,user){
			var start=user.coordinates;
			console.log(start)
		   distanceArray=[]
		   var Stores=helper.getCollectionObject("Stores")
		   Stores.find(function(err,stores){
			   	distanceArray=[]
				storeNames=[]
				stores.forEach(function(s){
					
					var end=s._doc.coordinates;
					var store_id=s.id;
					distanceArray.push({"store_id":store_id,"store_name":s.store_name,"distance":haversine(start,end)})
				});
				console.log(distanceArray)
				nearestStoreArray=distanceArray.filter(function(t){
					if (t.distance<=10){
						return t
					}
				})
						
			
				var storeNames=nearestStoreArray.map(function(obj){return obj.store_id})
				var Products=helper.getCollectionObject("Products");
				Products.find({shop_id:{"$in":storeNames.slice(0,11)}},function(err,documents){
					res==null?callback(documents):res.json({response:{feedLoad:documents,storeDetails:distanceArray.slice(0,11)}}) ;
				
				})

		   })
		})

			
	},
	getProducts:function(req,res){
		var Products=helper.getCollectionObject("Products");
		Products.find({shop_id:req.params.id},function(err,products){
			res.json({response:products});
		})
	}
}