/**
 * 
 */
function $(element) {
	if (arguments.length > 1) {
		for ( var i = 0, elements = [], length = arguments.length; i < length; i++)
			elements.push($(arguments[i]));
		return elements;
	}
	if (Object.isString(element))
		element = document.getElementById(element);
	return Element.extend(element);
}

function _(code){
	return eval(code);
}



/*
Object.deepExtend = function(destination, source) {
	  for (var property in source) {
	    if (source[property] && source[property].constructor &&
	     source[property].constructor === Object) {
	      destination[property] = destination[property] || {};
	      arguments.callee(destination[property], source[property]);
	    } else {
	      destination[property] = source[property];
	    }
	  }
	  return destination;
	};
	http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
*/