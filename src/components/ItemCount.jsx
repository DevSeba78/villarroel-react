import React from 'react'
import {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'



const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [inventario, setInventario] = useState(stock)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    
    
   
    function Agregar (){
        if (inventario > 0) {
            setCount(count + 1) 
            setInventario(inventario-1)
            
            
        }
        
    }
    function restart() {
        if (count > 0) {
            setCount(count-1)
            setInventario(inventario+1)
           
        }
        
    }
    const agregarCarrito = ()=> {
        onAdd(count,inventario)
        setCambiarBoton(false);
    }
    return (
        <div>
          
                    <Card.Text>
                    <b>Stock:</b> {inventario} <br />
                     <strong>Cant:</strong> {count}

                    </Card.Text>
                    
                    {cambiarBoton ?
                    <>
                        
                        <Button className="btn btn-outline-info" onClick={Agregar}>+</Button>
                        <Button className="btn btn-outline-primary" onClick={agregarCarrito}>Agregar al carrito</Button>
                        <Button className="btn btn-outline-danger" onClick={restart}>-</Button>
                    </>
                    :
                    <>    
                        <LinkContainer to={'/'}>
                            <Button className="btn btn-outline-info">Continuar Compra</Button>
                        </LinkContainer>
                        <Link to={'/cart'}>
                            <Button className="btn btn-outline-primary" >Finalizar Compra</Button>
                        </Link>
                    </>
                    }
                    
                    
                 
                

            
        </div>
    )
}

export default ItemCount
