import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'
import { LinkContainer } from 'react-router-bootstrap'

const Item = ({articulos}) => {
    

    return (
        <>
            {
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={articulos.img} alt="fotos" className="h-150" />
                        <Card.Body className="justify-content text-center">
                        <Card.Title>Producto: {articulos.title}</Card.Title>
                        <Card.Text>
                           <strong> Descripcion:</strong> {articulos.descripcion}<br/>
                           <strong> Precio:</strong> $ {articulos.precio}
                        </Card.Text>
                        <LinkContainer to={`/detalle/${articulos.id}`}> 
                            <Button className="btn btn-outline-success" >Detalles</Button>
                        </LinkContainer>
                        </Card.Body>
                        
                    </Card>
                    }

           
        </>
    )
}

export default Item
