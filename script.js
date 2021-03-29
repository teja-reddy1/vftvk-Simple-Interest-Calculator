function compute() { //main compute function which computes the simple interest and displays the result info
    principalBox = document.getElementById('principal'); //principal box object is added inorder to bring back the cursor to the amount text area after alert
    var principal = principalBox.value; //variable types principal,rate,years are added and values and assigned accordingly
    var years = document.getElementById('years').value;
    var rate = document.getElementById('rate').value;
    var a = new Date(); //a object is created to get the present date from the local machine 
    presentYear = a.getFullYear(); //getFullYear function only fetches the present year and value is assigned to the global variable presentYear
    if (principal <= 0) { //validation condition of postive numbers entered
        alert("Enter a postive number ");
        principalBox.focus(); //bringing back the focus to the principal text field
        principalBox.value = ""; //reseting the text area for the fresh entry
    } else {
        var interest = (principal * years * rate) / 100; //interest is formulated and stored 
        years = parseInt(years); //years is a string by default so converting into integer using parseInt function
        years += presentYear; //the no. of years is changed into the future year using the present year value
        document.getElementById("result").innerHTML =
            "If you deposit <b class='color'>" +
            principal +
            "</b>, <br> at an interest rate of <b class='color'>" +
            rate +
            "%</b>. <br>You will receive an amount of <b class='color'>" +
            interest +
            "</b>, <br>in the year <b class='color'> " +
            years + "</b>.";
        //final output is displayed to the id of result and class color is given to highlight the important text to the required color
    }
}

function sliderChange(val) {
    document.getElementById("sliderVal").innerHTML = val + "%";
    //this is the function which displays the slider value on the webpage 
}     
