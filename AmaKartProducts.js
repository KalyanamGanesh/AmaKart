// $.get('https://dummyjson.com/products',function(response){
//     products=response;
// })

var products = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 54900, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg" }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 89900, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg" }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 124900, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg" }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 28000, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg" }, { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 49900, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg" }, { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 174900, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "Apple", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png" }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 149900, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg" }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 149900, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg" }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 109900, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg" }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 109900, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg" }, { "id": 11, "title": "perfume Oil", "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", "price": 1300, "discountPercentage": 8.4, "rating": 4.26, "stock": 65, "brand": "Impression of Acqua Di Gio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg" }, { "id": 12, "title": "Brown Perfume", "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml", "price": 4000, "discountPercentage": 15.66, "rating": 4, "stock": 52, "brand": "Royal_Mirage", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg" }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", "price": 1300, "discountPercentage": 8.14, "rating": 4.59, "stock": 61, "brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp" }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil", "price": 12000, "discountPercentage": 15.6, "rating": 4.21, "stock": 114, "brand": "Al Munakh", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg" }, { "id": 15, "title": "Eau De Perfume Spray", "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality", "price": 3000, "discountPercentage": 10.99, "rating": 4.7, "stock": 105, "brand": "Lord - Al-Rehab", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg" }, { "id": 16, "title": "Hyaluronic Acid Serum", "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid", "price": 1900, "discountPercentage": 13.31, "rating": 4.83, "stock": 110, "brand": "L'Oreal Paris", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg" }, { "id": 17, "title": "Tree Oil 30ml", "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,", "price": 1200, "discountPercentage": 4.09, "rating": 4.52, "stock": 78, "brand": "Hemani Tea", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg" }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.", "price": 4000, "discountPercentage": 13.1, "rating": 4.56, "stock": 88, "brand": "Dermive", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg" }, { "id": 19, "title": "Skin Beauty Serum.", "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m", "price": 4600, "discountPercentage": 10.68, "rating": 4.42, "stock": 54, "brand": "ROREC White Rice", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg" }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.", "price": 7000, "discountPercentage": 16.99, "rating": 4.06, "stock": 140, "brand": "Fair & Clear", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg" }, { "id": 21, "title": "- Daal Masoor 500 grams", "description": "Fine quality Branded Product Keep in a cool and dry place", "price": 2000, "discountPercentage": 4.81, "rating": 4.44, "stock": 133, "brand": "Saaf & Khaas", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png" }, { "id": 22, "title": "Elbow Macaroni - 400 gm", "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm", "price": 1400, "discountPercentage": 15.58, "rating": 4.57, "stock": 146, "brand": "Bake Parlor Big", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg" }, { "id": 23, "title": "Orange Essence Food Flavou", "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item", "price": 1400, "discountPercentage": 8.04, "rating": 4.85, "stock": 26, "brand": "Baking Food Items", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg" }, { "id": 24, "title": "cereals muesli fruit nuts", "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji", "price": 4600, "discountPercentage": 16.8, "rating": 4.94, "stock": 113, "brand": "fauji", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg" }, { "id": 25, "title": "Gulab Powder 50 Gram", "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds", "price": 70, "discountPercentage": 13.58, "rating": 4.87, "stock": 47, "brand": "Dry Rose", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg" }, { "id": 26, "title": "Plant Hanger For Home", "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf", "price": 4100, "discountPercentage": 17.86, "rating": 4.08, "stock": 131, "brand": "Boho Decor", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg" }, { "id": 27, "title": "Flying Wooden Bird", "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", "price": 5100, "discountPercentage": 15.58, "rating": 4.41, "stock": 17, "brand": "Flying Wooden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp" }, { "id": 28, "title": "3D Embellishment Art Lamp", "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", "price": 2000, "discountPercentage": 16.49, "rating": 4.82, "stock": 54, "brand": "LED Lights", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg" }, { "id": 29, "title": "Handcraft Chinese style", "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", "price": 6000, "discountPercentage": 15.34, "rating": 4.44, "stock": 7, "brand": "luxury palace", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp" }, { "id": 30, "title": "Key Holder", "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", "price": 3000, "discountPercentage": 2.92, "rating": 4.92, "stock": 54, "brand": "Golden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg" }, { "id": 31, "title": "Men Navy Blue Solid Sweatshirt", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg", "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem", "isAccessory": false, "category": "clothing", "brand": "United Colors of Benetton", "price": 2599 }, { "id": 32, "title": "Men Black MAMGP T7 Sweat Sporty Jacket", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg", "description": "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining", "isAccessory": false, "category": "clothing", "brand": "Puma", "price": 7999 }, { "id": 33, "title": "Men Black Action Parkview Lifestyle Shoes", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg", "description": "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies. Let the sun go down for uncomfortable shoes, as you opt for this pair of formal shoes that is crafted using comfortable TPR (thermoplastic rubber) sole. Pair these formal shoes with a shirt and trousers to look absolutely handsome", "isAccessory": false, "category": "clothing", "brand": "Hush Puppies", "price": 6999 }, { "id": 34, "title": "Women Black Solid Lightweight Leather Jacket", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg", "description": "Black solid leather jacket, has a spread collar, 3 pockets, zip closure, long sleeves, straight hem, polyester lining", "isAccessory": false, "category": "clothing", "brand": "BARESKIN", "price": 9999 }, { "id": 35, "title": "Women Blue Solid Shirt Dress", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg", "description": "Blue solid woven shirt dress, has a shirt collar, sleeveless, button closure, flared hem", "isAccessory": false, "category": "clothing", "brand": "SASSAFRAS", "price": 5200 }, { "id": 36, "title": "Unisex Silver-Toned Series 3 Smart Watch", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg", "description": "Low and high heart rate notifications. Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions. Activity sharing with friends. Personalized coaching. Monthly challenges and achievement awards. Walkie-Talkie, make phone calls, and send messages. Listen to Apple Music and Apple Podcasts. Use Siri in all-new ways. Silver aluminum case. Built-in GPS, GLONASS, Galileo, and QZSS. S3 with dual-core processor. W2 Apple wireless chip. Barometric altimeter Capacity 8GB. Optical heart sensor. 1 Year Manufacture Warranty", "isAccessory": true, "brand": "Apple", "price": 31999 }, { "id": 37, "title": "Unisex Black & Green Reflex 2.0 Smart Band", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg", "description": "The new Fastrack Reflex 2.0 Activity Tracker comes with all the features one could ask for! It comes in three colours that you can use to accentuate your athleisure, casual or party attire. Not only does it look uber cool in this cool grey & electric blue accent, further the TPU (Thermoplastic Polyurethane) strap ensures it gives you a snugfit while staying light on your wrist! It is a fitness band with smartwatch features. The band has Steps, Distance and Calorie Tracker, Sleep Tracker, Call & SMS Alerts, OLED Display, 10 Days Power Reserve, Vibration Alarm, Sedentary Reminder and is IPX6 Water Resistant. This band is compatible with both IOS and Android OS. It has a secure 'Pin' based pairing with your phone, for better protection. And, all of this at a price that is hard match anywhere else with quality and promise of the brand Fastrack. Move on and get one for yourself!", "isAccessory": true, "category": "accessory", "brand": "Fastrack", "price": 1999 }, { "id": 38, "title": "Unisex Black Galaxy Fit Fitness Band", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg", "description": "Keep up your routine for even longer. With plenty of power to last throughout your daily workouts, you can pack in those longer hours to reach your fitness goals. What's more, you won't have to worry about disruptive battery discharge when tracking your activity.", "isAccessory": true, "brand": "Samsung", "price": 9990 }, { "id": 39, "title": "Gear IconX Black Cord-free Fitness Earbuds", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg", "description": "Speak commands via Bixby or Google Voice and control your music with just a tap or swipe. Meet your fitness goals with speed, distance, calorie tracking and real-time voice guidance. Find the perfect fit with multiple sizes of ear-tips and wing-tips right in the box. iOS/Mac users: Samsung Gear IconX can be used to stream music or take calls from your iOS handset or tablet. Fitness Functions that require the use of Samsung S-Health app are not available for iOS. 5 hours of Bluetooth streaming, 7 hours of MP3 listening, 4 hours talk time. Warranty: 6 months. Warranty provided by the brand owner / manufacturer", "isAccessory": true, "category": "accessory", "brand": "Samsung", "price": 13990 }, { "id": 40, "title": "White 2nd Gen AirPods with Charging Case", "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg", "description": "AirPods with Charging Case: More than 24 hours listening time,3 up to 18 hours talk time8. AirPods (single charge): Up to 5 hours listening time,1 up to 3 hours talk time2. 15 minutes in the case equals up to 3 hours listening time4 or up to 2 hours talk time. Warranty: 1 year. Warranty provided by Brand/Manufacturer", "isAccessory": true, "category": "accessory", "brand": "Apple", "price": 14999 }];

var addProductsNew = document.getElementById('addProductsNew');
function addBtn() {
    addProductsNew.style.display = 'block';
}

var productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
if (productsFromLocalStorage == null) {
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
}
var addProducts = document.getElementById('addProducts');
addProducts.addEventListener('submit', function (e) {
    e.preventDefault();
    var pName = document.getElementById('pName').value;
    var pBrand = document.getElementById('pBrand').value;
    var pPrice = document.getElementById('pPrice').value;
    var pCategory = document.getElementById('pCategory').value;
    var pImage = document.getElementById('pImage').value;
    var id = (parseInt(productsFromLocalStorage[productsFromLocalStorage.length - 1].id)) + 1;
    var newProduct = {
        "id": id,
        "title": `${pName}`,
        "brand": `${pBrand}`,
        "price": `${pPrice}`,
        "category": `${pCategory}`,
        "thumbnail": `${pImage}`
    }
    productsFromLocalStorage.push(newProduct);
    localStorage.setItem("products", JSON.stringify(productsFromLocalStorage));
    location.reload();
})

var logout = document.getElementById('logOut');
function LogOut() {
    window.location.assign('./index.html');
}


var clothing = document.getElementById('clothing');
var electronics = document.getElementById('electronics');
var otherProducts = document.getElementById('other-products');
for (var i = 0; i < productsFromLocalStorage.length; i++) {
    if (productsFromLocalStorage[i].isAccessory == false) {
        clothing.innerHTML += `<div class="card">
        <img src="${productsFromLocalStorage[i].thumbnail}" class="image"/>
        <p>${productsFromLocalStorage[i].title}</p>
        <p class="priceStyle">Rs ${productsFromLocalStorage[i].price} </p>
        <p class="paraBtn"><button onclick="update(${i})" class="btn">Update</button> <button onclick="deleteItem(${i})" class="btn">Delete</button></p>
        </div>`;
    } else if (productsFromLocalStorage[i].category == "smartphones" || productsFromLocalStorage[i].category == "laptops" || productsFromLocalStorage[i].isAccessory == true) {
        electronics.innerHTML += `<div class="card">
        <img src="${productsFromLocalStorage[i].thumbnail}" class="image"/>
        <p>${productsFromLocalStorage[i].title}</p>
        <p class="priceStyle">Rs ${productsFromLocalStorage[i].price} </p>
        <p class="paraBtn"><button onclick="update(${i})" class="btn">Update</button> <button onclick="deleteItem(${i})" class="btn">Delete</button></p>
        </div>`;
    } else {
        otherProducts.innerHTML += `<div class="card">
        <img src="${productsFromLocalStorage[i].thumbnail}" class="image"/>
        <p>${productsFromLocalStorage[i].title}</p>
        <p class="priceStyle">Rs ${productsFromLocalStorage[i].price}</p>
        <p class="paraBtn"><button onclick="update(${i})" class="btn">Update</button> <button onclick="deleteItem(${i})" class="btn">Delete</button></p>
        </div>`;
    }
}



const searchInput = document.getElementById('search-input');
const dataList = document.getElementById('data-list');
searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        dataList.style.display = 'block';
        filterDataList(query);
    } else {
        dataList.style.display = 'none';
    }
});

function filterDataList(query) {
    const items = dataList.querySelectorAll('li');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('click', function (event) {
    if (event.target !== searchInput && event.target !== dataList) {
        dataList.style.display = 'none';
    }
});

var close = document.getElementById('close');
close.onclick = function () {
    searchInput.value = '';
    searchDiv.innerHTML = '';
    searchHead.innerHTML = '';
    window.scrollTo(0,0);
}

var searchDiv = document.getElementById('search-division');
var searchHead = document.getElementById('search-head');
function searchFun(n) {
    var ele = document.getElementById("s" + n)
    searchHead.innerHTML = ele.innerText;
    var searchValue = ele.innerText;
    searchDiv.innerHTML = '';
    searchInput.value = ele.innerText;
    for (var i = 0; i < productsFromLocalStorage.length; i++) {
        if (productsFromLocalStorage[i].category == searchValue) {
            searchDiv.innerHTML += `<div class="card">
        <img src="${productsFromLocalStorage[i].thumbnail}" class="image"/>
        <p>${productsFromLocalStorage[i].title}</p>
        <p class="priceStyle">Rs ${productsFromLocalStorage[i].price} </p>
        <p class="paraBtn"><button onclick="update(${i})" class="btn">Update</button> <button onclick="deleteItem(${i})" class="btn">Delete</button></p>
        </div>`;
        }
    }
    window.scrollTo(0,0);
}

searchInput.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        searchDiv.innerHTML = '';
        var searchValue = searchInput.value.toLowerCase();
        if (searchValue.includes("below")) {
            searchHead.innerHTML = `For Your Search ${searchValue}`;
            var index = searchValue.indexOf("below");
            var cost = parseInt(searchValue.slice(index + 6));
            var itemp = searchValue.slice(0, index - 1).toLowerCase();
            var itemR = new RegExp(itemp);
            console.log(cost, itemp);
            for (var i = 0; i < productsFromLocalStorage.length; i++) {
                if (productsFromLocalStorage[i].category == itemp && productsFromLocalStorage[i].price <= cost) {
                    searchDiv.innerHTML += `<div class="card">
                    <img src="${productsFromLocalStorage[i].thumbnail}" class="image"/>
                    <p>${productsFromLocalStorage[i].title}</p>
                    <p class="priceStyle">Rs ${productsFromLocalStorage[i].price} </p>
                    <p class="paraBtn"><button onclick="update(${i})" class="btn">Update</button> <button onclick="deleteItem(${i})" class="btn">Delete</button></p>
                    </div>`;

                } else if (productsFromLocalStorage[i].brand.toLowerCase().match(itemR) && productsFromLocalStorage[i].price <= cost) {
                    searchDiv.innerHTML += `<div class="card">
                    <img src="${productsFromLocalStorage[i].thumbnail}" class="image"/>
                    <p>${productsFromLocalStorage[i].title}</p>
                    <p class="priceStyle">Rs ${productsFromLocalStorage[i].price} </p>
                    <p class="paraBtn"><button onclick="update(${i})" class="btn">Update</button> <button onclick="deleteItem(${i})" class="btn">Delete</button></p>
                    </div>`;
                }
            }
            if (searchDiv.innerHTML == '') {
                searchDiv.innerHTML = `<img src="./notfound.jpg" alt="No Products Found"/>`
            }
        }
        else {
            var searchValue = searchInput.value.toLowerCase();
            searchHead.innerHTML = `<h3>For your search ${searchValue}</h3>`;
            var searchValueR = new RegExp(searchValue);

            for (var i = 0; i < productsFromLocalStorage.length; i++) {
                if (productsFromLocalStorage[i].category == searchValue || productsFromLocalStorage[i].brand.toLowerCase() == searchValue || productsFromLocalStorage[i].title.toLowerCase().match(searchValueR)) {
                    searchDiv.innerHTML += `<div class="card">
                <img src="${productsFromLocalStorage[i].thumbnail}" class="image"/>
                <p>${productsFromLocalStorage[i].title}</p>
                <p class="priceStyle">Rs ${productsFromLocalStorage[i].price} </p>
                <p class="paraBtn"><button onclick="update(${i})" class="btn">Update</button> <button onclick="deleteItem(${i})" class="btn">Delete</button></p>
                </div>`;
                }
            }
            if (searchDiv.innerHTML == '') {
                searchDiv.innerHTML = `<img src="./notfound.jpg" alt="No Products Found"/>`
            }
        }
    }
    window.scrollTo(0,0);
    dataList.style.display='none';
})

function deleteItem(num) {
    productsFromLocalStorage.pop(num);
    localStorage.setItem("products", JSON.stringify(productsFromLocalStorage));
    location.reload();
}
var closeAdd = document.getElementById('closeAdd');
closeAdd.addEventListener('click', function () {
    addProductsNew.style.display = 'none';
})


var updateProduct = document.getElementById('updateProduct');
let upValue = null;
function update(num) {
    upValue = num;
    updateProduct.style.display = 'block';
}
var closeUp = document.getElementById('closeUp');
closeUp.addEventListener('click', function () {
    updateProduct.style.display = 'none';
})

var updateProducts = document.getElementById('updateProducts');
updateProducts.addEventListener('submit', function (e) {
    e.preventDefault();
    var upName = document.getElementById('upName').value;
    var upBrand = document.getElementById('upBrand').value;
    var upPrice = document.getElementById('upPrice').value;
    var upCategory = document.getElementById('upCategory').value;
    var upImage = document.getElementById('upImage').value;
    if (upName != '' || upBrand != '' || upPrice != '' || upCategory != '' || upImage != null) {
        if (upName != null) {
            productsFromLocalStorage[upValue].title = upName;
        }
        if (upBrand != '') {
            productsFromLocalStorage[upValue].brand = upBrand;
        }
        if (upPrice != '') {
            productsFromLocalStorage[upValue].price = upPrice;
        }
        if (upBrand != '') {
            productsFromLocalStorage[upValue].category = upCategory;
        }
        if (upImage != '') {
            productsFromLocalStorage[upValue].thumbnail = upImage;
        }
    }
    localStorage.setItem("products", JSON.stringify(productsFromLocalStorage));
    location.reload();
})
var resAbt=document.getElementById('resAbt');
var sidemenu = document.getElementById("sideMenu");
function openmenu() {
    sidemenu.style.right = "0";
    console.log("sidemenu");
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
