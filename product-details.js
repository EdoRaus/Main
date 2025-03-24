const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (!productId) {
    document.getElementById('product-details').innerHTML = '<p>Product ID not found.</p>';
    throw new Error('Product ID not found.');
}

const functionUrl = '/api/getProduct?id=' + productId; // Replace with your Azure Function URL inside the static web app

fetch(functionUrl, {
    headers: {
        'x-functions-key': import.meta.env.AZURE_FUNCTIONS_KEY// Replace with your actual API key
    }
})
.then(response => response.json())
.then(product => {
    const productDetailsDiv = document.getElementById('product-details');
    productDetailsDiv.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        // Add other product details here...
    `;
})
.catch(error => {
    console.error('Error fetching product:', error);
    document.getElementById('product-details').innerHTML = '<p>Error fetching product details.</p>';
});
