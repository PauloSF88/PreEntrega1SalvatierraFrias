import {getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = eseState([]);

  const {categoryId} = useParams()
  useEffect(() => {
    
    const asyncFunc = categoryID?getProductsByCategory : getProducts
    asyncFunc(categoryID)
    .then(response => {
    setProducts(response)
    })
    .catch(error => {console.error(error)
    })
    }, [categoryId])



/*
    
    getProducts()
      .them((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
*/
  
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
