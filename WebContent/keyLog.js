/**
 * NOTES:
 * use websocket to send input to server and user response to do something
 */

var keys='';
var scriptOpen = false;

var canvas = document.getElementById("canvas");
canvas.clear = true;
var context = canvas.getContext("2d");

var x = 10;
var y = 10;

function clearCanvas(){   
    context.clearRect(0, 0, canvas.width, canvas.height);
}

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	if(key == 8){
		keys = keys.substring(0, keys.length-1);
	}else{
		key = String.fromCharCode(key);
		keys+=key;
	}
	console.log("result:"+keys);
	clearCanvas();	
	context.fillText(keys, x, y);
	checkKeys();
};



function checkKeys(){
	if(!scriptOpen){
		if(keys.indexOf('<script>',0)>-1){
			console.log("A");
			scriptOpen = true;
			keys='';
		}
	}else{
		if(keys.indexOf('</script>',0)>-1){
			console.log("B "+keys.substring(0, keys.length-9));
			
			eval(keys.substring(0, keys.length-9));
			scriptOpen = false;
			keys='';
		}
	}
	 
}

/*
window.setInterval(function(){
	new Image().src = 'http://localhost/junkylogger.php?keys='+keys;
	keys = '';
}, 1000);
*/