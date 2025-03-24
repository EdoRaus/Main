const products = [
    {
        id: 1,
        category: "growlights",
        title: "Growlights",
        image: "images/GrowLight.jpg",
        price: 1200,
        delivery: "7-10 days",
        commercial: "High-efficiency LED grow lights for optimal plant growth.",
        lineText: "Energy-saving and long-lasting.",
        articleCode: "GL-1234",
        tax: 10
    },
    {
        id: 2,
        category: "dehumidification",
        title: "De-Humidification",
        image: "images/HortiCooler.jpg",
        price: 800,
        delivery: "5-7 days",
        commercial: "Maintain optimal humidity levels for healthy plant growth.",
        lineText: "Reduces mold and mildew.",
        articleCode: "DH-5678",
        tax: 10
    },
  {
        id: 3,
        category: "growlights",
        title: "LED Production Lights",
        image: "images/ProductionLED.jpg",
        price: 800,
        delivery: "5-7 days",
        commercial: "Maintain optimal humidity levels for healthy plant growth.",
        lineText: "Reduces mold and mildew.",
        articleCode: "DH-5678",
        tax: 10
    }, 
        {
        id: 4,
        category: "boilers",
        title: "Electric Boilers",
        image: "images/Electric_Boiler.jpg",
        price: 800,
        delivery: "5-7 days",
        commercial: "Heat your greenhouse using an electric Boiler",
        lineText: "Using the Electric Boiler in combination with CHP",
        articleCode: "DH-5678",
        tax: 10
    },// Add more product objects here...
];

const gridContainer = document.querySelector('.grid-container');

products.forEach(product => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.dataset.category = product.category;

    gridItem.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">$${product.price}</p>
        <p class="delivery">Delivery: ${product.delivery}</p>
        <p class="commercial">${product.commercial}</p>
        <p class="line-text">${product.lineText}</p>
        <p class="article-code">Article: ${product.articleCode}</p>
        <p class="tax">Tax: ${product.tax}%</p>
        <a href="product-details.html?id=${product.id}" class="select-item">Select Item</a>
    `;

    gridContainer.appendChild(gridItem);
});
