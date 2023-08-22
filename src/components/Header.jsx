import {Link} from "react-router-dom";
import React from "react";


function Header({productsInCart}){
    return(
        <header>
            <Link to={"/"}>
                <div className="headerLeft">
                    <img src="/img/К.png" width={40} height={40} alt="Логотип"/>
                    <div className="headerTitle">
                        <h2>Онлайн-магазин</h2>
                        <p>Найдётся и для тебя</p>
                    </div>
                </div>
            </Link>
            <div className="headerRight">
                <ul>
                    <Link to={'/cart'}>
                        <li>
                            <img height={20} src="/img/cart.svg" alt="Корзина"/>
                            <span>{productsInCart.reduce((sum, obj) => obj.price + sum, 0)} руб.</span>
                        </li>
                    </Link>
                    <Link to={'/favorites'}>
                        <li>
                            <img height={20} src="/img/heart.svg" alt="Избранное"/>
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
export default Header