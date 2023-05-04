//(((((((((((((((((1)))))))))))))))))
// Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
// function find_third_number(x, y, z) {
//     if (x !== y && x !== z && y !== z) return "Three numbers are unequal.";
//     if (x == y) return z;
//     if (x == z) return y;
//     return x;
// }

// console.log(find_third_number(1, 2, 2));
// console.log(find_third_number(1, 1, 2));
// console.log(find_third_number(1, 2, 3));

// let a=(n1,n2,n3)=>n1!==n2&&n1!==n3&&n2!==n3?`Three Numbers Not Equal`:n1===n2?n3:n1===n3?n2:n1
// console.log(a(1, 2, 2));
// console.log(a(1, 1, 2));
// console.log(a(1, 2, 3));
//(((((((((((((((((2)))))))))))))))))
// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.222000=>000
// function trailing_zeros_factorial(n) {
//     var result = 0;
//     for (var i = 5; i <= n; i += 5) {
//         var num = i;
//         while (num % 5 === 0) {
//             num /= 5;
//             result++;
//         }
//     }
//     return result;
// }

// console.log(trailing_zeros_factorial(8))
// console.log(trailing_zeros_factorial(9))
// console.log(trailing_zeros_factorial(10))

//fact 5=5*4*3*2*1
// fact
// let a=(fact)=>{
//     let n=fact
//     for (let index = 1; index < fact; index++) {
//         n=n*index
//     }
//     return n
// }
// console.log(a(8))
// console.log(a(9))
// console.log(a(10))
// function trailingZero(num) {
//     var resultNum = 1;
//     var zeros = 0;
//     for (var i = 1; i <= num; i++) {
//         resultNum *= i;
//     } //get fact

//     while (resultNum) {
//         if (resultNum % 10 === 0) {
//         zeros++;
//         } else {
//         return zeros; //get num of zeros
//         }
//         resultNum = Math.floor(resultNum / 10); //zeros+1 from 0
//     }
//     return zeros;
// }
// console.log(trailingZero(8));
// console.log(trailingZero(9));
// console.log(trailingZero(10));
// let a=(n)=>{
//     let res=1,zeros=0;
//     for (let index = 1; index <= n; index++) {
//         res*=index
//     }
//     while(res){
//         if (res%10==0) {
//             zeros++
//         }else{
//             return zeros
//         }
//         res=Math.floor(res/10)
//     }
//     return zeros
// }
// console.log(a(8));
// console.log(a(9));
// console.log(a(10));
//(((((((((((((((((3)))))))))))))))))
// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
// function int_sum(num) {
//     var s_sum = 0;
//     while (num > 0) {
//         s_sum += num;
//         num = Math.floor(num / 2);
//     }
//     return s_sum;
// }
// console.log(int_sum(8))
// console.log(int_sum(9))
// console.log(int_sum(26))
// let a=(n)=>{
//     let sum=0
//     while (n>0) {
//         sum+=n
//         n=Math.floor(n/2)
//     }
//     return sum
// }
// console.log(a(8))
// console.log(a(9))
// console.log(a(26))
//(((((((((((((((((4)))))))))))))))))
// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.).
// function is_correct_Sentence(input_str) {
//     var first_char = input_str[0];
//     var last_char = input_str[input_str.length - 1];
//     return /[A-Z]/.test(first_char) && last_char == "."
// }
// console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
// console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));
// console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));
// let a=(str)=>{
//     let fLetter=str[0]
//     let lLetter=str[str.length-1]
//     return /[A-Z]/.test(fLetter)&&lLetter=='.'
// }
// console.log(a("This tool will help you write better English and efficiently corrects texts."));
// console.log(a("This tool will help you write better English and efficiently corrects texts"));
// console.log(a("this tool will help you write better English and efficiently corrects texts."));
//(((((((((((((((((5)))))))))))))))))
// Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
// function is_diagonal_matrix(user_matrix) {
//     for (var i = 0; i < user_matrix.length; i++) {
//         for (var j = 0; j < user_matrix.length; j++) {
//             if (i !== j && user_matrix[i][j] !== 0)
//               return false;
//         }
//     }
//     return true;
// }

// console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
// console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));
// 1 0 0
// 0 1 0
// 0 0 1   111 is diagonal
// let a=(mat)=>{
//     for (let index = 0; index < mat.length; index++) {
//         for (let index2 = 0; index2 < mat.length; index2++) {
//             if (index!==index2 && mat[index][index2]!=0) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(a([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
// console.log(a([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));
//(((((((((((((((((6)))))))))))))))))
// Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
// For a string "2*0", the output should be : ["210", "240", "270"]
//let str=123 =>a+b+c%3==0?'replace b by any number from 0-9'
// function is_divisible_by3(mask_str) {
//     var digitSum = 0,
//         hash_pos = 0
//         left = "0".charCodeAt(), //48
//         right = "9".charCodeAt(), //57
//         result = [],
//         mask_data = mask_str.split("");

//     for (var i = 0; i < mask_data.length; i++) {
//         if (
//         left <= mask_data[i].charCodeAt() &&
//         mask_data[i].charCodeAt() <= right
//         ) {
//         digitSum += mask_data[i].charCodeAt() - left;
//         } else {
//         hash_pos = i;
//         }
//     }

//     for (var i = 0; i < 10; i++) {
//         if ((digitSum + i) % 3 === 0) {
//         mask_data[hash_pos] = String.fromCharCode(left + i);
//         // console.log(mask_data[hash_pos])
//         result.push(mask_data.join(""));
//         }
//     }

//     return digitSum;
// }

// console.log(is_divisible_by3("2#0"));
// console.log(is_divisible_by3("4#2"));

// function isDivisibleBy3(s) {
//   if (s.length < 3) {
//     return "";
//   }
//   let arr = [];
//   let str = s.trim();
//   let indexOfHash = str.indexOf("#");
//   let first = str.slice(0, indexOfHash);
//   let last = str.slice(indexOfHash + 1);
//   for (let i = 0; i < 10; i++) {
//     let num = Number.parseInt(first + i + last);
//     if (num % 3 === 0) {
//       arr.push(num);
//     }
//   }
//   return arr;
// }
// console.log(isDivisibleBy3("2#0"));
// console.log(isDivisibleBy3("4#2"));
//(((((((((((((((((((((best solution)))))))))))))))))))))
// function replaceHash(str) {
//     let tab = [];

//     for (let i = 0; i <= 9; i++) {
//         let newStr = str.replace("#", i);
//         let newNumber = parseInt(newStr, 10);
//         if (!(newNumber % 3)) {
//         tab.push(newNumber.toString());
//         }
//     }
//     return tab;
// }

// console.log(replaceHash("2#0"));
// console.log(replaceHash("4#2"));

// let a=str=>{
//     let arr=[]
//     for (let index = 0; index <= 9; index++) {
//         let newStr=str.replace('#',index)
//         let newNumber=parseInt(newStr,10)
//         if (newNumber%3===0) {
//             arr.push(newNumber.toString())
//         }
//     }
//     return arr
// }
// console.log(a("2#0"));
// console.log(a("4#2"));
//(((((((((((((((((((((7)))))))))))))))))))))
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
// function is_identity_Matrix(matrix_data) {
//     //Checks whether given matrix is a square matrix or not
//     for (var i = 0; i < matrix_data.length; i++)
//     {
//         rows = matrix_data.length;
//         cols = matrix_data[i].length;
//     if(rows != cols)
//     {
//         console.log("Matrix should be a square matrix");
//         return false;
//     }
//     }
//     for (var i = 0; i < matrix_data.length; i++)
//     {
//         for (var j = 0; j < matrix_data.length; j++)
//         {
//         if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
//         {
//             return false;
//         }
//         }
//     }
//     return true;
// }
// console.log(is_identity_Matrix([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]))
// console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
// console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]])) 
// let a=mat=>{
//     //check square row =col
//     for (let index = 0; index < mat.length; index++) {
//         let row=mat.length
//         let col=mat[index].length
//         if (col!=row) {
//             `matrix must be square`
//             return false
//         }
//     }
//     // check diagonal
//     for (let index = 0; index < mat.length; index++) {
//         for (let index2 = 0; index2 < mat.length; index2++) {
//             if (index!=index2&&mat[index][index2]!=0) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(a([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]))
// console.log(a([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
// console.log(a([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]])) 
//(((((((((((((((((((((8)))))))))))))))))))))
// Write a JavaScript program to check whether a given number is in a given range.
// let a=(f,m,l)=>m>=f&&m<=l?true:false
// console.log(a(1,2,3));
// console.log(a(1,2,-3));
// console.log(a(1.1,1.2,1.3));
//(((((((((((((((((((((9)))))))))))))))))))))
// Write a JavaScript program to check if a given integer has an increasing digit sequence.
// function is_increasing_digits_Sequence(num) {

//     var arr_num = ('' + num).split('');
  
//     for (var i = 0; i < arr_num.length - 1; i++) {
//       if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
//         return false;
//       }
//     return true;
//   }
//   console.log(is_increasing_digits_Sequence(123));
//   console.log(is_increasing_digits_Sequence(1223));
//   console.log(is_increasing_digits_Sequence(45677));
// let a=(n)=>{
//     let arr=n.toString().split('')
//     for (let index = 0; index < arr.length; index++) {
//         if(parseInt(arr[index])>=parseInt(arr[index+1])){
//             return false
//         }
//     }
//     return true
// }
// console.log(a(123))
// console.log(a(1223))
// console.log(a(45677))
//(((((((((((((((((((((10)))))))))))))))))))))
// Write a JavaScript program to check if a point lies strictly inside the circle.
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)
// function check_a_point(a, b, x, y, r) {
//     var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
//     r *= r;
//     if (dist_points < r) {
//         return true;
//     }
//     return false;
// }

// console.log(check_a_point(0, 0, 2, 4, 6));
// console.log(check_a_point(0, 0, 6, 8, 6));
// let a=(a,b,x,y,r)=>r*r>=(a-x)*(a-x)+(b-y)*(b-y)?true:false
// console.log(a(0, 0, 2, 4, 6));
// console.log(a(0, 0, 6, 8, 6));