import React from 'react'
import Item from './Item'
import './styles/modal.css'

function Modal({ items, close, amount, total }) {
    return (
        <div className='Modal'>
            <h1>Summery</h1>
            <ul>
                {items.map(item => <Item key={item.id} item={item} />)}
            </ul>
            <p>Total: {total}$</p>
            <p>Amount: {amount}</p>
            <button onClick={() => close(false)}>Close</button>
        </div>
    )
}

export default Modal