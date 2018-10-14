var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
mongoose.Promise=Promise;
var helper=require('../helpers/helper');
var request=require('request');
var storeSchema   = new Schema({
    mobile:String,
    email:String,
    location:{
		pin:String,
        address:String,
        city:String
    },
	coordinates:{
		latitude:Number,
		longitude:Number
	},
    owner_id:String,
    store_name:String,
	created_at:Date,
	updated_at:Date

},{
	versionKey: false
});
storeSchema.post('save',function(doc){
		var collection=helper.getCollectionObject("Users")
	    collection.findByIdAndUpdate(doc.owner_id,{"$set":{"owner":true}});			
})

storeSchema.pre('save',function(next){
	
	var currentDate=new Date();
	var self=this;
	this.updated_at=currentDate;
	if(!this.created_at)
		  this.created_at = currentDate;
	request('http://maps.googleapis.com/maps/api/geocode/json?address='+self.location.pin,function(err,response,body){
				var out=JSON.parse(body);
			  	 self._doc.coordinates.latitude=out.results[0].geometry.location.lat;
	             self._doc.coordinates.longitude=out.results[0].geometry.location.lng	
			 next();	
		})
		

	

});


module.exports = mongoose.model('Stores', storeSchema,'Stores');