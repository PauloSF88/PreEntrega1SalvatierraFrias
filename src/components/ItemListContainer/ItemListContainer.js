import {getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = eseState([]);
  useEffect(() => {
    getProducts()
      .them((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
