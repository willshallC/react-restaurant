import React from "react";

const NavMenu = ({filterItems, list}) =>{
    console.log("list"+ list);
    return(<div>
        <div className="nav-bar">
            <div className="nav-btn-container">
                {
                    list.map((curElm)=>{
                        return(
                            <button className="nav-btn" onClick={()=>{filterItems(curElm)}}>{curElm}</button>
                        )
                    })
                }
                <button className="nav-btn" onClick={()=>{filterItems("all")}}>All</button>
            </div>
        </div>
    </div>);
}

export default NavMenu;