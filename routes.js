var Constants = require('./constants');
var uu = require('underscore');

var indexfn = function(request, response) {
    response.render("homepage", {
	name: Constants.APP_NAME,
	title: "My First " + Constants.APP_NAME,
	product_name: Constants.PRODUCT_NAME,
	product_short_description: Constants.PRODUCT_SHORT_DESCRIPTION,
	twitter_username: Constants.TWITTER_USERNAME,
	twitter_tweet: Constants.TWITTER_TWEET,
	coinbase_preorder_data_code: Constants.COINBASE_PREORDER_DATA_CODE
});
};

var define_routes = function(dict) {
    var toroute = function(item) {
	return uu.object(uu.zip(['path', 'fn'],[item[0], item[1]]));
	};
    return uu.map(uu.pairs(dict), toroute);
};
 
	
var ROUTES = define_routes({
    '/': indexfn
});

module.exports = ROUTES;
   
