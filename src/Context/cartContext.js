import {createContext, useState, useContext} from 'react'

const cartContext = createContext([])

export const useCartContext = ()=> useContext(cartContext)//exporto cartcontext y evito usar varios useContext

export default function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])
    

    function addToCard(detail){//detail es un objeto que viene de itemDetail (addToCard)
        
        let productoSeleccionado = [...cartList]

            if (productoSeleccionado.some(i => i.item.id === detail.item.id)) {
                productoSeleccionado.find(i => i.item.id === detail.item.id).cantidad +=detail.cantidad
                //console.log(productoSeleccionado)
                setCartList(productoSeleccionado)}
                //  else {setCart([...cart, detail])}}

       
        // if(productoSeleccionado.hasOwnProperty(detail.item.id)) {
           
        //     productoSeleccionado.find(i => i.item.id === detail.item.id).cantidad +=detail.cantidad
        //     //setCartList(productoSeleccionado)
           
        //     setCartList([...cartList])
        // }
        else{

            setCartList([...cartList,detail])
        }
       

       
       
    }
    function limpiarCart(detail){
        cartList([])
    }
    console.log(cartList);
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