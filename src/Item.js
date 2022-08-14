import React from 'react'
import './styles/item.css'
function Item({ item, click }) {
    return (
        <li onClick={click && item.unitInStock > 0 ? () => click(item.id) : null}>
            <img src={item.img} alt={item.productName} />
            <p><b>{item.productName}</b></p>
            <p>Price:<b>{item.price}$</b></p>
            {item.unitInStock <= 0 ? <img src='https://thumbs.dreamstime.com/b/out-stock-stamp-red-rubber-stamp-white-background-out-stock-stamp-sign-out-stock-stamp-out-stock-stamp-red-rubber-136844369.jpg' alt='oos' /> : <p>Amount:<b>{item.unitInStock}</b></p>}
        </li>
    )
}

export default Item