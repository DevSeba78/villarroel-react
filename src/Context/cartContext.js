import {createContext, useState, useContext} from 'react'


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

    const add = (detail) => {
        const lista = [...cartList]
        const position = lista.findIndex(i => i.item.id === detail.item.id)
        console.log(lista[position].item.stock)
        if (lista[position].item.stock >= 1) {
            lista[position].cantidad += 1
            lista[position].item.stock -= 1
        }else{
            alert( `Producto ${lista[position].item.title} sin Stock` )
        }
        
        
        
        setCartList(lista)
    }
    const rest = (detail) => {
        const lista = [...cartList]
        const position = lista.findIndex(i => i.item.id === detail.item.id)
        if (lista[position].item.stock >= 0) {
            lista[position].cantidad -= 1
            lista[position].item.stock += 1
        }else{
            alert( `Producto ${lista[position].item.title} en 0` )
        }

        // lista[position].cantidad -= 1
        
        setCartList(lista)
    }
    
    return(
        <cartContext.Provider value={{
            cartList,
            addToCard,
            borrarItemCarrito,
            itemInCart,
            nTotal,
            limpiarCart,
            add,
            rest}}>
            {children}
        </cartContext.Provider>
    )
}

