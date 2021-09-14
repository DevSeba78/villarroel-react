import React from 'react'

const ItemDetails = ({detail}) => {
    return (
        <div>
            <label><h2>Detalles</h2></label>
            <p>Nombre: {detail.name}</p>
            <p>Stock: {detail.stock}</p>
            <p>ID: {detail.id}</p>
        </div>
    )
}

export default ItemDetails
