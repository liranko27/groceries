import React from 'react'
import './styles/item.css'
function Item({ item, click }) {
    return (
        <li onClick={click ? () => click(item.id) : null}>
            <img src={item.img} alt={item.productName} />
            <p>Price:<b>{item.price}</b></p>
            <p>Amount:<b>{item.unitInStock}</b></p>
        </li>
    )
}

export default Item