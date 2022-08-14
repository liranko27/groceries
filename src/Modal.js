import React from 'react'
import Item from './Item'
import './styles/modal.css'

function Modal({ items, close }) {
    return (
        <div className='Modal'>
            <h1>Summery</h1>
            <ul>
                {items.map(item => <Item key={item.id} item={item} />)}
            </ul>
            <button onClick={() => close(false)}>Close</button>
        </div>
    )
}

export default Modal