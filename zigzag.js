// Assignment :3
/*
Zigzag Problem (Zik Zak Problem): The developer needs to process the sequence in a
zigzag pattern. That is, if the sequence is [1, 2, 3, 4, 5], the output should be [5, 1, 4, 2, 3].
The zigzag pattern starts with the highest number, followed by the smallest number, then the
second highest number, followed by the second smallest number, and so on. The developer
needs to implement a function that takes in a sequence of integers and returns the sequence
in a zigzag pattern. 
*/

let ar = [1, 2, 3, 4, 4, 5, 5, 6, 7];

function zigzag(arr) {
    arr = arr.sort((a, b) => a - b);
    let result = [];
    let i = 0, j = arr.length - 1;
    while (i <= j) {
        if (i === j) {
            result.push(arr[i]);
            break;
        }
        result.push(arr[j]);
        result.push(arr[i]);
        i++;
        j--;
    }
    return result;
}

let result = zigzag(ar);
console.log(result);
