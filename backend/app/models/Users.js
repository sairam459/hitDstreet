var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var request=require('request');
mongoose.Promise=Promise;
var userSchema   = new Schema({
	name: String,
	mobile: String,
	dp:String,
	location:{
	city:String,
	pin:String
},
	coordinates:{
		latitude:Number,
		longitude:Number
	},
	gender:String,
	owner:Boolean,
	mail:String,
	password:String,
	username:String,
	photo:String,
	created_at:Date,
	updated_at:Date

},{
	versionKey: false
});
userSchema.pre('save',function(next){
	
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

module.exports = mongoose.model('Users', userSchema,'Users');