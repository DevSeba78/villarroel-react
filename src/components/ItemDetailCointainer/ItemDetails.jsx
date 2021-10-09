import React from 'react'
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ItemCount from '../ItemCount'
import {useState} from 'react' // useContext para evitar esportar varios useContext lo exportamos desde el componente que viene. Aca se deja de usar useContext y exportamos 
import { useCartContext } from '../../Context/cartContext'
import './itemDetail.css'



const ItemDetails = ({detail}) => {//detail viene de ItemDetailContainer
    
    const [cantSeleccionada, setCantidadSeleccionada] = useState(0) //seteo aca el contador

    const {addToCard}= useCartContext() //useCartContext

    const onAdd = (cant) => {//declaro aca la funcion onadd aca para luego pasar los estados (props) a los hijos
        console.log(cant);
    setCantidadSeleccionada(cant)
    addToCard({item:detail,cantidad: cant})
    console.log(cantSeleccionada);
    
    }
    
    return (
        <>
            {<Container>
                <Row className="justify-content-md-center mt-2">
                
                    <Col className="col-md-4 detailCard">
                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={detail.img} alt="fotos" className="h-150"/>
                        <Card.Body className="justify-content text-center">
                        <Card.Title>Producto: {detail.name}</Card.Title>
                        <Card.Text>
                            Description: {detail.descripcion}<br/>
                            Precio: ${detail.precio}
                        </Card.Text>
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                        
                    </Card>
                    </Col>
               
            </Row>
            </Container>}
            
        </>

   
    )
}

export default ItemDetails
