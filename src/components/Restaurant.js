import React,{useState} from "react";
import "./Restaurant.css";
import MenuCard from "./MenuCard";
import MenuApi from "./MenuApi";

const Restaurant = () =>{

    const [menu, setMenu] = useState(MenuApi);
    console.log(menu);

    return(<div>
        <MenuCard menu={menu}/>
    </div>);
}

export default Restaurant;