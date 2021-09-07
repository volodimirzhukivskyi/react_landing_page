import React, { useState } from "react";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Slider from "../SliderGeneralList/SliderGeneralList";
import CategoriesCardsList from "../CategoriesCardsList/CategoriesList";

const Main = (props) => {
  const [counter, setCounter] = useState(1);

  const styleFunc = (el, style) => {
    if (counter === el) {
      return `${style} blue`;
    } else if (counter >= el && style === "circle__span") {
      return `${style} blueBackground`;
    } else if (counter > el) {
      return `${style} blockBackground`;
    }
    return style;
  };
  const titleArr = [
    "HABEN SIE BEREITS PRODUKTE DER MARKE DECATHLON GEKAUFT?",
    "HABEN SIE BEREITS PRODUKTE ?",
    "DER MARKE DECATHLON GEKAUFT?",
    "HABENPRODUKTE DER MARKE GEKAUFT?",
    "DECATHLON GEKAUFT?",
    "HABEN SIE BEREITS PRODUKTE DER MARKE DECATHLON GEKAUFT HABEN SIE BEREITS PRODUKTE DER MARKE DECATHLON GEKAUFT HABEN SIE BEREIT PRODUKTE DER MARKE DECATHLON GEKAUFT?",
  ];

  return (
    <main>
      <Slider />
      <div className={props.open && props.open ? "active" : "mistake__block"}>
        <div className="mistakeBlock__header">
          <BurgerMenu open={props.open} setOpen={props.setOpen} />
          <h3>MENU</h3>
        </div>
        <div>
          <div className="container__select container">
            <details className="select__wrapper">
              <summary>ÜBER DAS UNTERNEHMEN </summary>
              <p>
                Die abgebildeten Markeninhaber oder Hersteller sind weder
                Veranstalter noch Sponsor des Gewinnspiels und steht mit der ol
                eg media in keiner geschäftlichen Beziehung. Veranstalter dieses
                Gewinnspiels ist die ol eg media
              </p>
            </details>

            <details className="select__wrapper">
              <summary>ÜBER DAS UNTERNEHMEN</summary>
              <p>
                Die abgebildeten Markeninhaber oder Hersteller sind weder
                Veranstalter noch Sponsor des Gewinnspiels und steht mit der ol
                eg media in keiner geschäftlichen Beziehung. Veranstalter dieses
                Gewinnspiels ist die ol eg media
              </p>
            </details>

            <details className="select__wrapper">
              <summary>ÜBER DAS UNTERNEHMEN</summary>
              <p>
                Die abgebildeten Markeninhaber oder Hersteller sind weder
                Veranstalter noch Sponsor des Gewinnspiels und steht mit der ol
                eg media in keiner geschäftlichen Beziehung. Veranstalter dieses
                Gewinnspiels ist die ol eg media
              </p>
            </details>
          </div>
        </div>
      </div>

      <div className="hero__wrapper container">
        <h1>
          FÜLLEN SIE EINE KLEINE UMFRAGE ÜBER{" "}
          <span className="textSpan--blue">Decathlon</span> AUS UND GEWINNEN SIE
          WERTVOLLE PREISE!
        </h1>
        <div className="hero__content ">
          <div>
            <img src="/bike2.png" />
          </div>
          <p>
            Wir führen Marktforschung durch, wenn wir die Zufriedenheit der
            Verbraucher mit der Marke Decathlon verstehen wollen. Nehmen Sie
            sich 2 Minuten Zeit, um unsere kurze Umfrage auszufüllen und uns zu
            helfen, besser zu werden. Nach der Umfrage können Sie, wenn Sie
            möchten, Ihre Kontaktdaten eintragen und einen wertvollen{" "}
            <span className="textSpan--blue">Decathlon</span> preis gewinnen.
          </p>
        </div>
        <div className="circle__wrapper ">
          <div className={counter && styleFunc(1, "circle__block")}>1</div>
          <span className={counter && styleFunc(1, "circle__span")} />
          <div className={counter && styleFunc(2, "circle__block")}>2</div>
          <span className={counter && styleFunc(2, "circle__span")} />
          <div className={counter && styleFunc(3, "circle__block")}>3</div>
          <span className={counter && styleFunc(3, "circle__span")} />
          <div className={counter && styleFunc(4, "circle__block")}>4</div>
          <span className={counter && styleFunc(4, "circle__span")} />
          <div className={counter && styleFunc(5, "circle__block")}>5</div>
        </div>

        <h2 className="circle__counter">
          {" "}
          {counter <= 5 ? `Frage ${counter} von 5` : "Ist fertig!"}{" "}
        </h2>
      </div>
      <div className="wrapper__button container">
        <h3 className="buttons__title">{titleArr[counter - 1]}</h3>
        {counter !== 6 ? (
          <div className="wrapper__button">
            <button
              className="changeButton"
              onClick={() => setCounter(counter + 1)}
            >
              yes
            </button>
            <button
              className="changeButton"
              onClick={() => setCounter(counter + 1)}
            >
              no
            </button>
          </div>
        ) : (
          <a
            className="changeButton"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            yes
          </a>
        )}
      </div>
        <CategoriesCardsList />
      <div>
        <div>
          <h2 className="photo__title">Special Offer</h2>
          <div className="photo__wrapper">
            <div className="photoButton__wrapper">
              <img
                alt=" "
                className="buttonWrapper__left"
                src="./main-form-left-arrow.png"
              />
              <a href="#" className="photo__button">
                Last chance!!
              </a>
              <img
                alt=" "
                className="buttonWrapper__right"
                src="./main-form-right-arrow.png"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
