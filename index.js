// fetch("https://dummyjson.com/products") //this kind of request is called  get Request.
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error", error));

// FIRST TRIAL
// const getApi = async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();
//     // const first20 = data.products.slice(0, 60)
//     // displayProducts(first20);
//     const lessThanTenDollars = data.products;
//     lessThanTenDollars.filter((p) => p.price <= 10);
//     displayProducts(lessThanTenDollars)
//   } catch (error) {
//     console.error("Error", error);
//   }
// };

// // Rendering products card
// function displayProducts(products) {
//   const list = document.getElementById("productList");
//   list.innerHTML = "";

//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.className = "product";
//     li.innerHTML = `
//         <img src="${product.thumbnail}" alt="${product.title}">
//         <h3>${product.title}</h3>
//         <p>Price: $${product.price}</p>
//         <p>${product.description.slice(0, 60)}...</p>
//         `;

//     list.appendChild(li);
//   });
// }

// // automatically run on page load
// window.addEventListener("DOMContentLoaded", getApi);

// SECOND TRIAL

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error", error));

const getApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    displayProducts(data.products);
    // console.log(data.products);
  } catch (error) {
    console.log("error", error);
  }
};
// Rendering products card

function displayProducts(products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "product";
    li.innerHTML = `
        <p>${product.availabilityStatus}</p>
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Brand: ${product.brand}</p>
        <p>Price: $${product.price}</p>
        <p>Desc.: ${product.description.slice(0, 30)}...</p>
        <p>Reviews: ${product.reviews[0].comment}</p>
        <p>Rating: ${product.shippingInformation}</p>
      `;

    list.appendChild(li);
  });
}

// automatically run on page load
window.addEventListener("DOMContentLoaded", getApi);
