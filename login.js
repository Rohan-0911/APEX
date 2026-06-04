function login(event) {
    event.preventDefault();

    let entered_email = document.getElementById("login-email").value.trim();
    let entered_password = document.getElementById("login-password").value;


    let stored_user_data = localStorage.getItem(entered_email);

   if (stored_user_data === null) {
        alert("Account not found. Please register a new business.");
        return; 
    }

    let user = JSON.parse(stored_user_data);

    if (entered_password !== user.Password) {
        alert("Incorrect password. Please try again.");
        return; 
    }

    localStorage.setItem("currentUser", entered_email);

    window.location.href = "dashboard.html";
}