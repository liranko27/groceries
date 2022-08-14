import { useEffect, useState } from 'react';
import './App.css';
import { getAllProducts } from './dal/api.js';
import GroceryList from './GroceryList.js';
import ShoppingCart from './ShoppingCart';
function App() {
  const [groceryItems, setGroceryItems] = useState([])
  const [shoppingItems, setShoppingItems] = useState([])
  useEffect(() => {
    setGroceryItems(getAllProducts())
  }, [groceryItems])
  return (
    <div className="App">
      <GroceryList items={groceryItems} click={setGroceryItems} />
      <ShoppingCart items={shoppingItems} />
    </div>
  );
}

export default App;
