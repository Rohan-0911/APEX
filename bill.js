let user = localStorage.getItem("currentUser");

if (!user) {
    window.location.href = "login.html";
} else {
    let user_data = JSON.parse(localStorage.getItem(user));

    let b_n = document.getElementById("business-name");
    let b_t = document.getElementById("business-type");
    let d = document.getElementById("date");
    let a_n = document.getElementById("admin-name"); 
    
    let c_n = document.getElementById("custumer-name"); 
    let c_p = document.getElementById("custumer-phone");

    const businessCategories = {
        "1": "Medical Store", "2": "Grocery Store", "3": "Super Market",
        "4": "Stationary", "5": "Sports Shops", "6": "Clothes"
    };

    b_n.innerText = user_data.Company_name;
    a_n.innerText = "Admin: " + user_data.Admin;
    b_t.innerText = businessCategories[user_data.Business]; 

    d.innerText = new Date().toLocaleDateString(); 

    let cust = localStorage.getItem("currentCust") || "Walk-in Customer";
    let cust_phone = localStorage.getItem("cust_no") || "N/A";

    c_n.innerText = "Customer Name: " + cust;
    c_p.innerText = "Phone: " + cust_phone;

    let cust_key = cust + "_inv";

    let raw_cart_data = localStorage.getItem(cust_key);
    let inv_list = raw_cart_data ? JSON.parse(raw_cart_data) : {}; 

    let len = Object.keys(inv_list).length;
    let items = Object.keys(inv_list);
    let price = Object.values(inv_list);

    let no = document.getElementById("sr-no");
    let item_name = document.getElementById("item_name");
    let item_price = document.getElementById("item_price");

    let amount = 0;

    for (let i = 0; i < len; i++) {
        no_dummy = document.createElement("div");
        no_dummy.textContent = i + 1;
        no.append(no_dummy);

        item_dummy = document.createElement("div");
        item_dummy.textContent = items[i];
        item_name.append(item_dummy);

        price_dummy = document.createElement("div");
        price_dummy.textContent = price[i];
        amount = amount + Number(price[i]);
        item_price.append(price_dummy);
    }

    let amt = document.getElementById("amount");
    amt.innerText = "Subtotal: ₹" + amount.toFixed(2);

    const GSTCategories = {
        "1": 5, "2": 0, "3": 5, "4": 12, "5": 18, "6": 5
    };

    let gst_rate = GSTCategories[user_data.Business];
    
    let GST = document.getElementById("gst");
    GST.innerText = "GST: " + gst_rate + "%";

    let final_total = amount + (amount * gst_rate / 100);
    let tot = document.getElementById("total");
    tot.innerText = "Total: ₹" + final_total.toFixed(2);
}