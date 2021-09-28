import {createContext, useState, useContext} from 'react'

const cartContext = createContext([])

export const useCartContext = ()=> useContext(cartContext)//exporto cartcontext y evito usar varios useContext

export default function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])
    

    function addToCard(detail){//aca va la logica de duplicado
        
        // let productoSeleccionado = detail.find(prod=>prod.item.id === detail.item.id) *****ver esta parte del codigo*****
        // if(cartList.hasOwnProperty(detail.id)){
        //     productoSeleccionado.cantidad = cartList[detail.id].cantidad+1
            setCartList([...cartList,detail])
        //}
        console.log(cartList);
    }
    function limpiarCart(detail){
        cartList([])
    }
    //console.log(cartList);
    return(
        <cartContext.Provider value={{
            cartList,
            addToCard,
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