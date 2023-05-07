//((((((((((((((1))))))))))))))
// Write a JavaScript program to check whether a given matrix is lower triangular or not.

// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
//100 200 222 above 102 is 000
// function lower_triangular_matrix(user_matrix) {
//     for (var i = 0; i < user_matrix.length; i++) 
//          {
//         for (var j = 0; j < user_matrix[0].length; j++) 
//             {
//             if (j > i && user_matrix[i][j] !== 0)
//               return false;
//         }
//     }
//     return true;
// }

// console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
// console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));
// let a=(mat)=>{
//     for (let index = 0; index < mat.length; index++) {
//         for (let index2 = 0; index2 < mat[0].length; index2++) {
//             if (index2>index&&mat[index][index2]!=0) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(a([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
// console.log(a([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));
//((((((((((((((2))))))))))))))
// Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.
// let a=(arr)=>{
//     let b=arr.sort()
//     for (let index = 0; index < arr.length; index++) {
//         let c=b[index+1]-b[index]
//         if (c*b[index]>=c*b[index+1]) {
//             return false 
//         }

//     }
//     return true
// }
// console.log(a([1, 2, 3]));
// console.log(a([1, 2, 2]))
// console.log(a([-3, -2, -1]))
//((((((((((((((3))))))))))))))
// Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.
//fact
// let a=(arr,n)=>{
//     for (let index = 0; index < n; index++) {
//         if (!arr.includes(index+1)) {
//             return false
//         }
        
//     }
//     return true
// }
// console.log(a([1, 2, 3, 4, 5], 5));
// console.log(a([1, 2, 3, 5], 5));
//((((((((((((((4))))))))))))))
// Write a JavaScript program to create the NOR value of two given booleans.
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.
// let a=(x,y)=>{
//     return !x&&!y?true:false
// }
// console.log(a(true, false));
// console.log(a(false, false));
// console.log(a(true, true));
//((((((((((((((5))))))))))))))
// Write a JavaScript program to find the longest string in a given array.
// function longest_str_in_array(arra)
//   {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["ab", "a", "abcd"]));
// console.log(longest_str_in_array(["ab", "ab", "ab"]));
// let a=(arr)=>{
//     for (let index = 0; index < arr.length; index++) {
//         var b=Math.max(arr[index].length)
//         var c=arr[index]
//         if (c.length===b) {
            
//         }
//     }
//     return c
// }
// console.log(a(["ab", "a", "abcd"]));
// console.log(a(["ab", "ab", "ab"]));
//((((((((((((((6))))))))))))))
// Write a JavaScript program to get the largest even number from an array of integers.
// let a=(arr)=>{
//     let b=0
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index]%2==0) {
//             b=Math.max(arr[index])
//         }
        
//     }
//     return b
// }
// console.log(a([20, 40, 200]));
// console.log(a([20, 40, 200, 301]));
//((((((((((((((7))))))))))))))
// Write a JavaScript program to reverse the order of bits in a integer.

// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87
// function mirror_bits(n) {
//     let t = n.toString(2).split("");
//     let str_len = t.length;
//     for (let i = 0; i < 8 - str_len; i++) {
//         t.unshift("0");
//     }
//     return parseInt(t.reverse().join(""), 2);
// }
// // 14 -> 00001110 -> 01110000 -> 112
// console.log(mirror_bits(14));
// // 56 -> 00111000 -> 00011100 -> 28
// console.log(mirror_bits(56));
// // 234 -> 11101010 -> 01010111 -> 87
// console.log(mirror_bits(234));
// let a=(n)=>{
//     // change number to binary then make it arr
//     let b=n.toString(2).split('')
//     let c=b.length
//     //if length of arr < 8 push 0 to fill it to 8
//     for (let index = 0; index < 8-c; index++) {
//         b.unshift('0')
//     }
//     // return the arr to number by parseInt(num,2) and join the arr after reverse it
//     return parseInt(b.reverse().join(''),2)
// }
// console.log(a(14))
// console.log(a(56))
// console.log(a(234)) 
//((((((((((((((8))))))))))))))
// Write a JavaScript program to find the smallest round number not less than a given value.
// let a=(n)=>{
//     while(n%10){n++}
//     return n
// }
// console.log(a(56));
// console.log(a(592));
//((((((((((((((9))))))))))))))
// Write a JavaScript program to find the smallest prime number strictly greater than a given number.
// function next_Prime_num(num) {
//     for (var i = num + 1;; i++) {
//         var isPrime = true;
//         for (var d = 2; d * d <= i; d++) {
//             if (i % d === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             return i;
//         }
//     }
// }

// console.log(next_Prime_num(3));
// console.log(next_Prime_num(17));
// let a=(n)=>{
//     while(n%2){n++}
//     return n+1
// }
// console.log(a(3));
// console.log(a(17));
//((((((((((((((10))))))))))))))
// Write a JavaScript program to find the number of even digits in a given integer.
// let a=(n)=>{
//     let b=n.toString().split('')
//     let c=0
//     let d=[]
//     for (let index = 0; index < b.length; index++) {
//             c=b[index]%2===0||b[index]===0?d.push(b[index]):'hi'
//     }
//     return d.length
// }
// console.log(a(123));
// console.log(a(1020));
// console.log(a(102));