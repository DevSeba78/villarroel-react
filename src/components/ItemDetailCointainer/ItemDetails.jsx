import React from 'react'
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ItemCount from '../ItemCount'
import {useState} from 'react'



const ItemDetails = ({detail}) => {//detail viene de ItemDetailContainer
    const [cantSeleccionada, setCantidadSeleccionada] = useState(0) //seteo aca el contador

const onAdd = (cant) => {//declaro aca la funcion onadd aca para luego pasar los estados (props) a los hijos
  setCantidadSeleccionada(cant)
  console.log(cantSeleccionada);
  //console.log(count);
}
    return (
        <>
            {<Container>
                <Row className="justify-content-md-center mt-2">
                
                    <Col className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={detail.img} alt="fotos" className="h-150"/>
                        <Card.Body className="justify-content text-center">
                        <Card.Title>Producto: {detail.name}</Card.Title>
                        <Card.Text>
                            Description: {detail.descripcion}<br/>
                            Precio: ${detail.precio}
                        </Card.Text>
                        {/* <Button className="btn btn-outline-info" >+</Button>
                        <Button className="btn btn-outline-primary" >Agregar al carrito</Button>
                        <Button className="btn btn-outline-danger">-</Button> */}
                        {/* <ItemDetails mostrar={MostrarDetalles}/> */}
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                        
                    </Card>
                    </Col>
               
            </Row>
            </Container>}
            
        </>

        // <div className="text-center">
        //     <label><h2>Detalles</h2></label>
        //     <p>Nombre: {detail.name}</p>
        //     <p>Stock: {detail.stock}</p>
        //     <p>ID: {detail.id}</p>
        // </div>
    )
}

export default ItemDetails
