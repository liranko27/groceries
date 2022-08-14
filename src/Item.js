import React from 'react'
import './styles/item.css'
function Item({ productName, price, unitInStock, img }) {
    return (
        <li >
            <img src={img} alt={productName} />
            <p>Price:{price}</p>
            <p>Amount:{unitInStock}</p>
        </li>
    )
}

export default Item