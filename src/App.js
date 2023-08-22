import './App.scss';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import axios from "axios";
import React from "react";
import AppContext from './context';
import Header from "./components/Header";

function App() {
    const [products, setProducts] = React.useState([])
    const [productsInCart, setProductsInCart] = React.useState([])
    const [productsInFavorites, setProductsInFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('');
    React.useEffect(() =>{
            axios.get('https://64dfcdd171c3335b25831443.mockapi.io/products').then((res) =>{
                setProducts(res.data)
            });
        axios.get('https://64dfcdd171c3335b25831443.mockapi.io/cart').then((res) =>{
            setProductsInCart(res.data)
        });
    },[])

    const clickAddToCart = async (obj) => {
        try {
            const findItem = productsInCart.find((item) => Number(item.parentId) === Number(obj.parentId));
            if (findItem) {
                const {data} = await axios.get('https://64dfcdd171c3335b25831443.mockapi.io/cart')
                setProductsInCart((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.parentId)));
                await data.map( async (item) => {
                    item.parentId === obj.parentId && await axios.delete(`https://64dfcdd171c3335b25831443.mockapi.io/cart/${item.id}`);
                })
            } else {
                await axios.post('https://64dfcdd171c3335b25831443.mockapi.io/cart', obj)
                setProductsInCart((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert('Ошибка при добавлении в избранное');
            console.error(error);
        }
    }
    const clickAddToFavorites = async (obj) => {
        try {
            const findItem = productsInFavorites.find((item) => Number(item.parentId) === Number(obj.id));
            if (findItem) {
                setProductsInFavorites((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                // await axios.delete(`https://64dfcdd171c3335b25831443.mockapi.io/cart/${findItem.id}`);
            } else {
                setProductsInFavorites((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert('Ошибка при добавлении в избранное');
            console.error(error);
        }
    }
    const isItemAddedToCart = (id) => {
        return productsInCart.some((obj) => Number(obj.parentId) === Number(id));
    };
    const isItemAddedToFavorites = (id) => {
        return productsInFavorites.some((obj) => Number(obj.parentId) === Number(id));
    };
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };
  return (
      <AppContext.Provider
          value={{
              isItemAddedToCart,
              isItemAddedToFavorites,
          }}>
      <div className="App clear">
        <Header productsInCart={productsInCart}/>
          <Routes>
              <Route path="/" element={
                  <Home
                      products={products}
                      clickAddToCart={clickAddToCart}
                      productsInFavorites={productsInFavorites}
                      clickAddToFavorites={clickAddToFavorites}
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      onChangeSearchInput={onChangeSearchInput}
                  />}></Route>
              <Route path="/favorites" element={<Favorites productsInFavorites={productsInFavorites} clickAddToFavorites={clickAddToFavorites} clickAddToCart={clickAddToCart}/>}></Route>
              <Route path="/cart" element={<Cart productsInCart={productsInCart} clickAddToCart={clickAddToCart} clickAddToFavorites={clickAddToFavorites}/>}></Route>
          </Routes>
      </div></AppContext.Provider>
  );
}

export default App;
