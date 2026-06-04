function login() {

}

inv_key = "rohan09punekar@gmail.com_inv";
display_inv(inv_key);

function display_inv (inv_key) {
    let inv_list = JSON.parse(localStorage.getItem(inv_key));

    let len = Object.keys(inv_list).length;
    let items = Object.keys(inv_list);
    let price =Object.values(inv_list);

    let no = document.getElementById("sr-no");
    let item_name = document.getElementById("item_name");
    let item_price = document.getElementById("item_price");

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