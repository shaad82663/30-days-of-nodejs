var arr = ['a','e','i','o'];
console.log(arr);
arr.push('u');
console.log(arr);	
arr.pop()
console.log(arr);	
arr.unshift(1)
console.log(arr);	
arr.shift()
console.log(arr);	
arr.reverse()
console.log(arr);	
arr.sort()
console.log(arr);	


arr = [3,5,1,7,8]
arr.splice(2,1) // remove one elemnt at index 2
console.log(arr)
arr.splice(2,1, -1) // add -1 on index 2
console.log(arr)

//Reversing a string,  reverse() will not work on string, we can use join()
var str = '123456'
console.log(str)
str  = str.split("").reverse().join("")
console.log(str)

const test1 = arr.every( el => el > 10)
console.log(test1)

const test2 = arr.filter( el => el > 5)
console.log(test2)

const test3 = arr.find(el => el > 5 )
console.log(test3);


// arr.forEach(el => console.log(el*4))

const sum = arr.reduce((acc, curr) => {
   return acc + curr   
}, 0)
console.log(sum)