import AppContext from '../context';
import React from "react";
function Card({clickAddToCart,isAddedToCart = true,clickAddToFavorites,isAddedToFavorites = true, title, price, img,id}){
    const { isItemAddedToFavorites, isItemAddedToCart } = React.useContext(AppContext);
    const obj = { id, parentId: id, title, img, price };
    const onClickAddToCart = () => {
        clickAddToCart(obj);
    };

    const onClickAddToFavorite = () =>{
        clickAddToFavorites(obj);
    }
    return(
        <div className="card">
            <img width={174} height={116} src={img} alt="Изображение товара"/>
            <div className="cardInfo">
                <h3>{title ? title : "Название товара"}</h3>
                <div className="bottomCard">
                    <div className="priceCard">
                        <span>Цена</span>
                        <b>{price} руб.</b>
                    </div>
                    <div className="controlCard">
                        <img onClick={onClickAddToCart} src={isItemAddedToCart(id) ? "/img/bagRemove.svg" : "/img/bagAdd.svg"} alt="В корзину"/>
                        <img onClick={onClickAddToFavorite} src={isItemAddedToFavorites(id)? "/img/heart-fill.svg" : "/img/heart.svg"} alt="В избранное"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card