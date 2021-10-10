import React,{useState,useEffect} from 'react'
import ItemDetails from '../ItemDetailCointainer/ItemDetails'
//import {promesa} from "../ItemListContainer"
import {useParams} from"react-router-dom"; 
import Spinner from 'react-bootstrap/Spinner'
import { getFirestore } from '../../services/getFirebase';
//componente que muestra el detalle de cada producto buscado por ID

const ItemDetailsContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    
    useEffect(() => {

        const dbQuery = getFirestore()
        dbQuery.collection('items').doc(id).get()
        .then((resu) => setDetail( {id: resu.id, ...resu.data()} ))
        .catch(err => console.error(err))
        .finally(()=>setLoading(false));

        // promesa.then(resp => setDetail(resp.find(ident=>ident.id === id)))
        // .catch(err => console.error(err))
        // .finally(()=>setLoading(false));

    }, [id])
    console.log(detail)
    return (
        <>
            
            {loading?<Spinner className="justify-content-center" animation="border" role="status">
                     <span className="visually-hidden">Cargando...</span>
                    </Spinner>:<ItemDetails detail={detail}/>}
            
        </>
        )
}

export default ItemDetailsContainer
