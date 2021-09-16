import React,{useState,useEffect} from 'react'
import ItemDetails from '../ItemDetailCointainer/ItemDetails'
import {promesa} from "../ItemListContainer"
import {useParams} from"react-router-dom"; 


const ItemDetailsContainer = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()
    useEffect(() => {
        promesa.then(resp => setDetail(resp.find(ident=>ident.id === id)))
    }, [id])
    console.log(promesa)
    return (
        <>
            <ItemDetails detail={detail}/>
        </>
    )
}

export default ItemDetailsContainer
