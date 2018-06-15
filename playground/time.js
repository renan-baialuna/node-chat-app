var moment = require('moment')
moment.locale('en');        
var date = moment();
console.log(date.format('LT'))
//var date = new Date();
//console.log(date.getMonth())

var date2 = moment();
console.log(date.format('h:mm a'))

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp)