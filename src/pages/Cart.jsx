import React from "react";
import Card from '../components/Card';
import {Link} from "react-router-dom";
function Cart({productsInCart, clickAddToCart, clickAddToFavorites}){
    return(
        <div className="content">
            <h1>Корзина</h1>
            {productsInCart.length > 0 ? <div className="items">
                {productsInCart.map((product, index) => (
                    <Card
                        key={index}
                        clickAddToCart={clickAddToCart}
                        clickAddToFavorites={clickAddToFavorites}
                        isAddedToFavorites={true}
                        isAddedToCart={false}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        id={product.id}
                    />
                ))}
            </div>
                : <h3>Корзина пуста</h3>}
            {productsInCart.length > 0 ? <div className="total">
                <div className="totalInfo">
                    <h3>Итого</h3><span>{productsInCart.reduce((sum, obj) => obj.price + sum, 0)} руб.</span>
                </div>
                <button>Оформить заказ</button>
            </div>: <Link to={'/'}><button>Выбрать товары</button></Link>}
        </div>
    )
}
export default Cart