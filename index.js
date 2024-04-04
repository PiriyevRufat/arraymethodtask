// let m =parseInt(prompt("Verdiyiviz ededi daxil edin:"));
// let factorial=1

// for (let i = 1;i<=m; i++) {
//     factorial*=i
// }
// alert(`Verdiyiviz eded ${m} faktoriali ${factorial}`);

//task 1

// let arr=[2,4,6,7,10,12,58,9]
// let enKicik = 0;
// let enBoyuk = 0;
// let kicik = arr[0];
// let boyuk = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < kicik) {
//         kicik = arr[i];
//         enKicik = i;
//     }
//     if (arr[i] > boyuk) {
//         boyuk = arr[i];
//         enBoyuk = i;
//     }
// }
// let temp = arr[enKicik];
// arr[enKicik] = arr[enBoyuk];
// arr[enBoyuk] = temp;

// console.log(arr)

//task2

// let arr=[2,4,6,7,10,12,58,9]
// let largestOdd=arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2!==0 && arr[i]>largestOdd) {
//        largestOdd=arr[i]
//     }
// }
// console.log(largestOdd);

//task3

// let arr=[2,4,6,7,10,12,58,9]
// let kicik = arr[0];
// let boyuk = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < kicik){
//          kicik = arr[i];
//             }
//    else if (arr[i] > boyuk){
//          boyuk = arr[i];  
//             }
// }
// orta=(boyuk+kicik)/2
// console.log(orta);

// task4


// let arr=[2,4,6,7,10,12,58,9]
// let sum=0

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             const temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//   }
// }
// arr.shift();
// arr.pop();

// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]
// }

// console.log(sum);

// task5


