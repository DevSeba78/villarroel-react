import React,{useState,useEffect} from 'react'
import ItemDetails from '../ItemDetailCointainer/ItemDetails'
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

        }, [id])
   
    return (
        <>
            
            {loading?
                    <div className="d-flex justify-content-center">
                    <Spinner className="justify-content-center" animation="border" role="status">
                     <span className="visually-hidden">Cargando...</span>
                    </Spinner></div>:<ItemDetails detail={detail}/>}
            
        </>
        )
}

export default ItemDetailsContainer
