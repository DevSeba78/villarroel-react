import React,{ useState, useEffect} from 'react'
import Item from "./Item"





const ItemList = (items) => {
    console.log(items)
    const [item, setItem] = useState([])

    const promesaItemList = new Promise((resolve, reject) => {
        resolve(items.items)
    })


    useEffect(() => {
        promesaItemList.then(itemLis =>{setItem(itemLis);})
        //console.log(promesaItemList);
        //.catch(err => console.error(err));
    })
    console.log("item",item)
    return (
        <>
           {item.map(detalle => <div key={detalle.id} className="card w-25 mt-3 text-center">
                <div className="card-header">{detalle.name}</div>
                <div className="card-body">{detalle.descripcion}</div>
                <Item /> 
           </div>)}
            
        </>
    )
}

export default ItemList
