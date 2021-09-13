import ItemCount from "./ItemCount";
import{ useState, useEffect} from "react";
import ItemList from "./ItemList/ItemList";

const Producto = [
    { id: '1', name: 'ruca1', descripcion: 'mantel', stock: 8 },
    { id: '2', name: 'ruca2', descripcion: 'bazar', stock: 2 },
    { id: '3', name: 'ruca3', descripcion: 'deco', stock: 5 },
    { id: '4', name: 'ruca4', descripcion: 'bazar', stock: 3 }
  ];
 
  const promesa = new Promise((resolve, reject) => {//resolve(resuelvo) y reject(rechazado) son funciones clase 6 Promise
    const status ="success"
    if (status === "success") {
        setTimeout(() => {
            resolve(Producto);//asigno el producto a resolve
            console.log(promesa);
          }, 3000); //carga despues de 3seg
    }else{
        reject("algo salio mal")
    }
    

})


//return loquesea.json() para parsear el json

const ItemListContainer = ({name, onAdd}) => {
    const [productos, setProductos] = useState([])//array vacio para luego setearlo en productos
    //const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        promesa.then(resu =>{
            setProductos(resu)
           // console.log(resu);
        })
        .catch(err => console.error(err))
        //.finally(()=>setLoading(false));
                
    }, [])
    
    console.log(productos);
    return (
        <>
            <p className="text-center mt-3">Bienvenido <strong>{name}</strong> a la app de Ruca </p>
            {/* {productos.map(item => <div key={item.id} className="card w-25 mt-3 text-center justify-content-center">
                
                <div className="card-header">{item.name}</div>
                <div className="card-body">{item.descripcion}</div>
                <div className="card-footer">
                    <button className="btn-outline-success btn" onClick={()=>setLoading(!loading)}>Detalles</button>
                </div>
                
            </div>)} */}
            <ItemList items={Producto}/>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer
