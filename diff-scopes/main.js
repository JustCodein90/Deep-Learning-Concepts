/*
Scope Exercises
Some software developers were contracted to build some code, but there weren't quite 
clear yet on how scope works. Your job is to fix their code to stop all the errors from
 being thrown.
 */

// C is for Cookie

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

for (let x = 1; /*y*/ x  < cookies.length; x++) {      // y was being called in loop cause x to loop forever
    const currentCookie = cookies[/*y*/ x]             // only one cookie being called with y equal to 1 in array
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
} 
  

// Conjunction Function

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord =`${firstWord} ${secondWord}`
    console.log(conjoinedWord) // logs function within it's scope
}

conjunction("Master", "Card")
// console.log(conjoinedWord) Cannot acces conjoinedWord Outside the function block


// Mod Squad 

{
    const modSquad = {
        members : ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series : {
            start : "1968",
            end : "1973"
        } // deletted quotes on members, series, start, end
    }

    /*const*/ let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

    modSquad.members.forEach(member => {
        /*const*/ HTMLRepresentation += `<div>${member}</div>`;
    })
    console.log(HTMLRepresentation);
}

// console.log(HTMLRepresentation) Is not difined outside the function block


/*
Simon Says

There are two separate scoping issues in this code. Remember, for and if are their 
own block scopes and if something is declared with let or const then that variable 
only exists in that scope.
*/

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {
   
    if (location[0] && location[1] > 2) { // Added location[1] to if to check both values
        invalidLocation = true;
        
        if (invalidLocation) {
            console.log(`${location} This location is invaild`); // Moved within scope of first if statement
        }
    }

   /* if (invalidLocation) {
        console.log("This location is invalid") Out of scope for first if 
    }
   */
}
