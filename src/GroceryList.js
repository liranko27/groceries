import React from 'react'
import Item from './Item'

function GroceryList({ items }) {
    return (
        <>
            <h1>Grocery List</h1>
            <ul>
                {items.map(item => {
                    return <Item key={item.id} {...item} />
                })}
            </ul>
        </>
    )
}

export default GroceryList