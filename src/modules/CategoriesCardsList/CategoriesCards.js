import React from "react";

const CategoriesCards = (props) => {
  const { card } = props;
  return (
    <div className="cards-tour">
      <img src={card.pic} alt="Не показує" className="img-tours" />
      <h3 className="title-card">{card.name}</h3>
      <div className="blue-block">
        <span className="text-card">from</span>
        <div className="footer-blue-block">
          <p className="cost">&#8372;{card.price}</p>
          <a className="footer-blue-block__link" href="#">View  ></a>
        </div>
      </div>
    </div>
  );
};
export default CategoriesCards;
