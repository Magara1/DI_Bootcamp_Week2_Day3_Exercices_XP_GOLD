/*****   Exercises XP Gold
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * Instructions
   
 * ***/



let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

/*
Given the object above where the key is the student’s name and the value is the country they are from.
1- Prompt the student for their name.
2- If the name is in the object, console.log the name of the student and the country they come from.
For example: "Hi! I'm [name], and I'm from [country]."
Hint: You don’t need to use a for loop, just look up the statement if ... in
3- If the name is not in the object, console.log: "Hi! I'm a guest."
*/

//1
let names = prompt("What is your name ?");

if (names in guestList) {
    console.log("HI! I'm " + names + ", and I'm from " + guestList[names]);
} else {
    console.log("Hi! I'm a guest.");
}