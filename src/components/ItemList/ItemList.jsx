import Item from "./Item"
//import ItemListContainer from "../ItemListContainer"

const ItemList = ({productos}) => {
    console.log(productos)
      
    return (
        <>
         {productos.map(articulos => <Item articulos={articulos}/>
         )}
            
        </>
    )
}

export default ItemList
