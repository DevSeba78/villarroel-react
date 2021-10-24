import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ItemCount from '../ItemCount'
import {useState} from 'react' // useContext para evitar esportar varios useContext lo exportamos desde el componente que viene. Aca se deja de usar useContext y exportamos 
import { useCartContext } from '../../Context/cartContext'
import CarrouselImg from '../NavBar/CarrouselImg'



const ItemDetails = ({detail}) => {//detail viene de ItemDetailContainer
    
    const [cantSeleccionada, setCantidadSeleccionada] = useState(0) //seteo aca el contador
    const [inventSeleccionada, setinventSeleccionada] = useState(0) //seteo aca el contador

    const {addToCard}= useCartContext() //useCartContext

    const onAdd = (cant,inventario) => {//declaro aca la funcion onadd aca para luego pasar los estados (props) a los hijos
        
    setCantidadSeleccionada(cant)
    setinventSeleccionada(inventario)
    addToCard({item:detail,cantidad: cant})
    console.log(cantSeleccionada);
    console.log(inventSeleccionada);
    
    }
    
    return (
        <>
            <CarrouselImg />
            {<Container>
                <Row xs={1} sm={2} md={3} lg={4} className="g-6 justify-content-md-center mt-2" >
                
                    <Col className="col-md-4 sm-2">
                    <Card  style={{width: '18rem', boxShadow: '8px 14px 5px 0px rgba(0,0,0,0.75)'}}>
                        <Card.Img variant="top" src={detail.img} alt="fotos" style={{width:286.4, height:284.4 }}/>
                        <Card.Body className="justify-content text-center">
                        <Card.Title>Producto: {detail.name}</Card.Title>
                        <Card.Text>
                            Descripcion: {detail.descripcion}<br/>
                            Precio: $ {detail.precio}<br/>
                            
                        </Card.Text>
                        <ItemCount stock={detail.stock-1} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                        
                    </Card>
                    </Col>
               
            </Row>
            </Container>}
            
        </>

   
    )
}

export default ItemDetails
