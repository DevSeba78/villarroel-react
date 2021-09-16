import React from 'react'
import {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    //const [canti, setCanti] = useState(stock)
    function Agregar (){
        if (count <5) {
            setCount(count + 1) 
            //setCanti(stock-1)
            //console.log("stock",canti);
        }
        
    }
    function restart() {
        if (count > 1) {
            setCount(count-1)
            // setCanti(stock+1)
            // console.log("stock",canti);
        }
        
    }
    const agregarCarrito = ()=> {
        onAdd(count)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body className="text-center">
                    {/* <Card.Title>Algo para comprar</Card.Title> */}
                    <Card.Text>
                    {count}
                    </Card.Text>
                    <Button className="btn btn-outline-info" onClick={Agregar}>+</Button>
                    <Button className="btn btn-outline-primary" onClick={agregarCarrito}>Agregar al carrito</Button>
                    <Button className="btn btn-outline-danger" onClick={restart}>-</Button>
                   
                </Card.Body>
            </Card>

            
        </div>
    )
}

export default ItemCount
