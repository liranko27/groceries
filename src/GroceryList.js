import React from 'react'

function GroceryList({ items }) {
    return (
        <ul>
            {items.map(item => {
                return <li key={item.id}>{item.productName}</li>
            })}
        </ul>
    )
}

export default GroceryList