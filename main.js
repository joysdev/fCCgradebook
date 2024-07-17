/*For Step 2, I will need a function that returns the corresponding letter grade, so it will need to check if the variable is both greater and less than the lower or higher grade respectively, except for the highest grade (only = 100) and the lowest grade (only less than) 

if variable === 100, then return A++
if variable < 100 but >= 90, then return A
if variable < 90 but >= 80, then return B
if variable < 80 but >= 70, then return C
if variable < 70 but >= 60, then return D
if variable < 60, then return F */


function getGrade(score) {
    /* if (score === 100) {
        console.log("A++");
    } */
    
    if (score < 100 && score >= 90) {
    console.log("A");
        }
        /*else 
        if (score >= 80 && score <= 90) {
    console.log("B");
        }
        else 
        if (score >= 70 && score <= 80) {
    console.log("C");
        }
        else 
        if (score >= 60 && score <= 70) {
    console.log("D");
        } */
        //else 
        if (score <= 60) {
    console.log("F");
        }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// Back to drawing-board 1

if (score === 100) {
    console.log("A++");
}

if (90 < score < 100) {
    console.log("A");
}
/* Still getting undefineds. I suspect I need to declare score but I have no idea exactly how or even how to ask the question... Getting frustrated enough to be tempted to look up the solution

tried putting all the grades in my function parentheses, nope. Separated by a semi-colon, nope. I suspect I need to define score, but all the ways I have tried are not doing it. */

/* Another try */


function getGrade(score) {
    if (score === 100) {
        return("A++");
    }
    else
    if (score < 100 && score >= 90) {
        return("A");       
}   else
    if (score >= 80 && score <= 90) {
        return("B");
        }
    else
    if (score >= 70 && score <= 80) {
        return("C");
        }
    else 
    if (score >= 60 && score <= 70) {
        return("D");
        }
    else
    if (score <= 60) {
        return("F");
        }

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
/* Still doesn't pass. I get the results for the three grades, but Undefineds in between, and my code does not pass the test */