import React,{useState} from "react";
import "./Restaurant.css";
import MenuCard from "./MenuCard";
import MenuApi from "./MenuApi";
import NavMenu from "./NavMenu";

const updatedList = [ ...new Set(
    MenuApi.map((curElm)=>{
        return curElm.category;
    })
)]

const Restaurant = () =>{

    const [menu, setMenu] = useState(MenuApi);
    const [list,setList] = useState(updatedList);
    console.log(menu);

    const filterItems = (category) =>{
        const newList = MenuApi.filter((curCat)=>{
            return curCat.category === category;
        })
        setMenu(newList);
    }

    return(<div>
        <NavMenu list={list} filterItems = {filterItems}/>
        <MenuCard menu={menu}/>
    </div>);
}

export default Restaurant;