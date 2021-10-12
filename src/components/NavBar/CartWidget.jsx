//import {useCartContext} from '../../Context/cartContext'
//import itemDetails from '../ItemDetailCointainer/ItemDetails'
const CartWidget = ({count}) => {
    // const {cartList} = useCartContext()
    // if (cartList.length !== 0){

    // }
    return (
        <>
        
           <i className="fas fa-shopping-cart w-25"> {count}</i> 
        </>
    )
}

export default CartWidget
