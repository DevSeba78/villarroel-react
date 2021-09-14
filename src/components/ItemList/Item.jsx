import React from 'react'



const Item = ({articulos}) => {
    return (
        <div>
            <div key={articulos.id} className="card w-25 mt-3 text-center">
                <div className="card-header">{articulos.name}</div>
                <div className="card-body">
                    <img src={articulos.img} alt="fotos"/><br />
                    {articulos.descripcion}</div>
                <div className="card-footer">
                    <button className="btn btn-outline-success">Detalles</button>
                </div>
            </div>
        </div>
    )
}

export default Item
