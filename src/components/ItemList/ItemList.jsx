import Item from "./Item"



const ItemList = ({productos}) => {
    
      
    return (
        <>
        <div className="container justify-content-center d-flex aling-items-center">
           <div className="row"> 
                {productos.map(articulos =>(
                    <div className="col-3 mt-2 detailCard" key={articulos.id}>
                        <Item articulos={articulos}/>
             </div>)
                )}
            </div> 
            </div>  
        </>
    )
}

export default ItemList
