"use strict";
function calcCtoF() {
    let val_tempC = +document.getElementById('tempC').value;
    let val_tempF = val_tempC * 9 / 5 + 32;
    document.getElementById('tempF').value = val_tempF.toFixed(1);
}
function calcCtoC() {
    let val_tempF = +document.getElementById('tempF').value;
    let val_tempC = (val_tempF - 32) * 5 / 9;
    document.getElementById('tempC').value = val_tempC.toFixed(1);
}
