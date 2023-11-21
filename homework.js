

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

function matchName(names, string){
    names.forEach(name =>{
        if (string.includes(name)){
            console.log("Matched " + name);
        
        } else {
            console.log("That is a damn cat");
        }
    }); 
    
   
}
matchName(dogNames, dogString);


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
let movements = ["Kamehameha", "Final Flash", "Finish Buster", "Destructo Disc", "Masenko", "Special Beam Cannon"];


function removeEven(array, movements){
    for (let i = array.length-1; i >= 0; i--){
        if (i % 2 === 0) {
            array.splice(i, 1, movements[i]);
        }
    }
    console.log(array);
}
removeEven(arr, movements);


// //============CODE WARS Exercise #3 ============//

// // Description
// // We need a function that can transform a string into a number. What ways of achieving this do you 
// //know? Note: Don't worry, all inputs will be strings, and every string is a perfectly valid 
// //representation of an integral number.
var stringToNumber = function(str){
    return parseInt(str);
  }

// //============CODE WARS Exercise #4 ============//

  //We need a function that can transform a number (integer) into a string

  function numberToString(num) {
    return num.toString();
  }



