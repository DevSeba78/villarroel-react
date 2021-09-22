// import {useState,createContext} from 'react'
// const cartContext = createContext([])

// export default function cartContextProvider({children}) {
//     const [carList, setCartList] = useState([])

//     function addToCard(item) {
//         setCartList(...carList,item)
//     }
//     function borrarLista(){
//         carList([])
//     }
//     return
//         (
//         <cartContext.Provider value={{
//             carList,
//              addToCard,
//              borrarLista
//              }}>
//             {children}
//         </cartContext.Provider>
        
//         )
// }