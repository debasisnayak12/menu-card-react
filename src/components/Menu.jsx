import { useState } from "react";

const dishes = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/dish-1.avif",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/dish-4.avif",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/dish-3.avif",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/dish-4.avif",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/dish-5.avif",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/dish-6.avif",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/dish-7.avif",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/dish-1.avif",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/dish-5.avif",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryClick = (category) =>{
        setSelectedCategory(category);
    }

    const filteredDishes = selectedCategory === 'all' ? dishes : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="menu">
      <h1 className="head">Our Menu</h1>
      <hr/>
      <div className="categories">
        <button onClick={() => handleCategoryClick("all")}>All</button>
        <button onClick={() => handleCategoryClick("breakfast")}>
          Breakfast
        </button>
        <button onClick={() => handleCategoryClick("lunch")}>Lunch</button>
        <button onClick={() => handleCategoryClick("shakes")}>Shakes</button>
      </div>
      <div className="dish-list">
        {
            filteredDishes.map(dish => (
                <div key={dish.id} className="dish-item">
                    <img src={dish.img} alt={dish.title}/>
                    <div className="dish-details">
                        <div className="dish-head">
                          <h3>{dish.title}</h3>
                          <p>$: {dish.price}</p>
                        </div>
                        <p className="desc">{dish.desc}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Menu