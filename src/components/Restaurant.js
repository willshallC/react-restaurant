import React,{useState} from "react";
import "./Restaurant.css";

const Restaurant = () =>{
    return(<div>
        <section className="menu-section">
            <div className="menu-container">
                <div className="menu-info-container">
                    <div className="menu-id">1</div>
                    <div className="menu-category">Breakfast</div>
                </div>
                <h1 className="menu-name">Chole Puri</h1>
                <p className="menu-description">Chole Puri Recipe is the popular North Indian Breakfast Dish, which can be served as a fulfilled meal in lunch or dinner. Some people enjoy it as a Snack Dish as well. Chole / Chickpea or Garbanzo beans is a versatile legume, and it’s seeds are high in protein. I like the combo of Chole and Puri</p>
                <div className="menu-image">
                    <img src="/images/chole-puri.jpg" alt="foto"/>
                </div>
            </div>
        </section>
    </div>);
}

export default Restaurant;