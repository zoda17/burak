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

//TASK J:

/* shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda
*/


// function findLongestWord(s: string): string {
//     const words = s.split(/\s+/);
//     const longestWordLength = Math.max(...words.map(word => word.length));
//     return words.find(word => word.length === longestWordLength) || "";
// }


// const result = findLongestWord("I came from Uzbekistan!");
// console.log(result); 

//TASK K:

/** Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1

Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
bo'lganligi uchun '1'ni qaytarmoqda */

// function countVowels(str: string) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
  
//     let lowerCaseStr = str.toLowerCase();
//     let vowelCount = 0;
  
//     for (let char of lowerCaseStr) {
//       if (vowels.includes(char)) {
//         vowelCount++;
//       }
//     }
  
//     return vowelCount;
//   }
  
//   console.log(countVowels("striiiiing"));

// function countVowels(str: string) {
// return str.match(/[aeiou]/ig)?.length
// } 
//   console.log(countVowels('striooong'));
  




/**  Cookies
 request join
 self destroy
 */

 /**
  Validation:

  FrontEnd V
  Pipe V
  Backend V
  Database V
  */


 /**  L-TASK So'zlarni ketma - ketligini buzmasdan har bir so'zni
alohida teskarisiga o'girib beradigan fucntion tuzing.
Funtion yagona string qabul qilsin

MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda */

// function reverseSentence(str: string) {
//   const splittedStr = str.split(' ')
//   let reversedStr = []

//   for(const word of splittedStr){
//     reversedStr.push(word.split('').reverse().join(""))
//   }

//   return reversedStr.join(' ')
// } 

// console.log(reverseSentence('we like Coding!'));


// TASK M

// function getSquareNumber(arr: number[]){
//   let newArr = [];

//   for(let i = 0; i < arr.length; i++) {
//    newArr.push({number: arr[i], square: arr[i]*arr[i]})
//   }

//   return newArr
// }

// console.log(getSquareNumber([15,27,39]));

/**
 TASK N:

Parametr sifatida yagona string qabul qiladigan function tuzing.
Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
'true' yokida 'false' qaytarsin.

MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

*Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
bir xil ma'noni beradigan so'zga aytiladi
 */

// function palindromCheck(word: string) {
//     let backward = ''
//      let forward = word.toLowerCase()
//      for(let i = forward.length-1; i >= 0; i--){
//        backward += forward[i]
//      }
  
//     return backward === forward
//    }
//    console.log(palindromCheck('RACECAR'));


/**
 TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.
 */
  
// function calculateSumOfNumbers(arr: any[]) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length; i++){
//    if(typeof arr[i] === 'number') sum += arr[i]
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([456, "456", {number: 456}, true, 378]));

/**
 TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
 */

 /**function objectToArray (obj:Object) {

    return Object.entries(obj);
 }

 console.log(objectToArray( {a: 97, b: 98}));*/

//TASK Q:

/**Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.*/

//   function hasProperty(obj:any, str:string) {
//     let has = false
//     for (let key in obj) {
//         if(key === str) has = true
//         else has = false
//     }
//     return has
// }
// console.log('MIT TASK Q-TASK:');
// console.log(hasProperty({name: "BMW", model: "M3"}, "moddel"));

// R-TASK

function calculate(str:string) {
    let plus = str.split('+');
    
    let sum = 0;
    for (let i of plus) {
        sum += parseInt(i);
    }
    
    return sum;
}
console.log(calculate("1+3"));