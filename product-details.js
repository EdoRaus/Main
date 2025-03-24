const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`/api/product?id=${productId}`) // Replace with your Azure Function URL
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
    });