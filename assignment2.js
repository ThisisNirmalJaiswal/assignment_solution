

// Assignment :2

function printReversePyramid(n){
    let pattern = "";
    for (let i = n; i >= 1; i--) {
        // spaces
        for (let j = 1; j <= (n - i); j++) {
            pattern+= " "
        }
     
        // stars
        if(i % 2 == 0){
            for (let j = 1; j <= (2 * i) - 1; j++) {
                if(j == 1 || j == (2 * i) - 1){
                    pattern += "$"
                }else{
                    pattern += "%"
                }
            }
        }else{
            for (let j = 1; j <= (2 * i) - 1; j++) {
                if(j % 2 != 0){
                    pattern += "*";
                }else{
                    pattern += '#';
                }
            }
        }
        
        pattern+= "\n"
       }
    return pattern;
}

let result = printReversePyramid(5)
console.log(result);

/* output
*#*#*#*#*
 $%%%%%$
  *#*#*
   $%$
    *
*/

