// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'boolean' || typeof obj === 'number')
  	return '' + obj + '';
  if (typeof obj === undefined || typeof obj === 'function'){
  	return '';
  }
  if (obj === null){
  	return 'null';
  }
  if (typeof obj === 'string'){
  	return '"' + obj + '"';
  }
  if (typeof obj === 'object'){
  	if (Array.isArray(obj)){
  		if (obj.length===0) { 
  			return '[]'; 
  		}else{
	  		var returnStr = '';
  			for (i=0; i<obj.length; i++){
  				returnStr = returnStr + stringifyJSON(obj[i]) + ',';
  			}
  			returnStr = returnStr.slice(0,returnStr.length - 1);
  			returnStr = '[' + returnStr + ']';
  			return returnStr;
  		}
  	}else{
  		if (_.isEmpty(obj)) { 
  			return '{}'; 
  		}else{
  			var returnStr = '';
  			for (var x in obj){
  				if (obj[x] !== undefined && typeof obj[x] !== 'function'){
	  				returnStr = returnStr + '"' + x + '":' + stringifyJSON(obj[x]) + ',';
	  			}
  			}
  			returnStr = returnStr.slice(0,returnStr.length - 1);
	  		returnStr = '{' + returnStr + '}';
  			return returnStr;
  		}
  	}
  }
};