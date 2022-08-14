import { useEffect, useState } from 'react';
import './App.css';
import { getAllProducts } from './dal/api.js';
import GroceryList from './GroceryList.js';
function App() {
  const [items, setItems] = useState(getAllProducts())
  useEffect(() => {
    setItems(getAllProducts())
  }, [items])
  return (
    <div className="App">
      <GroceryList items={items} />
    </div>
  );
}

export default App;
