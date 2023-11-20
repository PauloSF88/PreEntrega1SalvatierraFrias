import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContanier from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App()
{
return(
<div className="App">
<BrowserRouter>
<CartProvider>
<NavBar/>
<Routes>
<Route path='/' element={<ItemListContainer />}/>
<Route path='/category/:categoryId' element={<ItemListContainer />}/>
<Route path='/item/:itemId' element={<ItemListContainer />}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='*' element={<h1>404 NOT FOUND</h1>}/>
</Routes>
</CartProvider>
</BrowserRouter>
</div>
);
}

export default App;