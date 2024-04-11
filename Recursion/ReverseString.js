
//=========================================================== normal case =================================================================

function reverse(string) {
    if (string.length === 1) {
        return string;
    } else {
        return string.split("").reverse().join("");
    }
}
console.log(reverse("Sameen"));

//======================================================= Recursion method ===============================================================

function recursionReverse(string) {
    if (string.length === 1) {
        return string;
    } else {
        return recursionReverse(string.substring(1)) + string[0]
    }
}
console.log(recursionReverse("Sameen"));