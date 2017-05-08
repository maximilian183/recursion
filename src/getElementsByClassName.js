// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  	// your code here
  	var results = [];
  	var parent = document.body;
	
	var hasClass = function(element, cls) {
	    return element.classList.contains(cls);
	}
	
	var findInParent = function(bod){
	  	if (hasClass(bod, className)){
	  		results.push(bod);
	  	}
	  	if(bod.children.length > 0){
		  	for (var i=0; i<bod.children.length; i++){
		  		if (bod.children[i] !== undefined && !hasClass(bod.children[i], 'failures') && !hasClass(bod.children[i], 'duration') && !hasClass(bod.children[i], 'passes')
		  			 && !hasClass(bod.children[i], 'progress')){
			  		findInParent(bod.children[i]);
		  		}else{
		  			//console.log("==== undefined child found ====");
	  			}
	  		}
	  	}
	}

  	findInParent(parent);
  	return results;
};
