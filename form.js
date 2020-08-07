function validate() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("errorMessage");
    var text;

    errorMessage.style.padding = "10px";
    if (name.length < 3) {
        text = "Please Enter Valid Name";
        errorMessage.innerHTML = text;
        return false;
    }
    if (phone.length != 9 || isNaN(phone)) {
        text = "Please Enter Valid Number";
        errorMessage.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        errorMessage.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email address";
        errorMessage.innerHTML = text;
        return false;
    }
    if (message.length <= 50) {
        text = "Please Enter At least 50 characters in Your message Please!";
        errorMessage.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}