const menu = [
    {
        id: 1,
        image: "./images/FrenchCafeauLait.jpg" ,
        price: "Rs.129" ,
        title: "Cafe Au Lait",
        category: "Breakfast",
        desc: "French coffee beverage with equal parts steamed milk and strong hot coffee. This clever recipe even includes a trick for steaming hot milk using a glass jar, and your microwave—no fancy steam wand or espresso machine required." ,

    },
    {
      
        id: 2,
        image: "./images/EasyFrenchPainauChocolat.jpg" ,
        price: "Rs.149" ,
        title: "Pain Au Chocolat",
        category: "Breakfast",
        desc: "Eating chocolate treats in the morning is a very French habit—perhaps to leave time in the day for walking off calories. Pain au chocolate, a sweet roll filled with melting dark chocolate, may be the most beloved of all French pastries at breakfast time" ,
 

    },

    {
      
        id: 3,
        image: "./images/ClassicFrenchOmelet.jpg" ,
        price: "Rs.149" ,
        title: "French Omelet",
        category: "Breakfast",
        desc: "If you wouldn't consider breakfast complete without eggs, the French omelette is an obvious choice" ,
 

    },

    {
      
        id: 4,
        image: "./images/FrenchBaguette.jpg" ,
        price: "Rs.149" ,
        title: "French Baguette",
        category: "Breakfast",
        desc: "Crusty, chewy, and sublimely French, the baguette is an essential element of the French breakfast menu." ,
 

    },
    {
      
        id: 5,
        image: "./images/French-hot-chocolate.jpg" ,
        price: "Rs.99" ,
        title: "Chocolat Chaud",
        category: "Breakfast",
        desc: "French hot chocolate, or chocolate chaud, is a deep, rich, magnificent part of any bistro-style French breakfast." ,
 

    },
    {
      
        id: 18,
        image: "./images/FrenchAlmondCroissants.jpg" ,
        price: "Rs.149" ,
        title: "French Almond Croissants",
        category: "Breakfast",
        desc: "French almond croissants filled with a thick ribbon of fragipane (a sweet almond filling) and topped with crispy, toasted almonds are a fabulous breakfast or brunch treat." ,
 

    },
    {
      
        id: 6,
        image: "./images/FrenchAlmondCroissants.jpg" ,
        price: "Rs.149" ,
        title: "French Almond Croissants",
        category: "Breakfast",
        desc: "French almond croissants filled with a thick ribbon of fragipane (a sweet almond filling) and topped with crispy, toasted almonds are a fabulous breakfast or brunch treat." ,
 

    },
    {
      
        id: 7,
        image: "./images/BuckwheatCrepes.jpg" ,
        price: "Rs.249" ,
        title: "Buckwheat Crepes",
        category: "Breakfast",
        desc: "In Brittany, on France's northwest Atlantic coast, crepes are de rigueur at breakfast time,  stuff them with your choice of sweet or savory fillings for a classic Breton dish to enjoy for breakfast, lunch, or dinner." ,
 

    },
    {
      
        id: 8,
        image: "./images/steak-frites.jpg" ,
        price: "Rs.349" ,
        title: "Steak Frites",
        category: "Lunch",
        desc: "Voila – this simple, yet impressive recipe is inspired by French bistro cuisine.",
 
    },

    {
      
        id: 9,
        image: "./images/chicken-confit.jpg" ,
        price: "Rs.349" ,
        title: "Chicken Confit",
        category: "Lunch",
        desc: "In this classic confit, the chicken is salted and seasoned with herbs, then slowly cooked in olive oil to make it rich and tender." ,
 

    },
    {
      
        id: 10,
        image: "./images/french-onion-soup.jpg" ,
        price: "Rs.249" ,
        title: "French Onion Soup",
        category: "Lunch",
        desc: "See out the winter with this fragrant French onion soup. Don’t forget the cheesy croutons." ,
 

    },
    {
      
        id: 11,
        image: "./images/Bouillabaisse.jpg" ,
        price: "Rs.349" ,
        title: " Bouillabaisse",
        category: "Lunch",
        desc: "This traditional French fish soup is infused with saffron, orange, thyme and chilli." ,
 

    },
    {
      
        id: 12,
        image: "./images/Salmon-steamed.jpg" ,
        price: "Rs.399" ,
        title: "Salmon en papillote",
        category: "Lunch",
        desc: "This clever technique of wrapping fish in paper before cooking ensures that all the moisture and flavours are locked in. " ,
 

    },
    {
      
        id: 13,
        image: "./images/Quiche.jpg" ,
        price: "Rs.349" ,
        title: "Quiche Lorraine",
        category: "Lunch",
        desc: "This quiche Lorraine is one of the most popular recipes on taste.com.au. Originally quiche Lorraine was an open custard pie with smoked bacon. It is only the more modern versions that add cheese to the mix." ,
 

    },
    {
      
        id: 14,
        image: "./images/Frangipane.jpg" ,
        price: "Rs.399" ,
        title: " Frangipane tart",
        category: "Desert",
        desc: "This French style tart has a fruity twist. Top it off with salted caramel sauce for a dessert everyone will love.    " ,
 

    },
    {
      
        id: 15,
        image: "./images/Hazelnut.jpg" ,
        price: "Rs.299" ,
        title: " Hazelnut dacquoise",
        category: "Desert",
        desc: "TWith layers of nutty meringue and rich whipped filling, the classic French cake dacquoise – pronounced dah-kwahz- is so impressive. " ,
 

    },
    {
      
        id: 16,
        image: "./images/souffle.jpg" ,
        price: "Rs.199" ,
        title: "Souffle",
        category: "Desert",
        desc: "These light-as-air desserts are nothing short of irresistible." ,
 

    },
    {
      
        id: 17,
        image: "./images/paris-brest.jpg" ,
        price: "Rs.399" ,
        title: "Paris-brest",
        category: "Desert",
        desc: "Cousin to the croquembouche, this custard-frilled choux pastry ring is like a giant chocolate eclair.     " ,
 

    },
]

const sectionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
});

filterBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(item){
            if(item.category === category){
                return item;
            }
        });
        if(category === "All"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    })

   
});
    


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <article class="menu-item">
            <div>
                <img class="image" src=${item.image} alt="">
            </div>
            <header class="name">
                <h3 class="title">${item.title}</h3>
                <h3 class="price">${item.price}</h3>
            </header>
            <p>${item.desc}</p>
        </article>`
    });
    displayMenu = displayMenu.join(""); 

    sectionCenter.innerHTML = displayMenu;
}
