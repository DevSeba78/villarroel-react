import ItemCount from "./ItemCount";
import{ useState, useEffect} from "react";
import ItemList from "./ItemList/ItemList";


const Producto = [
    { id: '1', name: 'ruca1', descripcion: 'mantel', stock: 8, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-bandeja-linea-farm1-ff30f4a83e4bdec4c116157608071720-240-0.jpg" },
    { id: '2', name: 'ruca2', descripcion: 'bazar', stock: 2, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-jarra-blana-esgrafiada-11-938f1325ca27f38b9416200640972411-240-0.jpg" },
    { id: '3', name: 'ruca3', descripcion: 'deco', stock: 5, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-volados-gris-blanco-31-c397650e12b2e7c0d816173165003341-240-0.jpg" },
    { id: '4', name: 'ruca4', descripcion: 'bazar', stock: 3, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-serigrafia-alamo-arena1-8b54fd37cd8c89139b16173132141470-240-0.jpg" }
  ];
 
  const promesa = new Promise((resolve, reject) => {//resolve(resuelvo) y reject(rechazado) son funciones clase 6 Promise
    const status ="success"
    if (status === "success") {
        setTimeout(() => {
            resolve(Producto);//asigno el producto a resolve
            console.log(promesa);
          }, 2000); //carga despues de 3seg
    }else{
        reject("algo salio mal")
    }
})
const productoSolo = {id: '1', name: 'ruca1', descripcion: 'mantel', stock: 8, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-bandeja-linea-farm1-ff30f4a83e4bdec4c116157608071720-240-0.jpg" }

export const promesaSolo = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(productoSolo)
    },2000)
})
 
//return loquesea.json() para parsear el json

const ItemListContainer = ({name, onAdd}) => {
    const [productos, setProductos] = useState([])//array vacio para luego setearlo en productos
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        promesa.then(resu =>{
            setProductos(resu) //guardo el array que recibo y lo seteo en productos
           // console.log(resu);
        })
        .catch(err => console.error(err))
        .finally(()=>setLoading(false));
                
    }, [])
    
    console.log(productos);
    return (
        <>
            <p className="text-center mt-3">Bienvenido <strong>{name}</strong> a la app de Ruca </p>
             
            {loading ?<h4>Cargando page....</h4>: <ItemList productos={productos}/>}
            
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer
