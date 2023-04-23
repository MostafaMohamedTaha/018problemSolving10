//((((((((((((((81))))))))))))))
// Write a JavaScript program to add two digits to a given positive integer of length two.
// let a=(n)=>n%10+Math.floor(n/10)
// console.log(a(25)) //5+2
// console.log(a(50)) //0+5
//((((((((((((((82))))))))))))))
// Write a JavaScript program to add two positive integers without carrying.
// let a=(n1,n2)=>{
//     let sum=0,x=1
//     while(n1>0&&n2>0){
//         sum+=x*((n1+n2)%10)
//         n1=Math.floor(n1/10)
//         n2=Math.floor(n2/10)
//         x*=10
//     }
//     return sum
// }
// console.log(a(222, 911))
// console.log(a(200, 900))
// console.log(a(999, 111))
//((((((((((((((83))))))))))))))
// Write a JavaScript program to find the longest string from a given array of strings.
// let a=(arr)=>{
//     let max=arr[0].length
//     arr.map(el=>max=Math.max(max,el.length))
//     let longest=arr.filter(el=>el.length==max)
//     return longest
// }
// console.log(a(["a", "aa", "aaa", "aaaaa", "aaaa"]));
//((((((((((((((84))))))))))))))
// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// let a=(arr)=>arr.charCodeAt()
// console.log(a('a'))
// console.log(a('b'))
// console.log(a('c'))
// console.log(a('d'))
// console.log(a('e'))
// console.log(a('f'))
// console.log(a('g'))
// console.log(a('h'))
// console.log(a('i'))
// console.log(a('j'))
// console.log(a('k'))
// console.log(a('l'))
// console.log(a('m'))
// console.log(a('n'))
// console.log(a('o'))
// console.log(a('p'))
// console.log(a('q'))
// console.log(a('r'))
// console.log(a('s'))
// console.log(a('t'))
// console.log(a('u'))
// console.log(a('v'))
// console.log(a('w'))
// console.log(a('x'))
// console.log(a('y'))
// console.log(a('z'))
// let a=(arr)=>arr.split().String.fromCharCode('a'.charCodeAt()).join('')
// console.log(a())
// console.log(String.fromCharCode(90));
// let a=(arr)=>arr.charCodeAt(1)
// console.log(a(', ,'));
// let a=(str)=>{
//     let char=str.toLowerCase().split('')
//     for (let index = 0; index < char.length; index++) {
//         let charFromB=char[index].charCodeAt()
//         // charFromB=(charFromB+1)%26 //if z a=>z =97=>122
//         char[index]!=='z'?char[index]=String.fromCharCode(charFromB+1):char[index]=String.fromCharCode(charFromB+1-26)
//     }
//     return char.join('')
// }
// console.log(a("abcdxyz"))
//((((((((((((((85))))))))))))))
// Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.
// let a=(arr)=>{
//     let arrN=[0,0]
//     for (let index = 0; index < arr.length; index++) {
//         index==0||index%2==0?arrN[0]+=arr[index]:arrN[1]+=arr[index]
//     }
//     return arrN
// }
// console.log(a([1, 3, 6, 2, 5, 10]))
//((((((((((((((86))))))))))))))
// Write a JavaScript program to find the types of a given angle.
// let a = (angle) =>
//   angle > 0 && angle < 90 //option angle -360
//     ? `acute`
//     : angle == 90
//     ? `right`
//     : angle == 180
//     ? `straight`
//     : (angle > 90 && angle < 180) ||
//       (angle > 180 && angle < 360 && angle !== 270)
//     ? `obtuse`
//     : "angle must be less than 360";
// console.log(a(47));
// console.log(a(90));
// console.log(a(145));
// console.log(a(180));
//((((((((((((((87))))))))))))))
// Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
// let a = (arr1, arr2) => {
//   for (let index = 0; index < arr1.length; index++) {
//     [arr2[index],arr1[index]] = [arr1[index],arr2[index]]
//     var result =
//       arr1.length == arr2.length
//         ? arr2[index]==arr1[index]
//           ? `The Same`
//           : `Different Arrays`
//         : `Different Length`;
//   }
//   return result
// };
// console.log(a([1,2,3],[1,2,4]));
// console.log(a([10, 20, 30], [30, 10, 20,30]));
// console.log(a([10, 20, 30, 40], [10, 30, 20, 40]))
// let d=(d1,d2)=>[d1,d2]==[d2,d1] // can not check by swapping swap and then check result
// console.log(d([1,2,3],[1,2,3]))
// console.log(d([1,2,3],[1,2,3,4]))
//((((((((((((((88))))))))))))))
// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.
// let a=(n1,n2,d)=>n1%d==0&&n2%d==0
// console.log(a(10, 25, 5))
// console.log(a(10, 20, 5))
// console.log(a(10, 20, 4))
//((((((((((((((89))))))))))))))
// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// let a=(n1,n2,calc)=>n1+n2==calc||n1-n2==calc||n1*n2==calc||n1/n2==calc
// console.log(a(10, 25, 35))
// console.log(a(10, 25, 250))
// console.log(a(30, 25, 5))
// console.log(a(100, 25, 4.0))
// console.log(a(100, 25, 25))
//((((((((((((((90))))))))))))))
// Write a JavaScript program to find the kth greatest element in a given array of integers.
// let a=(arr,k)=>{
//      for (let index = 0; index < arr.length; index++) {
//         arr[index]>0?arr.sort():arr.reverse()
        
//      }
//     return arr[k-1]
// }
// console.log(a([1,2,6,4,5],3))
// console.log(a([-10,-25,-47,-36,0],1))