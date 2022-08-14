import React from 'react'
import Item from './Item'

function ShoppingCart({ items, total, amount }) {
    return (
        <div className="cart">

            <h1>Shopping Cart</h1>
            <ul>
                {items.map(item => {
                    return <Item key={item.id} item={item} />
                })}
            </ul>
            <p>Total:{total}</p>
            <p>Amount:{amount}</p>
        </div>
    )
}

export default ShoppingCart