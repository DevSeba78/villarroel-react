import Item from "./Item"


const ItemList = ({productos}) => {
    console.log(productos)
      
    return (
        <>
        <div className="container justify-content-center d-flex aling-items-center">
           <div className="row"> 
                {productos.map(articulos =>(
                    <div className="col-md-4  mt-2" key={articulos.id}>
                        <Item articulos={articulos}/>
             </div>)
                )}
            </div> 
            </div>  
        </>
    )
}

export default ItemList
