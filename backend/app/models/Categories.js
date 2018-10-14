var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
mongoose.Promise=Promise;
var categorySchema   = new Schema({
	category_name: String,

},{
	versionKey: false
});

module.exports = mongoose.model('Categories', categorySchema,'Categories');