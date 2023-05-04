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
