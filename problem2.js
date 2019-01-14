// Ask the user to enter a 4 digit code.
// Ask the user to enter the password again.
// If the passwords are the same print "Password is set."
// If the passwords are different print "ERROR, Passwords are different."

/*
you can build the variable for the code inside or outside.
depends on requirements
reread your instructions
isNAN can be used for number related passwords
if you make a function REMEMBER TO CALL IT
 you need to set var inside do while loops so something can change.
 order of operations matters.
 variables defined in a function WILL NOT BE SAVED OUTSIDE OF THE FUNCTION
 */


function setYourPasscode()
{


    do{
        var passCode_entry = parseInt(prompt("Enter a four digit passcode."));

        var passCode_comparison = parseInt(prompt("Please enter the passcode again."));

        if(passCode_entry === passCode_comparison  )
        {
            console.log("Password is set")

        }
        else if (isNaN(passCode_entry) || isNAN(passCode_comparison))
        {
            console.log("Please enter four digits ")
        }
        else if( passCode_entry !== passCode_comparison)
        {
            console.log("ERROR. Passwords are different.");
        }



    }while(passCode_entry !== passCode_comparison)

}

setYourPasscode()