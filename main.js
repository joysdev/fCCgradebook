/*For Step 2, I will need a function that returns the corresponding letter grade, so it will need to check if the variable is both greater and less than the lower or higher grade respectively, except for the highest grade (only = 100) and the lowest grade (only less than) 

if variable === 100, then return A++
if variable < 100 but >= 90, then return A
if variable < 90 but >= 80, then return B
if variable < 80 but >= 70, then return C
if variable < 70 but >= 60, then return D
if variable < 60, then return F */


function getGrade(score) {
    if (score === 100) {
        console.log('A++');
    }
    if (90 <= score < 100) {
            console.log('A');
        }
        else 
        if (90 <= score < 100) {
    console.log('A');
        }
        else 
        if (80 <= score < 90) {
    console.log('B');
        }
        else 
        if (70 <= score < 80) {
    console.log('C');
        }
        else 
        if (60 <= score < 90) {
    console.log('D');
        }
        else 
        if (score < 60) {
    console.log('F');
        }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));