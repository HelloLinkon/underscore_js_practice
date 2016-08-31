var _ = require('underscore');
 
//_.each
var array = [1,2,3,4];
_.each(array, function(a){ console.log(a*2)});

//_.map
_.map(array, function(a){ console.log(a*a) });