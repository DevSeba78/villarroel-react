
import{ useState, useEffect} from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import { getFirestore } from "../services/getFirebase";
import CarrouselImg from "./NavBar/CarrouselImg";



const Producto = [
    // { id: '1',categoria: "Bazar",name: 'ruca1', descripcion: 'mantel', stock: 8,precio: 350, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-bandeja-linea-farm1-ff30f4a83e4bdec4c116157608071720-240-0.jpg" },
    // { id: '2',categoria: "Bazar",name: 'ruca2', descripcion: 'mantel', stock: 8,precio: 150, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-bandeja-linea-farm1-ff30f4a83e4bdec4c116157608071720-240-0.jpg" },
    // { id: '3',categoria: "Bazar",name: 'ruca3', descripcion: 'mantel', stock: 8,precio: 350, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-bandeja-linea-farm1-ff30f4a83e4bdec4c116157608071720-240-0.jpg" },
    // { id: '4',categoria: "Bazar",name: 'ruca4', descripcion: 'mantel', stock: 8,precio: 350, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-bandeja-linea-farm1-ff30f4a83e4bdec4c116157608071720-240-0.jpg" },
    // { id: '5',categoria: "Bazar",name: 'ruca5', descripcion: 'bazar', stock: 2, precio: 1500,img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/c-jarra-blana-esgrafiada-11-938f1325ca27f38b9416200640972411-240-0.jpg" },
    // { id: '6',categoria: "Deco",name: 'ruca6', descripcion: 'Deco', stock: 5,precio: 750, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-volados-gris-blanco-31-c397650e12b2e7c0d816173165003341-240-0.jpg" },
    // { id: '7',categoria: "Deco",name: 'ruca7', descripcion: 'bazar', stock: 3,precio: 2550, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-serigrafia-alamo-arena1-8b54fd37cd8c89139b16173132141470-240-0.jpg" },
    // { id: '8',categoria: "Deco",name: 'ruca8', descripcion: 'bazar', stock: 3,precio: 2550, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-serigrafia-alamo-arena1-8b54fd37cd8c89139b16173132141470-240-0.jpg" },
    // { id: '9',categoria: "Manteleria",name: 'ruca9', descripcion: 'bazar', stock: 5,precio: 650, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-serigrafia-alamo-arena1-8b54fd37cd8c89139b16173132141470-240-0.jpg" },
    // { id: '10',categoria: "Manteleria",name: 'ruca10', descripcion: 'bazar', stock: 5,precio: 650, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-serigrafia-alamo-arena1-8b54fd37cd8c89139b16173132141470-240-0.jpg" },
    // { id: '11',categoria: "Manteleria",name: 'ruca', descripcion: 'bazar', stock: 7,precio: 3850, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/357/585/products/m-serigrafia-alamo-arena1-8b54fd37cd8c89139b16173132141470-240-0.jpg" }
  ];
 

  export const promesa = new Promise((resolve, reject) => {//resolve(resuelvo) y reject(rechazado) son funciones clase 6 Promise
    const status ="success"
    if (status === "success") {
        setTimeout(() => {
            resolve(Producto);//asigno el producto a resolve
            
          }, 2000); //carga despues de 3seg
    }else{
        reject("algo salio mal")
    }
})


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])//array vacio para luego setearlo en productos
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()
        
    useEffect(() => {

        if (idCategoria) {

            const dbQuery = getFirestore()
            dbQuery.collection('items').where('categoriaId','==', idCategoria).get()
            .then((resu) => {setProductos(resu.docs.map(item => ( {id:item.id, ...item.data()} ) )) })
            .catch(err => console.error(err))
            .finally(()=>setLoading(false));
        }else{

            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then((resu) => {setProductos(resu.docs.map(item => ( {id:item.id, ...item.data()} ) )) })
            .catch(err => console.error(err))
            .finally(()=>setLoading(false));
        }
        
    }, [idCategoria])
    
 
    return (
        <>
            <CarrouselImg />
            <p className="text-center mt-3">Bienvenido a la app de Ruca </p>
             
            {loading ?
                    <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" className ="d-flex justify-content-center">
                     <span className="visually-hidden">Cargando...</span>
                    </Spinner></div> : <ItemList productos={productos}/>
                    }
            
            
        </>
    )
}

export default ItemListContainer
