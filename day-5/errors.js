const fs = require('fs');

//Error Delivering.
// 1. Exceptions
function square(num) {
    if (typeof num !== 'number') {
      throw new TypeError(`Expected number but got: ${typeof num}`);
    }
  
    return num * num;
  }
  
  try {
    square('8');
  } catch (err) {
    console.log(err.message); // Expected number but got: string
  }


function square(n, callback) {
    if(typeof callback !== 'function'){
        throw new Error(`callback: exoected function but got ${typeof callback}`)
    }
    setTimeout(() => {        
        if(typeof n !== 'number'){
            callback(new Error(`n: exoected function but got ${typeof n}`))
        }
    
        const result = n* n
        callback(null, result)
    }, 1000);
}

square('2', (err, res) => {
    if(err) console.log(err.message)
    
    console.log(res)
})