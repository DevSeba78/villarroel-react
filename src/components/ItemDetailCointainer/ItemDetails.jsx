import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
//import ItemCount from '../ItemCount'

const ItemDetails = ({detail}) => {
    return (
        <>
            {<Container>
                <Row className="justify-content-md-center mt-2">
                
                    <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={detail.img} alt="fotos" />
                        <Card.Body className="justify-content text-center">
                        <Card.Title>Producto: {detail.name}</Card.Title>
                        <Card.Text>
                            Description: {detail.descripcion}
                        </Card.Text>
                        <Button className="btn btn-outline-info" >+</Button>
                        <Button className="btn btn-outline-primary" >Agregar al carrito</Button>
                        <Button className="btn btn-outline-danger">-</Button>
                        {/* <ItemDetails mostrar={MostrarDetalles}/> */}
                        {/* //<ItemCount /> */}
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
