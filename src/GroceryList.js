import React from 'react'
import Item from './Item'

function GroceryList({ items, click }) {

    return (
        <div className="grocery">
            <h1>Grocery List</h1>
            <ul>
                {items.map(item => {
                    return <Item key={item.id} click={click} item={item} />
                })}
            </ul>

        </div>
    )
}

export default GroceryList