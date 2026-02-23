function showMsg() {
    alert("Welcome to my website!");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }
    alert("Registration Successful");
    return true;
}