const container = document.getElementById("product-container");
const search = document.getElementById("search");

// Display Products
function displayProducts(list) {

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.brand}</p>

                <p class="price">₹${product.price}</p>

                <button onclick="orderProduct('${product.name}')">
                    <i class="fa-brands fa-whatsapp"></i>
                    Order Now
                </button>

            </div>

        </div>
        `;

    });

}

// Show all products
displayProducts(products);

// Search
search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    const filtered = products.filter(product =>

        product.name.toLowerCase().includes(value) ||

        product.category.toLowerCase().includes(value) ||

        product.brand.toLowerCase().includes(value)

    );

    displayProducts(filtered);

});

// WhatsApp Order
function orderProduct(name){

    const number = "918955650549";

    window.open(
        `https://wa.me/${number}?text=Hello, I want to order ${name}`,
        "_blank"
    );

}

// Dark Mode
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

// Category Filter
const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.innerText;

        if(category === "All"){
            displayProducts(products);
            return;
        }

        const filtered = products.filter(product =>
            product.category === category
        );

        displayProducts(filtered);

    });

});