function isValid() {
    var isAllDataValid = true;
    var milesBox = document.getElementById("miles");
    var milesDriven = milesBox.value;
    var gallonsBox = document.getElementById("gallons");
    var gallonsUsed = gallonsBox.value;
    if (milesDriven == "" || isNaN(parseFloat(milesDriven))) {
        isAllDataValid = false;
        milesBox.nextElementSibling.innerHTML = "Miles Driven is required and must be a number";
    }
    if (gallonsUsed == "" || isNaN(parseFloat(gallonsUsed))) {
        isAllDataValid = false;
        gallonsBox.nextElementSibling.innerHTML = "Gallons Used is required and must be a number";
    }
    return isAllDataValid;
}
function main() {
    if (isValid()) {
        var miles = document.getElementById("miles").value;
        var gallons = document.getElementById("gallons").value;
        var mpg = calculateMPG(parseFloat(miles), parseFloat(gallons));
        displayResults(mpg);
    }
}
function displayResults(milesPerGallon) {
    var mpgBox = document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}
function calculateMPG(milesDrive, gallonsUsed) {
    var mpg = milesDrive / gallonsUsed;
    return mpg;
}
function clear() {
    var milesBox = document.getElementById("miles");
    var gallonsBox = document.getElementById("gallons");
    var mpgBox = document.getElementById("mpg");
    milesBox.value = "";
    gallonsBox.value = "";
    mpgBox.value = "";
}
function milesDouble() {
    var milesBox = document.getElementById("miles");
    milesBox.value = "";
}
function gallonDouble() {
    var gallonsBox = document.getElementById("gallons");
    gallonsBox.value = "";
}
window.onload = function () {
    var calcBtn = document.getElementById("calculate");
    var clearBtn = document.getElementById("clear");
    var doubleClkMiles = document.getElementById("miles");
    var doubleClkGallons = document.getElementById("gallons");
    calcBtn.onclick = main;
    clearBtn.onclick = clear;
    doubleClkMiles.ondblclick = milesDouble;
    doubleClkGallons.ondblclick = gallonDouble;
};
