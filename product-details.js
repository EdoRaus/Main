const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

console.log("Product ID from URL:", productId);

const SUBSCRIPTION_KEY = "dd9d3bb2828e463d92d2447dc6990ebc"; // Uw key

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
  console.log("Product:", product);
})
.catch(error => {
  console.error("Error fetching product:", error);
});
