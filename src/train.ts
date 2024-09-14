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

// function getPositive(arr: number[]): string {
//     let positives = arr.filter(num => num > 0);
    
//     let positiveStrings = positives.map(num => num.toString());
    
//     let result = positiveStrings.join('');
    
//     return result;
//   }
  
//   console.log(getPositive([5, -6, 78, -8, 99])); 
//   console.log(getPositive([1, -4, 2])); 
  
  
//H2-TASK: 

//Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
//MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(input: string): string {
 
//   return input.split('').filter(char => /\d/.test(char)).join('');
// }

// console.log(getDigits("Zo22d11a")); 






/* Project Standarts:
-Logging Standarts
-Naming Standarts:

function, method, variable => CAMEL  == goHome
class - PASCAL                       == MemberServive
folder , file - Kebab                       == 
css - Snake                          == button_style


-- Error handling

*/

//Shunday function tuzing, u parametrdagi array ichida eng ko'p
//takrorlangan raqamni topib qaytarsin.

//MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

//Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(arr: number[]): number | null {
//     let maxCount = 0;
//     let majorityElem: number | null = null;

//     arr.forEach(num => {
//         const count = arr.filter(x => x === num).length;
//         if (count > maxCount) {
//             maxCount = count;
//             majorityElem = num;
//         }
//     });

//     return majorityElem;
// }
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));


/* 
Traditional FD:  BSSR => EJS
Modern FD => REACT
*/