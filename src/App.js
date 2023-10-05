import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount intial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </div>
  );
}

export default App;