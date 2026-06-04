const default_medical = {
    "Paracetamol": 5,
    "Bandage": 10,
    "Syringe": 20,
    "Thermometer": 2,
    "Antiseptic Liquid": 3,
    "Cotton Roll": 8,
    "Cough Syrup": 4,
    "Pain Relief Spray": 5,
    "Antibiotic Ointment": 6,
    "Vitamin C Tablets": 15,
    "Face Mask": 50,
    "Surgical Gloves": 100,
    "Blood Pressure Monitor": 1,
    "Inhaler": 2,
    "Eye Drops": 4,
    "Antacid": 10,
    "Adhesive Tape": 7,
    "Heating Pad": 1,
    "ORS Packets": 12,
    "Hand Sanitizer": 5,
}

const default_grocery = {
    "Rice (kg)": 10,
    "Wheat Flour (kg)": 5,
    "Sugar (kg)": 2,
    "Salt (kg)": 1,
    "Lentils (kg)": 3,
    "Cooking Oil (L)": 2,
    "Tea Powder (g)": 500,
    "Coffee (g)": 200,
    "Spices Pack": 4,
    "Onions (kg)": 3,
    "Potatoes (kg)": 5,
    "Tomatoes (kg)": 2,
    "Garlic (g)": 250,
    "Ginger (g)": 200,
    "Milk (L)": 2,
    "Eggs (dozen)": 1,
    "Butter (g)": 500,
    "Cheese (Pack)": 2,
    "Yogurt (Cup)": 4,
    "Biscuits (Pack)": 5,
}

const default_supermarket = {
    "Shampoo (Bottle)": 2,
    "Body Wash (Bottle)": 1,
    "Toothpaste (Tube)": 3,
    "Toothbrush": 4,
    "Laundry Detergent (kg)": 3,
    "Dishwashing Liquid (Bottle)": 2,
    "Toilet Paper (Roll)": 12,
    "Paper Towels (Roll)": 4,
    "Trash Bags (Pack)": 2,
    "Deodorant": 2,
    "Bread (Loaf)": 1,
    "Peanut Butter (Jar)": 1,
    "Jam (Jar)": 1,
    "Cereal (Box)": 2,
    "Pasta (Pack)": 3,
    "Tomato Sauce (Bottle)": 1,
    "Chocolate Bar": 5,
    "Chips (Pack)": 4,
    "Soda (Bottle)": 2,
    "Frozen Pizza": 2,
}

const default_stationary = {
    "Ballpoint Pen": 20,
    "Pencil": 15,
    "Eraser": 10,
    "Sharpener": 5,
    "Notebook": 8,
    "A4 Paper (Ream)": 2,
    "Highlighter": 4,
    "Stapler": 1,
    "Stapler Pins (Box)": 2,
    "Paper Clips (Box)": 1,
    "Sticky Notes (Pad)": 5,
    "Glue Stick": 3,
    "Scissors": 1,
    "Ruler": 2,
    "Whiteboard Marker": 6,
    "Correction Fluid": 2,
    "File Folder": 10,
    "Calculator": 1,
    "Drawing Pad": 2,
    "Watercolor Paint Set": 1,
}

const default_sports = {
    "Football": 2,
    "Basketball": 1,
    "Tennis Ball": 6,
    "Cricket Bat": 1,
    "Cricket Ball": 3,
    "Badminton Racket": 2,
    "Shuttlecock (Tube)": 1,
    "Skipping Rope": 3,
    "Yoga Mat": 2,
    "Dumbbell (Pair)": 1,
    "Swimming Goggles": 2,
    "Table Tennis Paddle": 2,
    "Table Tennis Ball": 10,
    "Boxing Gloves (Pair)": 1,
    "Whistle": 2,
    "Sports Water Bottle": 4,
    "Shin Guards (Pair)": 2,
    "Gym Bag": 1,
    "Sweatband": 4,
    "Air Pump": 1,
}

const default_clothes = {
    "T-Shirt": 15,
    "Jeans": 5,
    "Formal Shirt": 4,
    "Trousers": 3,
    "Shorts": 6,
    "Skirt": 2,
    "Dress": 3,
    "Sweater": 2,
    "Jacket": 1,
    "Hoodie": 3,
    "Socks (Pair)": 12,
    "Underwear (Pack)": 4,
    "Scarf": 2,
    "Gloves (Pair)": 1,
    "Belt": 2,
    "Tie": 3,
    "Cap": 4,
    "Pajamas": 3,
    "Activewear Top": 5,
    "Leggings": 4,
}

function register_company(event) {
    event.preventDefault();

    let company_name = document.getElementById("company_name").value.trim();
    let business_type = document.getElementById("business_type").value;
    let admin_name = document.getElementById("admin-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value; 
    let c_password = document.getElementById("confirm-password").value;

    if (!company_name || !admin_name || !email) {
        alert("Enter all required fields");
        return; 
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
    };
    
    const jsonString = JSON.stringify(user, null, 2);

    localStorage.setItem(email, jsonString);
    setupInventory(email, business_type);

    open_reg_success_bg(company_name);
}

function open_reg_success_bg(company_name) {
    let registration_successful = document.getElementById("registration-successful-bg"); 

    registration_successful.style.display = "block";
    let greet = document.getElementById("greeting-div");
    greet.innerText = `${company_name} is successfully registered on APEX`;
}

function close_reg_success_bg() {
    let registration_successful = document.getElementById("registration-successful-bg");
    registration_successful.style.display = "none";
}

function setupInventory(email, businessType) {
    const inventorySelection = {
        1: default_medical,
        2: default_grocery,
        3: default_supermarket,
        4: default_stationary,
        5: default_sports,
        6: default_clothes
    };
    
    if (!inventorySelection[businessType]) {
        console.error("Invalid business type:", businessType);
        return; 
    }

    const defaultInventory = {...inventorySelection[businessType]};

    let inv_key = `${email}_inv`;
    localStorage.setItem(inv_key, JSON.stringify(defaultInventory));
}