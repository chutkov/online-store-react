import './App.scss';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
function App() {
  return (
      <div className="App clear">
        <header>
            <Link to={"/"}>
                <div className="headerLeft">
                    <img src="/img/2.png" width={40} height={40} alt="Логотип"/>
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
                            <span>0 руб.</span>
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
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/favorites" element={<Favorites
                  items={[{title: "Мужские Сухарики"}]}
                  />
              }></Route>
              <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
