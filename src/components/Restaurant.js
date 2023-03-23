import React,{useState} from "react";
import "./Restaurant.css";
import MenuCard from "./MenuCard";
import MenuApi from "./MenuApi";

const Restaurant = () =>{

    const [menu, setMenu] = useState(MenuApi);
    console.log(menu);

    return(<div>
        <div className="nav-bar">
            <div className="nav-btn-container">
                <button className="nav-btn">Breakfast</button>
                <button className="nav-btn">Dinner</button>
                <button className="nav-btn">Snacks</button>
            </div>
        </div>
        <MenuCard menu={menu}/>
    </div>);
}

export default Restaurant;