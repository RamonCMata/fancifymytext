//Ramon Mata
//CSC 196W Week 4 Assignment
//This website will display a text box with different buttons that will change the textbox when pressed.

//getBigger function will increase the the font size of the textbox to 24pt
function getBigger() {
    document.getElementById("Text").style.fontSize = "24pt";
}

//getFancy function will change the font to bold, background color to blue, underline the text, and display an alert.
function getFancy() {
    document.getElementById("Text").style.fontWeight = "bold";
    document.getElementById("Text").style.backgroundColor = "Blue";
    document.getElementById("Text").style.color = "White";
    document.getElementById("Text").style.textDecoration = "underline";
    alert("Styles have been added");
}

//getBoring function will change the font, background color, and text to its original form and display an alert.
function getBoring() {
    document.getElementById("Text").style.fontWeight = "normal";
    document.getElementById("Text").style.backgroundColor = "White";
    document.getElementById("Text").style.color = "Black";
    document.getElementById("Text").style.textDecoration = "none";
    alert("Styles have been removed");
}

//getMoo function will change all text in the textbox to uppercase and append a -Moo to the end of the sentence
function getMoo() {
    alert("Moo has been added");
    document.getElementById("Text").style.textTransform = "uppercase";
    var str = document.getElementById("Text").value;
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("Text").value = str;
}