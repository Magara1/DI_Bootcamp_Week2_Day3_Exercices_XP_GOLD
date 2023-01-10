/*****   Exercises XP Gold
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * Instructions
   
    Exercise 1 : Divisible By Three
    let numbers = [123, 8409, 100053, 333333333, 7]

   1 Loop through the array above and determine whether or not each number is divisible by three.
   2  Each time you loop console.log true or false.
 * ***/

   let numbers = [123, 8409, 100053, 333333333, 7]

   for (const data in numbers) {
    console.log(data % 3 == 0);
}
  


