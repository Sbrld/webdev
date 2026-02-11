let login = prompt("Please enter your username");

if(login == "Admin") {
    let password = prompt("Enter your password here");
    if(password === "TheMaster") {
        alert("Welcome !");
    }
    else if(password === '' || password === null) {
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if(login === '' || login === null) {
    alert("Canceled");
}
else {
    alert("I don't know you");
}