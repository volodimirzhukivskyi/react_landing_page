import React from "react";
import CategoriesCards from "./CategoriesCards";


const CategoriesCardsList = () => {
    const arr=   [
        {
            "name": "Bikes for the city",
            "pic": "/bicycle.jpg",
            "price": 1000
        },
        {
            name: "Bicycles - off-road vehicles",
            pic: "/bicycle2.jpg",
            price: 100
        },
        {
            name: "Fast bikes",
            pic: "/bicyclesShop.jpg",
            price: 300
        }
    ]

  return (
    <div className="wrapperContent">
      <h2 className="titleHero">YOU CAN BUY:</h2>
      <section className="gallery-card-tour">
        {arr.map((card) => (
          <CategoriesCards card={card} />
        ))}
      </section>
    </div>
  );
};
export default CategoriesCardsList;
