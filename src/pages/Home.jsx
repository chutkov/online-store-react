import React from "react";
import Card from '../components/Card';
function Home({products,isAddedToCart, clickAddToCart, isAddedToFavorites,clickAddToFavorites,searchValue, onChangeSearchInput}){
    const filtredItems = products.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return(
        <div className="content">
            <div className="topHome">
                <div className="titleContent">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все товары"}</h1>
                </div>
                <input maxLength={100} onChange={onChangeSearchInput} placeholder="Поиск товаров" value={searchValue}/>
            </div>
            <div className="items">
                {filtredItems.length === 0 ? <p>Ничего не найдено</p> : ""}
                {
                    ( filtredItems ? filtredItems : products).map((product, index) => (
                    <Card
                        key={index}
                        isAddedToCart={isAddedToCart}
                        clickAddToCart={(obj) => clickAddToCart(obj)}
                        isAddedToFavorites={isAddedToFavorites}
                        clickAddToFavorites={(obj) => clickAddToFavorites(obj)}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    )
}
export default Home