// Create a function that is sent two integers,
// then print from the first integer to the second integer.
// Assume the first integer is less than the second integer.

/*
intergers are whole numbers
define a function that takes two numbers
if and else if can be used to give parameters to meet.
remember that parameters can be definable in a loop as well
 */


function printNumbersInOrderGiven(firstNumberGiven,secondNumberGiven)
{
    if(firstNumberGiven<secondNumberGiven)
    {
        for(;firstNumberGiven <= secondNumberGiven; firstNumberGiven++)
        {
            console.log(firstNumberGiven);
        }
    }
    else if(secondNumberGiven < firstNumberGiven)
    {
        for(;firstNumberGiven >= secondNumberGiven; firstNumberGiven--)
        {
            console.log(firstNumberGiven);
        }
    }

}

printNumbersInOrderGiven(2,30);