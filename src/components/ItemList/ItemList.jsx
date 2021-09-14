import Item from "./Item"


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
