function formValidate() {
    var banner = document.getElementById("banner");
    var current;
    var allInputs = document.getElementById("regForm");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    var message = document.getElementById("textarea").value;
    var results = firstName + "\n" + lastName + "<br><br>" + gender + "<br><br>" + message;
    for (var i = 0; i < allInputs.length; i++) {
        if (allInputs[i].name != "submit")
        {
            if (allInputs[i].value === "") {
                if (current) {
                    current.style.border = "1px solid #000";
                    return false;
                }
                allInputs[i].className = "error";
                current = allInputs[i];
                allInputs[i].onclick = function () {
                    this.style.border = "1px solid #000";
                }
                return true;
            }
         }
        
    }
    banner.innerText = document.getElementById("hide").style.visibility = "visible";
    banner.innerText = "Thank you for contacting us, " + firstName;
    document.getElementById("getResults").innerHTML = results;
    document.getElementById("regForm").reset();
  
}
