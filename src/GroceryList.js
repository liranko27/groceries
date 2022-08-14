import React from 'react'

function GroceryList({ items }) {
    return (
        <>
            <h1>Grocery List</h1>
            <ul>
                {items.map(item => {
                    return <li key={item.id}>{item.productName}</li>
                })}
            </ul>
        </>
    )
}

export default GroceryList