// fetch("https://dummyjson.com/products") // this kind of request is called get request
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log("error", error));

//BEST WAT TO CALL API
const getApi = async () => {// we are telling the function to run first by async
  try
  {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const product = data.products;
    displayProducts(product);
  } catch(error) {
    console.error("Error", error);
  }
};
function displayProducts(products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "product";
    
    li.innerHTML = `
          <span class = "stock">${product.availabilityStatus}</span>
          <img src= "${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>Brand</strong>: ${product.brand}</p>
          <p>Price: $${product.price}</p>
          <p>${product.description.slice(0, 60)}...</p>
          <p>review: ${product.reviews[0].comment}</p>
          <p><strong>Shipping Information</strong>: ${product.shippingInformation}</p>
          `;
          
    list.appendChild(li);
  });

}
//Automatically run on page load
window.addEventListener("DOMContentLoaded", getApi);
