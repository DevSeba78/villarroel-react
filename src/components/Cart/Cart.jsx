import React from 'react'
import {useCartContext} from '../../Context/cartContext'
import Table from 'react-bootstrap/Table'

const Cart = () => {
    const {cartList} = useCartContext()
    console.log(cartList);

    return (
        <div className="text-center">

                    <Table striped bordered hover variant="warning" > 
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
                            
                                {cartList.map(item => <tr key={item.item.id}>
                                    <td>{item.item.id}</td>
                                    <td>{item.item.name}</td>
                                    <td>{item.cantidad}</td>
                                    <td>botones</td>
                                    <td>$ {item.item.precio}</td>
                                    <td>$ {item.item.precio*item.cantidad}</td>
                                </tr>
                                )}
                            
                        </tbody>
                                
                    </Table>
                  
            
        </div>
    )
}

export default Cart
