import { useEffect, useState } from 'react';
import './App.css';
import { getAllProducts } from './dal/api.js';
import GroceryList from './GroceryList.js';
import ShoppingCart from './ShoppingCart';
function App() {
  const [groceryItems, setGroceryItems] = useState(getAllProducts())
  const [shoppingItems, setShoppingItems] = useState([])
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState(0)
  function handleBuy(id) {
    setGroceryItems(groceryItems.map(groceryItem => {
      if (groceryItem.id === id) {
        groceryItem.unitInStock--
      }
      return groceryItem
    }))
    const current = { ...groceryItems.find(item => item.id === id) }
    const currentShopping = shoppingItems.find(item => item.id === id)
    if (currentShopping) {
      setShoppingItems(shoppingItems.map(item => {
        if (item.id === currentShopping.id) {
          item.unitInStock++
          setAmount(amount + 1)
        }
        setTotal(total + item.price)
        return item
      }))
    } else {
      setAmount(amount + 1)
      setTotal(total + current.price)
      current.unitInStock = 1
      setShoppingItems([...shoppingItems, current])
    }
  }
  function handleSort(data) {
    const sorted = data.sort((a, b) => b.unitInStock - a.unitInStock)
    setGroceryItems(sorted)
  }
  console.log(total, amount)
  useEffect(() => {
    handleSort(groceryItems)
  }, [groceryItems])
  return (
    <div className="App">
      <GroceryList items={groceryItems} click={handleBuy} />
      <ShoppingCart items={shoppingItems} amount={amount} total={total} />
    </div>
  );
}

export default App;
