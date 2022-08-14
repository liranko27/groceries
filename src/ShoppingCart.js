import React from 'react'
import Item from './Item'

function ShoppingCart({ items }) {
    return (
        <div className="cart">

            <h1>Shopping Cart</h1>
            <ul>
                {items.map(item => {
                    return <Item key={item.id} {...item} />
                })}
            </ul>
        </div>
    )
}

export default ShoppingCart