function compute() {
    var principalBox = document.getElementById('p');
    var p = principalBox.value;
    var t = document.getElementById('t').value;
    var r = document.getElementById('r').value;
    var a = new Date();
    date = a.getFullYear();
    if (p <= 0) {
        alert("Please enter the valid Amount!!");
        principalBox.focus();
        principalBox.value = "";
    } else {
        var x = (p * t * r) / 100;
        var year = parseInt(t);
        var tf = date + year;
        document.getElementById("result").innerHTML =
            "If you deposit <b class='color'>" +
            p +
            "</b>, <br> at an interest rate of <b class='color'>" +
            r +
            "%</b>. <br>You will receive an amount of <b class='color'>" +
            x +
            "</b>, <br>in the year <b class='color'> " +
            tf + "</b>.";
    }
}

function sliderChange(val) {
    document.getElementById("sliderVal").innerHTML = val + "%";
}
