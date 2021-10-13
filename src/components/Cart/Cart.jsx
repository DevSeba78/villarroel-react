import {useState} from 'react'
import {useCartContext} from '../../Context/cartContext'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/ButtonGroup'
//import {Link} from 'react-router-dom'
//import Form from 'react-bootstrap/Form'
import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../../services/getFirebase'
//import { Col, Row } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Cart = () => {
    const {cartList, borrarItemCarrito,itemInCart,nTotal,limpiarCart} = useCartContext()
    const [formData, setFormData] = useState(estadoInicialCart)
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        let ordenCompra = {}
        ordenCompra.date = firebase.firestore.Timestamp.fromDate(new Date());
        
        ordenCompra.buyer = formData
       // ordenCompra.item = cartList
        ordenCompra.total = nTotal();
        ordenCompra.item = cartList.map(cartItem =>{
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const precio = cartItem.item.precio * cartItem.cantidad;
            return {id,title,precio}
        })
        console.log(ordenCompra)
        
        const dbQuery = getFirestore();
        dbQuery.collection('orders').add(ordenCompra)
        .then((resp) =>console.log(resp.id))
        .catch((err) =>console.log(err))
        .finally(()=>{setFormData(estadoInicialCart)
                     // borrarItemCarrito()  
                    });
    }

    //Funcion que controlo los cambios de estado en react para los Formularios
    function handleOnChange(e){
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }
    console.log(formData)
    
    if (cartList.length === 0){
        return <h4 className="text-center">Carrito vacio - empezar a comprar<br />
        <LinkContainer to={'/'}>
            <Button className="btn btn-secondary mt-2">Volver a la Tienda</Button>
        </LinkContainer> </h4>
        
    }
  

    return (
        <div className="text-center">

                    <Table striped bordered hover variant="secondary" > 
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
                            
                                {cartList.map(item => (<tr key={item.item.id} className='justify-content-center align-items-center' >
                                    <td ><img  src={item.item.img} alt="fotos" style= {{width:50, height:50}}/></td>
                                    <td>{item.item.title} </td>
                                    <td>{item.cantidad}</td>
                                    <td><Button className ="btn btn-info btn-sm">+</Button>
                                        <Button className ="btn btn-danger btn-sm">-</Button></td>
                                    <td><Button className ="btn btn-dark btn-sm" onClick={()=>borrarItemCarrito(item)}>X</Button></td>
                                    <td>$ {item.item.precio}</td>
                                    <td>$ {item.item.precio*item.cantidad}</td>
                                </tr>
                                ))}
                                <th colSpan="2">Total Productos:</th>
                                <td >{itemInCart()}</td>
                                <th colSpan="3">Total a pagar: </th>
                                <td >$ {nTotal()}</td>
                        </tbody>      
                       
                                
                    </Table>

                    <form 
                                onSubmit={handleOnSubmit}
                                
                            >
                                <input 
                                    type='text' 
                                    placeholder='ingrese el nombre' 
                                    name='name'
                                    value={formData.name} 
                                    onChange={handleOnChange}
                                />  
                                <input 
                                    type='text' 
                                    placeholder='ingrese el nro de tel' 
                                    name='tel' 
                                    value={formData.tel}
                                    onChange={handleOnChange}
                                />  
                                <input 
                                    type='text' 
                                    placeholder='ingrese el email' 
                                    name='email' 
                                    value={formData.email} 
                                    onChange={handleOnChange}   
                                />  
                                <input 
                                    type='text' 
                                    placeholder='Confirme el mail ' 
                                    name='email2' 
                                    value={formData.emailconfirm}
                                    onChange={handleOnChange}  
                                />  <br />
                                <button className ="btn btn-success btn-sm">Terminar Compra</button>
                            </form>


                    {/* <Form 
                        onSubmit={handleOnSubmit}
                         >
                        <Row className='container-fluid align-items-center'> */}

                        {/* <Form.Group controlId='formFile' className='mb-3'> */}
                            {/* <Col sm={3} className='my-1'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' placeholder="ing nombre" name="name" value={formData.name} onChange={handleOnChange}/>
                            </Col>
                            <Col sm={3} className='my-1'>
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type='text' placeholder="ing telefono" name="tel" value={formData.tel} onChange={handleOnChange}/>
                            </Col>
                            <Col sm={3} className='my-1'>
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type='email' placeholder="ing email" name="email" value={formData.email} onChange={handleOnChange} />
                            </Col>
                            <Col sm={3} className='my-1'>
                            <Form.Label>Confirme Correo Electronico</Form.Label>
                            <Form.Control type='email' placeholder="Confirme Email" name="email2"  />
                            </Col> */}
                            {/* <Col xs='auto' className='mt-5 my-1'>
                            <Button className ="btn btn-success btn-sm">Terminar compra</Button>
                            </Col> */}
                        {/* </Form.Group> */}
                        {/* </Row> */}
{/*                             
                    //         <Button className ="btn btn-success btn-sm m-1">Terminar compra</Button>
                        
                    // </Form> */}





                  
                        {/* verificar validacion de mail */}
                        {/* {formData.email !== undefined || !formData.email2 ? <div>
                            ...
                        </div>:
                        <Button className ="btn btn-success btn-sm">Terminar compra</Button>} */}
                
                   

                    <LinkContainer to ={'/'}>
                        <Button className ="btn btn-danger btn-sm mt-2" onClick={()=> limpiarCart()}>Vaciar Carrito</Button>
                    </LinkContainer>
                  
            
        </div>
    )
}

export default Cart
const estadoInicialCart= {
    
        name: '',
        tel: '',
        email: ''

    
}
