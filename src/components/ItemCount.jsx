import React from 'react'
import {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'



const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    
   
    function Agregar (){
        if (count <5) {
            setCount(count + 1) 
            
        }
        
    }
    function restart() {
        if (count > 1) {
            setCount(count-1)
           
        }
        
    }
    const agregarCarrito = ()=> {
        onAdd(count)
        setCambiarBoton(false);
    }
    return (
        <div>
          
                    <Card.Text>
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
