import {useState} from 'react'
import {useCartContext} from '../../Context/cartContext'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/ButtonGroup'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../services/getFirebase'
import {LinkContainer} from 'react-router-bootstrap'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


const estadoInicialCart= {
    
    name: '',
    tel: '',
    email: ''


}


const Cart = () => {
    const {cartList, borrarItemCarrito,itemInCart,nTotal,limpiarCart,add,rest} = useCartContext()
    const [formData, setFormData] = useState(estadoInicialCart)
    
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        let ordenCompra = {}
        ordenCompra.date = firebase.firestore.Timestamp.fromDate(new Date());
        
        ordenCompra.buyer = formData
        ordenCompra.total = nTotal();
        ordenCompra.item = cartList.map(cartItem =>{
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const precio = cartItem.item.precio * cartItem.cantidad;
            return {id,title,precio}
        })
        
        
        const dbQuery = getFirestore();
        dbQuery.collection('orders').add(ordenCompra)
        .then(resp => alert(`la orden de compra es: ${resp.id}`))
        .catch((err) =>console.log(err))
        .finally(()=>{setFormData(estadoInicialCart)
            limpiarCart()  
                    });

                    const itemsToUpdate = dbQuery.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=>i.item.id))

                    const batch = dbQuery.batch();
                
                    itemsToUpdate.get()
                    .then(collection =>{collection.docs.forEach(docSnapshot => {
                        batch.update(docSnapshot.ref,{
                            stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cantidad
                        })
                        batch.commit().then(res => {
                            console.log('resultado batch es: ', res);
                        })
                        
                    });})
        
    }

    //Funcion que controlo los cambios de estado en react para los Formularios
    function handleOnChange(e){
        const {name, value}=e.target;
        setFormData({
            ...formData,
            [name]: value})
    }
    
    
    
    if (cartList.length === 0){
        return <h4 className="text-center" style={{color: 'orange'}}><FontAwesomeIcon icon={faExclamationTriangle}/>Carrito vacio - empezar a comprar<br />
        <LinkContainer to={'/'}>
            <Button className="btn btn-secondary mt-2">Volver a la Tienda</Button>
        </LinkContainer> </h4>
        
    }

  

    return (
        <div className="text-center container">

                    <Table striped bordered hover variant="secondary" responsive > 
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
                                    <td>
                                        <Button className ="btn btn-info btn-sm mr-2" onClick={()=>add(item)}><FontAwesomeIcon icon={faPlus}/></Button>
                                        <Button className ="btn btn-danger btn-sm ml-2"onClick={()=>rest(item)}><FontAwesomeIcon icon={faMinus}/></Button>
                                    </td>
                                    <td><Button className ="btn btn-dark btn-sm " onClick={()=>borrarItemCarrito(item)}><FontAwesomeIcon icon={faTrashAlt}/> </Button></td>
                                    <td>$ {item.item.precio}</td>
                                    <td>$ {item.item.precio*item.cantidad}</td>
                                </tr>
                                ))}
                                <tr>
                                <th colSpan="2">Total Productos:</th>
                                <td >{itemInCart()}</td>
                                <th colSpan="3">Total a pagar: </th>
                                <td >$ {nTotal()}</td>
                                </tr>
                        </tbody>      
                       
                                
                    </Table>
                    <Container className="d-flex justify-content-center">
                    <form       
                        style={{display: 'block'}}
                        onSubmit={handleOnSubmit}
                                
                            >   
                             <Row className='mb-3' > 
                                <Col xs='auto'>
                                    <Form.Label>Nombre y apellido: </Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='ingrese el nombre' 
                                    name='name'
                                    value={formData.name} 
                                    onChange={handleOnChange}
                                    required
                                />  
                                </Col>
                                <Col xs='auto'>
                                    <Form.Label>Telefono: </Form.Label>
                                <Form.Control 
                                    type='number' 
                                    placeholder='ingrese el nro de tel' 
                                    name='tel' 
                                    value={formData.tel}
                                    onChange={handleOnChange}
                                    required
                                />  
                                </Col>
                                <Col xs='auto'>
                                    <Form.Label>Email: </Form.Label>
                                <Form.Control 
                                    type='email' 
                                    placeholder='ingrese el email' 
                                    name='email' 
                                    value={formData.email} 
                                    onChange={handleOnChange}  
                                    required 
                                />  
                                </Col>
                                <Col xs='auto'>
                                    <Form.Label>Confirmar Email: </Form.Label>
                                <Form.Control 
                                    type='email' 
                                    placeholder='Confirme el mail ' 
                                    name='email2' 
                                    value={formData.emailconfirm}
                                    onChange={handleOnChange} 
                                    required       
                                />
                                </Col>
                                <br />
                                </Row>
                                 <button className="btn btn-success btn-sm">Terminar Compra</button>
                                                       
                            </form>
                        </Container>

                        
                                  
                    <LinkContainer to ={'/'}>
                        <Button className ="btn btn-danger btn-sm mt-2" onClick={()=> limpiarCart()}>Vaciar Carrito</Button>
                    </LinkContainer>
                  
            
        </div>
    )
}

export default Cart



