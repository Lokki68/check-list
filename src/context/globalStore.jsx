import { createContext, useState } from "react";

export const GlobalStore = createContext(null)

const initialStore = {
  date: '',
  products: {}
}

export default function GlobalState({children}) {
  const [storeChecking, setstoreChecking] = useState( initialStore )

  const handleAddChecking = ({date, products}) => {
    if(storeChecking[date] === date) {
      setstoreChecking({
        ...storeChecking,
        products: products
      })
    } else {
      setstoreChecking({
        date: date,
        products: products
      })
    }
  }

  const resetStoreChecking = () => {
    setstoreChecking( initialStore )
  }


  const store = {
    storeChecking,
    setstoreChecking,
    handleAddChecking,
    resetStoreChecking
  }

  return (
    <GlobalStore.Provider value={store}>
      {children}
    </GlobalStore.Provider>
  )
}