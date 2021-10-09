import React from 'react'
import {useCartContext} from '../../Context/cartContext'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/ButtonGroup'
import {Link} from 'react-router-dom'

const Cart = () => {
    const {cartList, borrarItemCarrito,itemInCart,nTotal,limpiarCart} = useCartContext()
    
    if (cartList.length === 0){
        return <h2 className="text-center">Carrito vacio <br />
        <Link to={'/'}>
            <Button className="btn btn-secondary">Volver a Comprar</Button>
        </Link> </h2>
        
    }
  

    return (
        <div className="text-center">

                    <Table striped bordered hover variant="warning" > 
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                                <th>Eliminar Item</th>
                                <th>Sub-total</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {cartList.map(item => (<tr key={item.item.id}>
                                    <td>{item.item.id}</td>
                                    <td>{item.item.name} </td>
                                    <td>{item.cantidad}</td>
                                    <td><Button className ="btn btn-info btn-sm">+</Button>
                                        <Button className ="btn btn-danger btn-sm">-</Button></td>
                                    <td><Button className ="btn btn-dark btn-sm" onClick={()=>borrarItemCarrito(item)}>X</Button></td>
                                    <td>$ {item.item.precio}</td>
                                    <td>$ {item.item.precio*item.cantidad}</td>
                                </tr>
                                ))}
                            
                        </tbody>
                        <tfoot variant="info">
                            <th colSpan="2">Total Productos:</th>
                            <td >{itemInCart()}</td>
                            <th colSpan="3">Total a pagar: </th>
                            <td >$ {nTotal()}</td>
                        </tfoot>
                                
                    </Table>
                    <Link to ={'/'}>
                        <td><Button className ="btn btn-danger btn-sm" onClick={()=> limpiarCart()}>Vaciar Carrito</Button></td>
                    </Link>
                  
            
        </div>
    )
}

export default Cart
