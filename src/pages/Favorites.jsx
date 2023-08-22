import React from "react";
import Card from '../components/Card';
function Favorites({clickAddToFavorites, productsInFavorites, clickAddToCart}){
    return(
        <div className="content">
            <h1>Избранное</h1>
            {productsInFavorites.length > 0 ? <div className="items">
                {productsInFavorites.map((product, index) => (
                    <Card
                        key={index}
                        clickAddToFavorites={clickAddToFavorites}
                        clickAddToCart={clickAddToCart}
                        isAddedToFavorites={false}
                        isAddedToCart={true}
                        title={product.title }
                        price={product.price }
                        img={product.img}
                        id={product.id}
                    />
                ))}
            </div> : <h3>Ничего нет</h3>}

        </div>
    )
}
export default Favorites