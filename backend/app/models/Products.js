var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

mongoose.Promise=Promise;
var productSchema   = new Schema({
	name: String,
    brand:String,
	offers:{
		    description:String,
			from:Date,
			to:Date,
			discount:Number
	},
	category_id:String,
    shop_id:String,
	created_at:Date,
	updated_at:Date,
	photo:String

},{
	versionKey: false
});
productSchema.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at)
		  this.created_at = currentDate;
	next();
});

module.exports = mongoose.model('Products', productSchema,'Products');