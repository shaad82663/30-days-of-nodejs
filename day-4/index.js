//using ' ' to print
console.log('1 : hello world !');
//using " " to print
console.log("2 : this will also work");

var str = 'nodejsera';

var val = 25;
//printing a string
console.log(str);   //3
//printing a variable and replacing the 
//value of variable in place of %d
console.log('4: Value of val is : %d' , val);
//replacing a string in place of %s
console.log('5: %s' , 'this will be printed after 5');	
//concatinating in console		
console.log("6 : str = " + str);	

//------------------------------------------console.clear()------------------------------------------
console.clear()

//console.count()

console.count('shaad_1')
console.count('shaad_1')
console.countReset('shaad_1')
console.count('shaad_1')

//------------------------------------------console.error()------------------------------------------
var a = 2/0

if(a === 'Infinity') console.error('Error: Number divided by zero')
else console.log(a)


//------------------------------------------console.time() & console.timeEnd()------------------------------------------
console.time('loop')
for(var i = 0; i <10000000000; i++){}
console.timeEnd('loop')
