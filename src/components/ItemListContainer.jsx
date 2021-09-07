import ItemCount from "./ItemCount";

const ItemListContainer = ({name, onAdd}) => {
    
    
    return (
        <>
            <p className="text-center mt-3">Bienvenido <strong>{name}</strong> a la app de Ruca </p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer
