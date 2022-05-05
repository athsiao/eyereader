/* Code heavily referenced from this w3schools article:
 * https://www.w3schools.com/js/js_cookies.asp
 * on implementing cookies in JavaScript
 */

const { addListener } = require("process");

// Function stores the name of the visitor in a cookie variable
// Params are name (cname), value (cvalue), days until expiry (exdays)
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (ex*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function returning the value of a specified cookie
function getCookie(cname) {

    // Create a variable with the text to search for (the name)
    let name = cname + "=";

    // Decode the cookie string
    let decodedCookie = decodeURIComponent(document.cookie);
    
    // Split on semi-colons to an array called ca
    let ca = decodedCookie.split(';');

    // Look through the array and read each value
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        // If the cookie is found, return the value
        if (c.indexOf(name) == 0) {

            // Returns the name of the cookie & its length
            return c.substring(name.length, c.length);
        }
    }

    // Returns "" if the cookie is not found
    return "";
}

// Function to check if a cookie is set
function checkCookie() {

    // Check if there is a saved username
    let username = getCookie("username");

    // If there is a name, give a welcome back message
    if (username != "") {
        alert("Welcome back, " + username);
    }
    // If there is no saved name, ask them to enter one
    else {
        username = prompt("What's your name?");
        // If the entered username is valid
        if (username != "" && username != null) {
            // Set a cookie for their name
            setCookie("username", username, 365);
        } else {
            // Gives an error if the name is not valid
            alert("Error: that is not a valid name");
        }
    }

}