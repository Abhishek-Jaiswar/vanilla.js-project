const paramsURL = new URLSearchParams(window.location.search);
const productId = paramsURL.get('id');

const product = coffeeProducts.find((item) => item.id == productId);
const root = document.querySelector('.product-details');
const detailWrapper = document.createElement('div');

if (product) {
    const detailLeftContainer = document.createElement('div');
    const detailRightContainer = document.createElement('div');

    const productImage = document.createElement('img');
    productImage.className = "product-image";
    const productTitle = document.createElement('p');
    productTitle.className = 'product-title';
    const productDescription = document.createElement('p');
    productDescription.className = 'product-description';
    const productPrice = document.createElement('p');
    productPrice.className = 'product-price'

    productImage.src = `${product.image}`
    detailLeftContainer.appendChild(productImage);

    productTitle.textContent = product.name;
    productDescription.textContent = product.description;
    product.price.textContent = product.price;

    detailRightContainer.append(productTitle, productDescription, productPrice)

    detailWrapper.append(detailLeftContainer, detailRightContainer);
} else {
    const productNotFound = document.createElement('div');
    const notFoundText = document.createElement('h1');
    notFoundText.textContent = 'Product Not Found';

    productNotFound.appendChild(notFoundText);
    detailWrapper.appendChild(productNotFound);
}

root.appendChild(detailWrapper);
