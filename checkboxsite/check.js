"use strict"
// Defining global variables
let extraPerDay = 0;
const OUTPUTELEMENT = document.getElementById("output");

window.onload = function () {
    // Getting the elements by their Ids
    let govtChkBox = document.getElementById("govt");
    let tt = document.getElementById("tollTag");
    let g = document.getElementById("gps");
    let rs = document.getElementById("roadside");
    let w = document.getElementById("wifi");

    // Assign the "onclick" for the elements to respective functions
    govtChkBox.onclick = onGovtChkBoxClicked;
    g.onclick = boxClick1;
    tt.onclick = boxClick2;
    rs.onclick = boxClick3;
    w.onclick = boxClick4;
}

// Using the Boolean checked property
function boxClick1() {
    let gps = document.getElementById("gps").checked;
    if (gps == true) {
        extraPerDay += 4.95;
        extraPerDay.toFixed(2);
    }
    if (gps == false) {
        extraPerDay -= 4.95;
        extraPerDay.toFixed(2);
    }
    OUTPUTELEMENT.innerHTML = extraPerDay.toFixed(2);
}

// Shortcut for Checking for true
function boxClick2() {
    let tollTag = document.getElementById("tollTag").checked;
    if (tollTag) {
        extraPerDay += 3.95;
        extraPerDay.toFixed(2);
    }
    if (!(tollTag)) {
        extraPerDay -= 3.95;
        extraPerDay.toFixed(2);
    }
    OUTPUTELEMENT.innerHTML = extraPerDay.toFixed(2);
}

// Omit putting value in a variable
function boxClick3() {
    if (document.getElementById("roadside").checked) {
        extraPerDay += 2.95;
        extraPerDay.toFixed(2);
    } 
    if (!(document.getElementById("roadside").checked)) {
        extraPerDay -= 2.95;
        extraPerDay.toFixed(2);
    }
    OUTPUTELEMENT.innerHTML = extraPerDay.toFixed(2);
}

//wifi
function boxClick4() {
    if (document.getElementById("wifi").checked) {
        extraPerDay += 10;
        extraPerDay.toFixed(2);
    } 
    if (!(document.getElementById("wifi").checked)) {
        extraPerDay -= 10;
        extraPerDay.toFixed(2);
    }
    OUTPUTELEMENT.innerHTML = extraPerDay.toFixed(2);
}

// Using the onclick function with the govt box to check an additional checkbox (roadside assistance)
function onGovtChkBoxClicked() {
    let govt = document.getElementById("govt").checked;
    if (govt) {
        let roadsideChkBox = document.getElementById("roadside");
        if (!(roadsideChkBox.checked == true)) {
            roadsideChkBox.checked = true;
            extraPerDay += 2.95;
            extraPerDay.toFixed(2);
        }
    }
    if (!govt) {
        console.log(extraPerDay);
        let roadsideChkBox = document.getElementById("roadside");
        if (roadsideChkBox.checked == true) {
            extraPerDay -= 2.95;
            extraPerDay.toFixed(2);
            roadsideChkBox.checked = false;
        }
    }
    OUTPUTELEMENT.innerHTML = extraPerDay.toFixed(2);
}
