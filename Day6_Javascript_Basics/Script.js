function showAlert() {
    alert("Button clicked!");
}

function changeText() {
    document.getElementById("text").innerHTML = "Text has been changed!";
}
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields must be filled out");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function add() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let sum = n1 + n2;

    document.getElementById("result").innerHTML = "Result: " + sum;
}
