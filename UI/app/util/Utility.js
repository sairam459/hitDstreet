HitDStreet.constants = {};
Ext.apply(HitDStreet.constants, {
   IP_ADDRESS:'http://172.29.18.140:8080',
   
});
Ext.define('HitDStreet.util.Utility', {
	singleton:true,
	init:function(){
		var categories;
		responsiveVoice.setDefaultVoice("UK English Male");
		
		var me=this;
		var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-GB";
		 
		var req;
        recognition.onresult = function(event) {
			req=event.results[event.resultIndex][0].transcript;
            //console.log(event.results[event.resultIndex][0].transcript)
            //console.log(event.results[event.resultIndex][0].confidence)
			if(event.results[event.resultIndex].isFinal){
				console.log(req);
			var client = new ApiAi.ApiAiClient({accessToken: '1898a117dac64f329bbcb5b4d0c2d8d9',sessionId:"hds"});
var promise = client.textRequest(req,{sessionId:client.getSessionId()});

promise
    .then(handleResponse)
    .catch(heandleError);

function handleResponse(serverResponse) {
	redirect(serverResponse);
        console.log(serverResponse);
}
function heandleError(serverError) {
        console.log(serverError);
		
}
			}


			}
			
			recognition.start();
			recognition.onend = function() {
  recognition.start();
}
           // if(event.results[event.resultIndex].isFinal)
               // artyom.simulateInstruction(event.results[event.resultIndex][0].transcript)
       
       
	function redirect(serverResponse){
		switch(serverResponse.result.action){
		case "WelcomeResponse":
		
		{
			
			responsiveVoice.speak('hi '+HitDStreet.user.response.user.name+' How can I help you?');
		}
			break;
		case "CityResponse":
		
		{
			
			responsiveVoice.speak(serverResponse.result.fulfillment.speech);
		}
			break;

		case "CategoryResponse":
		
		{	console.log("hello");
			Ext.Ajax.request({
				
            url: HitDStreet.constants.IP_ADDRESS+'/hds/Categories',
            method: 'GET',
			
            
            callback: function(req, success, response) {
				 var v=JSON.parse(response.responseText);
				if(v.response){
					categories=v.response;
					
					var n="";
					categories.forEach(function(rec){
						n=n+rec.category_name+",";
					});
					responsiveVoice.speak(n+"are available");
				}
				else{
					responsiveVoice.speak("could you please repeat that ?");
				}
			
            } 
        });
			
		}
			break;
		case "selectcatresponse":
		
		{	
					responsiveVoice.speak(serverResponse.result.fulfillment.speech);
		
			
		}
			break;	
			case "selectproduct":
		
		{	var required=serverResponse.result.contexts;
		var product;
		var category;
		var categoryid;
		
				required.forEach(function(rec){
					if(rec.name=="product"){
					product=rec.parameters.products	;
					}
					
					if(rec.name=="city"){
					category=rec.parameters.Categories;
					}
				});
				
				categories.forEach(function(rec){
					if(Ext.util.Format.capitalize(category)==rec.category_name){
						categoryid=rec._id
					}
				});
				console.log(required);
				var data={
					category_id:categoryid,
					id:HitDStreet.user.response.user._id,
					name:Ext.util.Format.capitalize(product)
				};
				console.log(data);
					Ext.Ajax.request({
				
            url: HitDStreet.constants.IP_ADDRESS+'/hds/filter',
            method: 'POST',
			jsonData:Ext.encode(data),
			
			
            
            callback: function(req, success, response) {
				 var v=JSON.parse(response.responseText);
				 console.log(v);
				if(v.response){
					var t=v.response;
					console.log(t);
					var cheap=t.cheapestStore;
					var n="";
					cheap.forEach(function(rec){
						n=n+rec+","
					})
					responsiveVoice.speak(t.storeNames.length+'stores have the product you have asked for '+' ,stores having the best offer are '+n +' ,the nearest store to you is  '+t.nearestStore );
					
					
					
				}
				else{
					responsiveVoice.speak("could you please repeat that ?");
				}
			
            } 
        });
		
			
		}
			break;	
		
	
	}
	}

	
	
}
});

