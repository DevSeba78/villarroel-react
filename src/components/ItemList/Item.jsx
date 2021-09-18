//import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
//import ItemDetails from '../ItemDetailCointainer/ItemDetails'
//import ItemCount from '../ItemCount'


// const MostrarDetalles = () =>{
//     const [show, setShow] = useState(false)
//     setShow(!show)
// }


const Item = ({articulos}) => {
    

    return (
        <>
            {
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={articulos.img} alt="fotos" />
                        <Card.Body className="justify-content text-center">
                        <Card.Title>Producto: {articulos.name}</Card.Title>
                        <Card.Text>
                            Description: {articulos.descripcion}
                        </Card.Text>
                        <Link to={`/detalle/${articulos.id}`}> 
                            <Button className="btn btn-outline-success" >Detalles</Button>
                        </Link>
                        {/* <ItemDetails mostrar={MostrarDetalles}/> */}
                        {/* //<ItemCount /> */}
                        </Card.Body>
                        
                    </Card>
                    }

            {/* {<div key={articulos.id} className=" container card w-25 mt-3 text-center ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={articulos.img} alt="fotos" />
                    <Card.Body>
                        <Card.Title>Producto: {articulos.name}</Card.Title>
                        <Card.Text>
                        Description: {articulos.descriptiondescripcion}
                        </Card.Text>
                        <Button className="btn btn-outline-success">Detalles</Button>
                    </Card.Body>
                </Card>
            </div> } */}


            {/* <div key={articulos.id} className="card w-25 mt-3 text-center ">    
                <div className="card-header">{articulos.name}</div>
                <div className="card-body">
                    <img src={articulos.img} alt="fotos"/><br />
                    {articulos.descripcion}</div>
                <div className="card-footer">
                    <button className="btn btn-outline-success">Detalles</button>
                </div>
            </div> */}
        </>
    )
}

export default Item
