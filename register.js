function register_company(event) {
    event.preventDefault();

    let company_name = document.getElementById("company_name").value.trim();
    let business_type = document.getElementById("business_type").value;
    let admin_name = document.getElementById("admin-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value; 
    let c_password= document.getElementById("confirm-password").value;

    if (!company_name || !admin_name || !email) {
        alert("Enter all required fields")
    }
    else if (password.length < 8) {
        alert("Password must contain 8 or more characters");
        return;
    }
    else if (password !== c_password) {
        alert("Password does not match with Confirm Password");
        return;
    }

    const user = {
        Company_name: company_name,
        Business: business_type,
        Admin: admin_name,
        Email: email,
        Password: password
    }
    
    const jsonString = JSON.stringify(user, null, 2);

    localStorage.setItem(company_name, jsonString);

    
}