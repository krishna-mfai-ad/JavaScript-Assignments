function output() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var outputdiv = document.getElementById("outputdiv");
    var userbdr = document.getElementById("username");
    var passbdr = document.getElementById("password");


    if (username.length < 4 && password.length < 6 || password.length > 12)
     {
        outputdiv.textContent = "Incorrect Username & Password. Try Again!"
        outputdiv.style.color = "red"
        userbdr.style="border:solid red; color:white; background-color: #e78585;"
        passbdr.style="border:solid red; color:white; background-color: #e78585;"

        }
     else if (username.length < 4) {
        outputdiv.textContent = "Incorrect Username. Try Again!"
        outputdiv.style.color = "red"
        username.style.border="red"
        username.style.background="red"

    }
    else if (password.length < 6 || password.length > 12) {
        outputdiv.style.color = "red"
        outputdiv.textContent = "Incorrect Password. Try Again!"
    }
    else {
        outputdiv.textContent = " Login Success!";
        outputdiv.style.color = "Green"
        // + "\n" + "username" + username + "\n" +"Password" +password 
        
    }
}


