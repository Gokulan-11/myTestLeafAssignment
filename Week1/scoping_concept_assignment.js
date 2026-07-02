let genderType = "female";    //declared globally

function printGender() {
    let color = "brown";       //assigned the color name as function scope

    if (genderType === "female") {
        var age =30;                    //assigned as var 
        let color = "pink";             //reassigned with the same variable name as block scope variable
        console.log(`The color getting printed inside the block is: ${color}`);                //print the color pink because the color assigned inside the block scope is pink
    }

    console.log(`Age is ${age}`);               //used var so it got data leakage, if let const used then it will throw error
    console.log(`Color getting printed outside the if block is: ${color}`)          //block scope ended, from the function scope the value got will be brown
}

printGender();
console.log(`Gender Type is: ${genderType}`);           //global calling of the variable


