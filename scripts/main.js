function pow(x,n){
	var res = x;
	for(var i=1; i<n; i++) { res *= x;}
	return res;
}

var xx = prompt('Enter X');
var nn = prompt('Enter N');
alert(pow(xx,nn));
