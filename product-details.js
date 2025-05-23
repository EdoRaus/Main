const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

console.log("Product ID from URL:", productId);

// ✅ Correcte subscription key hier
const SUBSCRIPTION_KEY = "9d67ddba946c45e5b58f7d72c9940523"; // Vul hier uw geldige key in

fetch(`https://dghstore.azure-api.net/dghproducts/getProduct?id=${productId}`, {
  method: "GET",
  headers: {
    "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error("API responded with status " + response.status);
    }
    return response.json();
  })
  .then(product => {
    const productDetailsDiv = document.getElementById("product-details");
    productDetailsDiv.innerHTML = `
      <h2>${product.title}</h2>
      <p><strong>Description:</strong> ${product.description}</p>
      <p><strong>Price:</strong> €${product.price}</p>
      <img src="${product.image}" alt="${product.title}" style="max-width: 300px;" />
    `;
    console.log("Product:", product);
  })
  .catch(error => {
    console.error("Error fetching product:", error);
    document.getElementById("product-details").innerHTML = "<p>Error fetching product details.</p>";
  });
