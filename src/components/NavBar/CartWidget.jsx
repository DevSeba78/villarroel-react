import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartWidget = ({count}) => {
    
    return (
        <>
        
           <FontAwesomeIcon icon={faShoppingCart}/>
        </>
    )
}

export default CartWidget
