import {createContext, useState, useContext} from 'react'
//import itemCount from '../../src/components/ItemCount'

const cartContext = createContext([])

export const useCartContext = ()=> useContext(cartContext)//exporto cartcontext y evito usar varios useContext

export default function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])
    

    function addToCard(detail){//detail es un objeto que viene de itemDetail (addToCard)
        
        let productoSeleccionado = [...cartList]

            if (productoSeleccionado.some(i => i.item.id === detail.item.id)) {
                productoSeleccionado.find(i => i.item.id === detail.item.id).cantidad +=detail.cantidad
               
                setCartList(productoSeleccionado)}
         
        else{

            setCartList([...cartList,detail])
        };       
       
    }

    const borrarItemCarrito = (detail) => {//borra item de cada producto en el cart
        const borrarProducto = cartList.filter(c => c.item.id !== detail.item.id);
        setCartList([...borrarProducto])
    }
    const limpiarCart =()=>{
        setCartList([]);
    }

    const itemInCart =()=>{
        return cartList.reduce((acc,valor)=>acc + valor.cantidad,0)
    }

    const nTotal = ()=>{

        return cartList.reduce((acc,valor)=>acc + (valor.cantidad * valor.item.precio),0)
    } 
    console.log(cartList);
    return(
        <cartContext.Provider value={{
            cartList,
            addToCard,
            borrarItemCarrito,
            itemInCart,
            nTotal,
            limpiarCart}}>
            {children}
        </cartContext.Provider>
    )
}

// export default function cartContextProvider({children}) {
//     const [carList, setCartList] = useState([])

//     function addToCard(item) {
//         setCartList(...carList,item)
//     }
//     function borrarLista(){
//         carList([])
//     }
//     return
//         (
//             <>
//         <cartContext.Provider value={{
//             carList,
//              addToCard,
//              borrarLista
//              }}>
//             {children}
//         </cartContext.Provider>
//         </>
//         )
//  }