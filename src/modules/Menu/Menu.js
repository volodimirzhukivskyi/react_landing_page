import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Menu = (props) => {

    return (
        <header className="header" >
            <BurgerMenu open={props.open} setOpen={props.setOpen}/>
            <div className="wrapper__inputs"><label htmlFor="change-bike">Choose a bike:</label>
                <input list="bike" id="change-bike" name="change-bike"/>

                <datalist id="bike">
                    <option value="bike-Chocolate"/>
                    <option value="bike-Coconut"/>
                    <option value="bike-Mint"/>
                    <option value="bike-Strawberry"/>
                    <option value="bike-Vanilla"/>
                </datalist>
            </div>
            <img className="heroLogo" src="/logodeca.png" alt="logodeca"/>

        </header>
    );
};

export default Menu;
