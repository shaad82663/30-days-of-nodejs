var assert = require('assert');
var a = 10;
var b = 20;
assert(a < b);


var assert = require('assert');  
function demo (x,y,z) {  
  var value = x + y + z ; 
  return value;
}  
var output = demo(4,1,10);
console.log("Output : " + output);
var expected_output = 15;
console.log("Expected Output : " + expected_output);
assert( output === expected_output , 'Test case is true so this will not be printed'); 


a = 10
b = '10'
assert.deepEqual(a,b, 'Did not match')

// assert.deepStrictEqual(a,b, 'Did not match deeply!')

// assert.fail('failed')

// console.log(assert.ifError(1))

// assert.ok(1 > 2, 'error')

assert.throws(
    () => {
      throw new Error('Wrong value..')
    },
    Error
)