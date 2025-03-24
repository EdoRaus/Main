console.log("product-details.js loaded");

const productDetailsDiv = document.getElementById("product-details");

if (productDetailsDiv) {
    productDetailsDiv.innerHTML = "<h1>Test Product Details</h1>";
    console.log("product details div updated");
} else {
    console.log("product details div not found");
}
