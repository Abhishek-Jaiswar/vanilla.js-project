const root = document.querySelector('#root');

const wrapperContainer = document.createElement('div');
wrapperContainer.setAttribute('class', 'wrapper-container');

const navbarWrapper = document.createElement('div');
navbarWrapper.setAttribute('class', 'navbar-wrapper');

const logoContainer = document.createElement('div');
logoContainer.setAttribute('class', 'logo-container');

const logoImage = document.createElement('img');
logoImage.setAttribute('class', 'logo-image');
logoImage.src = './img/logo.png';

const brandName = document.createElement('h1');
brandName.setAttribute('class', 'brand-name');
brandName.textContent = 'CofieeCat';

logoContainer.append(logoImage, brandName);

const navbarLinkContainer = document.createElement('div');
navbarLinkContainer.setAttribute('class', 'nav-links-container');

const navLinks = document.createElement('ul');
navLinks.setAttribute('class', 'nav-links');

const linkNames = ['Home', 'Products', 'Services', 'About Us', 'Contact', 'Blog'];

for (let i = 0; i <= 5; i++) {
    let actionLink = document.createElement('a');
    actionLink.className = `links`;
    actionLink.textContent = linkNames[i];
    actionLink.href = `#${linkNames[i].toLowerCase().replace(/\s+/g, '-')}`;

    const listItem = document.createElement('li');
    listItem.className = 'list-links'
    listItem.appendChild(actionLink);
    navLinks.appendChild(listItem);
}

navbarLinkContainer.appendChild(navLinks);
navbarWrapper.appendChild(logoContainer);
navbarWrapper.appendChild(navbarLinkContainer);

// Navbar ended here

// Hero section

const heroContainerWrapper = document.createElement('div');
heroContainerWrapper.className = 'hero_container-wrapper';

const heroLeftContainer = document.createElement('div');
heroLeftContainer.className = 'hero_left-container';

const heroRightContainer = document.createElement('div');
heroRightContainer.className = 'hero_right-container';

const heroMainHeader = document.createElement('h1');
heroMainHeader.className = 'hero_main-header';
heroMainHeader.innerHTML = 'Awaken Your Senses, One Perfect Cup at a Time'

const heroHeaderDescription = document.createElement('p');
heroHeaderDescription.className = 'hero_header-description';
heroHeaderDescription.innerHTML = 'At CoffeeCat, we believe every cup of coffee should be an experience, not just a routine. Whether you are savoring our artisanal blends or enjoying the cozy atmosphere, each sip will leave you feeling refreshed and inspired. Welcome to the home of crafted coffee, where passion and flavor meet.'

const heroExploreBtn = document.createElement('button');
heroExploreBtn.className = 'hero_explore-btn';
const heroExploreNavigationLink = document.createElement('a');
heroExploreNavigationLink.className = 'exploreBtn';
heroExploreNavigationLink.href = '/explore';
heroExploreNavigationLink.textContent = 'Explore flavours'
heroExploreBtn.appendChild(heroExploreNavigationLink)

const heroMenuBtn = document.createElement('button');
heroMenuBtn.className = 'hero_menu-btn';
const heroMenuNavigationLink = document.createElement('a');
heroMenuNavigationLink.className = 'menuBtn';
heroMenuNavigationLink.href = '/explore';
heroMenuNavigationLink.textContent = 'Menu'
heroMenuBtn.appendChild(heroMenuNavigationLink)

const heroCoffeeImage = document.createElement('img');
heroCoffeeImage.className = 'hero-img';
heroCoffeeImage.src = './img/heroImage.png';

heroRightContainer.appendChild(heroCoffeeImage);

heroLeftContainer.append(heroMainHeader, heroHeaderDescription, heroExploreBtn, heroMenuBtn);
heroContainerWrapper.append(heroLeftContainer, heroRightContainer);

// Hero section ended here

// New Inventions in flavours section

const newFlavorsContainerWrapper = document.createElement('div');
newFlavorsContainerWrapper.className = "new_flavours_container-wrapper"
const newFlavorsContainer = document.createElement('div');
newFlavorsContainer.className = 'new_flavour-container'

const newFlavorsHeaderText = document.createElement('h1');
newFlavorsHeaderText.className = 'inventions_header-text';
newFlavorsHeaderText.textContent = "Savor the Future of Coffee-Bold New Flavors Await"

const newFlavorsDescription = document.createElement('p');
newFlavorsDescription.className = 'new_flavour-description';
newFlavorsDescription.textContent = 'At CoffeeCat, we blend the finest beans with bold new flavors to create a coffee experience like no other. Explore our unique brews and discover your next favorite.'

newFlavorsContainer.append(newFlavorsHeaderText, newFlavorsDescription)
newFlavorsContainerWrapper.appendChild(newFlavorsContainer)

// products container

const newFlavourProductsWrapper = document.createElement('div');
newFlavourProductsWrapper.className = 'new_flavour_products-wrapper';

coffeeProducts.slice(0, 8).map((items) => {
    const card = document.createElement('div');
    card.className = 'card';
    const productImage = document.createElement('img');
    productImage.className = "product-image";
    const productTitle = document.createElement('p');
    productTitle.className = 'product-title';
    const productDescription = document.createElement('p');
    productDescription.className = 'product-description';
    const productPrice = document.createElement('p');
    productPrice.className = 'product-price'
    const productBuyButton = document.createElement('button');
    productBuyButton.className = 'product-btn'
    const productBuyActionButton = document.createElement('a');
    productBuyActionButton.href = `/productDetails.html?id=${items.id}`
    productBuyButton.appendChild(productBuyActionButton);

    productImage.src = `${items.image}`;
    productTitle.textContent = items.name;
    productDescription.textContent = items.description;
    productPrice.textContent = `${items.price}/Only`;
    productBuyActionButton.textContent = 'Buy it now';

    card.append(productImage, productTitle, productDescription, productPrice, productBuyButton);
    newFlavourProductsWrapper.appendChild(card);
})

newFlavorsContainerWrapper.appendChild(newFlavourProductsWrapper)


wrapperContainer.append(
    navbarWrapper,
    heroContainerWrapper,
    newFlavorsContainerWrapper
)

root.appendChild(wrapperContainer);
