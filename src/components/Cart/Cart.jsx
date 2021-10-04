import React from 'react'
import {useCartContext} from '../../Context/cartContext'
import Table from 'react-bootstrap/Table'

const Cart = () => {
    const {cartList} = useCartContext()
    console.log(cartList);

    return (
        <div className="text-center">

                    <Table responsive> 
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                                <th>Sub-total</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {cartList.map(item => <td key={item.item.id}>
                                    <td>{item.item.name}</td>
                                    <td>{item.cantidad}</td>
                                    <td>$ {item.item.precio}</td>
                                </td>
                                )}
                            </tr>
                        </tbody>
                                
                    </Table>
                  
            
        </div>
    )
}

export default Cart
