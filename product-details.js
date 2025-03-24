console.log("product-details.js loaded");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

console.log("Product ID:", productId);

if (!productId) {
    document.getElementById("product-details").innerHTML = "<p>Product ID not found.</p>";
    throw new Error("Product ID not found.");
}

fetch(`/api/getProduct?id=${productId}`, { 
    headers: {
        "x-functions-key": window.AZURE_FUNCTIONS_KEY, 
        
    },
})
    .then((response) => {
        console.log("API Response:", response);
        return response.json();
    })
    .then((product) => {
        console.log("Product Data:", product);

        const productDetailsDiv = document.getElementById("product-details");
        productDetailsDiv.innerHTML = `<pre>${JSON.stringify(product, null, 2)}</pre>`; // Display API data directly
    })
    .catch((error) => {
        console.error("Error fetching product:", error);
        document.getElementById("product-details").innerHTML =
            "<p>Error fetching product details.</p>";
    });
