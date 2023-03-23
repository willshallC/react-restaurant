import React from "react";

const MenuCard = ({menu}) => {
    return(
        <div>
            <section className="menu-section">
                {
                    menu.map((curData)=>{
                        return(
                            <div className="menu-container">
                                <div className="menu-info-container">
                                    <div className="menu-id">{curData.id}</div>
                                    <div className="menu-category">{curData.category}</div>
                                </div>
                                <h1 className="menu-name">{curData.name}</h1>
                                <p className="menu-description">{curData.description}</p>
                                <div className="menu-image">
                                    <img src={curData.image} alt="foto"/>
                                </div>
                                <button className="menu-btn">Order Now</button>
                            </div>
                        );
                    })
                }
        </section>
        </div>
    )
}

export default MenuCard;