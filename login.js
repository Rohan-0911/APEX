function login() {

}

inv_key = "rohan09punekar@gmail.com_inv";

display_inv();

function display_inv () {

    let inv_list = JSON.parse(localStorage.getItem(inv_key));

    let len = Object.keys(inv_list).length;
    let items = Object.keys(inv_list);
    let price = Object.values(inv_list);

    let no = document.getElementById("sr-no");
    let item_name = document.getElementById("item_name");
    let item_price = document.getElementById("item_price");

    no.innerHTML = "";
    item_name.innerHTML = "";
    item_price.innerHTML = "";

    for (let i=0; i<len; i++) {
        no_dummy = document.createElement("div");
        no_dummy.textContent = i+1;
        no.append(no_dummy);

        item_dummy = document.createElement("div");
        item_dummy.textContent = items[i];
        item_name.append(item_dummy);

        price_dummy = document.createElement("div");
        price_dummy.textContent = price[i];
        item_price.append(price_dummy);
    }
}

function edit_price(event){
    event.preventDefault();

    let inv_list = JSON.parse(localStorage.getItem(inv_key));

    let len = Object.keys(inv_list).length;
    let items = Object.keys(inv_list);
    let price = Object.values(inv_list);

    let no = document.getElementById("get-no").value;
    let new_price = document.getElementById("new-price").value;
    inv_list[items[no-1]] = new_price;
    let jsonstring = JSON.stringify(inv_list);
    localStorage.setItem(inv_key, jsonstring);
    display_inv();
}

function toggle_edit_price(event) {
    event.preventDefault();

    let panel = document.getElementById("edit-bg");

    if (panel.style.display === "block") {
        panel.style.display = "none";
    }
    else {
        panel.style.display = "block";
    }
}

function add_item(event){
    event.preventDefault();

    let inv_list = JSON.parse(localStorage.getItem(inv_key));

    let len = Object.keys(inv_list).length;
    let items = Object.keys(inv_list);
    let price = Object.values(inv_list);

    let new_item = document.getElementById("get-item").value;
    let add_price = document.getElementById("add-price").value;
    alert("hi");
    inv_list[new_item] = add_price;
    alert("byr");
    let jsonstring = JSON.stringify(inv_list);
    localStorage.setItem(inv_key, jsonstring);
    display_inv();
}

function toggle_add_item(event) {
    event.preventDefault();

    let panel = document.getElementById("add-bg");
    

    if (panel.style.display === "block") {
        panel.style.display = "none";
    }
    else {
        panel.style.display = "block";
    }
}

function del_item(event){
    event.preventDefault();

    let inv_list = JSON.parse(localStorage.getItem(inv_key));

    let len = Object.keys(inv_list).length;
    let items = Object.keys(inv_list);
    let price = Object.values(inv_list);

    let no = document.getElementById("get-del-no").value;
    const keyToRemove = items[no-1];
    delete inv_list[keyToRemove]; 
    let jsonstring = JSON.stringify(inv_list);
    localStorage.setItem(inv_key, jsonstring);
    display_inv();
}

function toggle_del_item(event) {
    event.preventDefault();

    let panel = document.getElementById("del-bg");

    if (panel.style.display === "block") {
        panel.style.display = "none";
    }
    else {
        panel.style.display = "block";
    }
}