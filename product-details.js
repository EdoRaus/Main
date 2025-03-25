console.log("product-details.js loaded");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

if (!productId) {
    document.getElementById("product-details").innerHTML = "<p>Product ID not found.</p>";
    throw new Error("Product ID not found.");
}

// Vul hier uw echte subscription key in (alleen voor testomgeving!)
const SUBSCRIPTION_KEY = "9d67ddba946c45e5b58f7d72c9940523"; // <-- in quotes!

fetch(`https://dghstore.azure-api.net/dghproducts/getProduct?id=${productId}`, {
    headers: {
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY
    }
})

    }
})
    .then((response) => {
        if (!response.ok) {
            throw new Error("API responded with status " + response.status);
        }
        return response.json();
    })
    .then((product) => {
        const productDetailsDiv = document.getElementById("product-details");
        productDetailsDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" style="max-width: 300px;"><br><br>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Article:</strong> ${product.articleCode || 'N/A'}</p>
            <p><strong>Tax:</strong> ${product.tax || 'N/A'}%</p>
        `;
    })
    .catch((error) => {
        console.error("Error fetching product:", error);
        document.getElementById("product-details").innerHTML = "<p>Error fetching product details.</p>";
    });
