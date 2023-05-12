const matchPattern = (str, reg, flag = 'none') => {
    const arr = str.match(reg)
    if (arr) {
        if(flag !== "none"){
            console.log(`Valid ${flag}`)
        }else{
            console.log(`Occurrence: ${arr.length}`);
            console.log(`Value(s): ${arr}`);
        }
      } else {
        console.log("No match found.");
      }
}
//------------------------------------Finding specific text in sring------------------------------------
var fs = require('fs');
var filename = 'data.txt';
var str = fs.readFileSync(filename).toString();
var pattern = /man/gim;
matchPattern(str, pattern)

//------------------------------------Finding number of tags------------------------------------
filename = 'data.html';
str = fs.readFileSync(filename).toString();
pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
matchPattern(str, pattern)

//------------------------------------Validating Email------------------------------------
str = 'rjbitdemo@gmail.com'
pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
matchPattern(str, pattern, "email")

//------------------------------------Validating HexaDecimal Number------------------------------------ 
str = 'FdF9F6'
pattern = /^[a-fA-F0-9]+$/g;
matchPattern(str, pattern, "hexadecimal number")

//------------------------------------Validating password------------------------------------
str = 'Aa#1aaabcde'
pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
matchPattern(str, pattern, "password")

////Backword Slah -> for specifying specail char
matchPattern(
    'shaad82@gmail.com',
    /\./
)

/// [] used for charcaters
/// ^ for starting char
matchPattern('dbcacacv', /^[c-e]/)
/// $ used for last char
matchPattern('dbcacacv', /v$/)
// matchPattern('mas mod mes mes', /m.s/ig)// m <any_char> s
matchPattern('Raju was good and nice', /goofd ~ nice/)// Return either one. if first one exists, returns it.
matchPattern('cham chchachmamo chair', /ch?a/g)// ? -> zero or one occurance
matchPattern('xyxyz xyxyz xyz z', /xy+z/g)// + -> one or more occuance od 'xy' before 'z'
 matchPattern('xy xxyy xxyyyxx', /x{2,4}/g)  //   {} -> occurance range e.g. x occuring 2 to 4 times.
matchPattern('xyz zyz yyz xzy xxz, /^(x|z)yz/g')




