import React,{useState,useEffect} from 'react'
import ItemDetails from '../ItemDetailCointainer/ItemDetails'
import {promesaSolo} from "../ItemListContainer"


const ItemDetailsContainer = () => {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        promesaSolo.then(resp => setDetail(resp))
    }, [])
    return (
        <>
            <ItemDetails detail={detail}/>
        </>
    )
}

export default ItemDetailsContainer
