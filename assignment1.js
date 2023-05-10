// pattern to achieve 
/*
1
3 2
4 5 6
10 9 8 7
11 12 13 14 15
 */

// Assignment: 1

function printNumbers(n){
    let pattern = "";
    let counter = 1;
    for(let i=1; i<=n; i++){
        
        if(i %2 == 0){
            let rawStr = []
            for(let j=i; j>=1; j--){
                rawStr.push(counter)
                counter++;
               
            }
            pattern += rawStr.reverse().join(" ")
        }else{
            for(let j=1; j<=i; j++){
                pattern += counter + " ";
                counter++;
            }
        }
        
        pattern += '\n';
    }
    console.log(pattern)
}

printNumbers(5)
