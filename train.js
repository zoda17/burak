// TASK G 

//Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
//MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

function getHighestIndex(arr) {
    if (arr.length === 0) {
        return -1;  
    }

    let sorted = [...arr].sort((a, b) => b - a);  
    let max = sorted[0];  
    return arr.indexOf(max);  
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); 
console.log(getHighestIndex([1, 2, 4, 66, 14, 15]));
