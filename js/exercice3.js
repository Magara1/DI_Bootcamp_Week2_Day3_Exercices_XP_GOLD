/*****   Exercises XP Gold
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * Instructions
   
1. Console.log the sum of all the numbers in the age array.
2. Console.log the highest age in the array.
*/

let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
let highest = age[0];

for (let i = 0; i < age.length; i++) {
    sum += age[i];
    if (age[i] > highest) highest = age[i];
}

console.log("The sum of all the numers in the age is " + sum);
console.log("The highest age is " + highest);