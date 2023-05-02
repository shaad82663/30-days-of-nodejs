//......................... SET IMMEDIATE .........................//
const callbackOne = () => {
    setTimeout(() => {
        console.log('Call back 1')
    }, 2000);
}

const callbackTwo = () => {
    console.log('Call back 2')
}

const immediate1 = setImmediate(callbackOne)
const immediate2 = setImmediate(callbackTwo)


//......................... SET INTERVAL .........................//											
function helloInterval () {  
    console.log("Running..... : SetInterval");  
  }  
const interval = setInterval(helloInterval,2000);


//......................... SET TIMEOUT .........................//											
function helloTimeout () {  
    console.log("Running..... : TimeOut");  
  }  
const timeout =  setTimeout(helloTimeout,2000); 
                          
//......................... CLEAR TIMERS .........................//											
setTimeout(() => {
    console.warn('Clearing all timers after 10 seconds!!!!!!!!!!!!!!')
    console.log('------------------------------------------------------')
    clearInterval(interval)
    clearTimeout(timeout)
    clearImmediate(immediate1)
    clearImmediate(immediate2)
    console.log('done');
    console.log('------------------------------------------------------')
}, 10000);