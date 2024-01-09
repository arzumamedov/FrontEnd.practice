import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])



    function AddBasket(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        if (index === -1) {
            setBasket([...basket, { ...item, count: 1 }])
            return
        }
        console.log(index);
        basket[index].count++
        setBasket([...basket])
    }


    function RemovefromBasket(item) {
        setBasket(basket.filter((x) => x._id !== item._id))
    }



    return (
        <BasketContext.Provider value={{ basket, AddBasket, RemovefromBasket }} >{children}</BasketContext.Provider>
    )
}

export default BasketProvider