//Create a function that returns 5 more than the integer sent to it.
// Assume the user only enters integers.
// Create a different function that adds
// " is awesome" to any strings sent to it.
// Challenge: If the wrong data type is sent to one of the functions print "ERROR".

/*
two different functions are being asked for.
for the first function assume the user only uses numbers
second just adds is awesome
variables can be spell checked if you want correct spelling for your variables

 */


function five_more_then_sent(wholeNumber)
{
    if(!isNaN(parseInt(wholeNumber)))
        {
        return console.log(parseInt(wholeNumber) + 5);
        }
    else
        {
            return console.log("ERROR.");
        }

}

five_more_then_sent("100");

function this_string_is_awesome(userString)
{
    if(isNaN(userString)) {
        return console.log(userString + " is awesome.");
    }
    else
        {
            return console.log("ERROR.");
        }
}

this_string_is_awesome(3);
