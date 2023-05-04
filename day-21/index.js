const buff = Buffer.alloc(20)

console.log(buff)

const buff1 = Buffer.from("hello")
console.log(buff1)

const buff2 = Buffer.from([1,2,3,4])
console.log(buff2)

													
// compare the buffers
var buff3 = Buffer.from('shaad');
var buff4 = Buffer.from('shaadd');
var output = buff3.compare(buff4);
console.log(output)	
if(output < 0) {
    console.log(buff3 +" comes before " + buff4);
 }else if(output == 0){
    console.log(buff3 +" is same as " + buff4);
 }else {
    console.log(buff3 +" comes after " + buff4);
 }	
const len = buff3.length + buff4.length
 //Concat and Copy the buffers
 const newBuff = Buffer.alloc(len)
 console.log(buff3)
 Buffer.concat([buff3,buff4]).copy(newBuff)
 console.log(newBuff)

 console.log(Buffer.concat([buff3,buff4]).equals(newBuff))

 //fill buffer
var buff5 = Buffer.allocUnsafe(10).fill('nj');
console.log(buff5.toString());					
								

//IndexOF
console.log(buff5.indexOf('h'))
console.log(buff5.indexOf('j'))
console.log(buff5.lastIndexOf('j'))

//Slcie 
console.log(buff5.slice(0,4).toString())