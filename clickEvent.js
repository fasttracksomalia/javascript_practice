function changeToYellow() {
    // alert("Hello Salaam");
    document.body.style.backgroundColor = "yellow";
}

function changeToGreen() {
    // alert("Hello Salaam");
    document.body.style.backgroundColor = "green";
}

function showChosenCountry() {
    var selectElement = document.getElementById("countrySelect");
    var chosenCountry = selectElement.value;
    var chosenCountryText = document.getElementById("chosenCountryText");
    chosenCountryText.textContent = "You chose the country " + chosenCountry;
}