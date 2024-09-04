// TASK G 

//Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
//MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
// function getHighestIndex(arr: number[]): number {
//     if (arr.length === 0) return -1; // Return -1 if array is empty
    
//     let highestIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[highestIndex]) {
//             highestIndex = i;
//         }
//     }
//     return highestIndex;
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));


//H-TASK: 

//shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
//MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr: number[]): string {
    let positives = arr.filter(num => num > 0);
    
    let positiveStrings = positives.map(num => num.toString());
    
    let result = positiveStrings.join('');
    
    return result;
  }
  
  console.log(getPositive([5, -6, 78, -8, 99])); 
  console.log(getPositive([1, -4, 2])); 
  
  
