import React, { useContext, useState } from 'react'
import { BasketContext } from '../context/BasketContext'

function BasketPage() {
    // const [product, setProduct] = useState([])
    const { basket,RemovefromBasket } = useContext(BasketContext)

    return (
        <>
            <h1>BasketPage</h1>
            <div className='main'>
                {basket.map((item) => (
                    <div key={item.id} className='cards'>
                        <div>Name:{item.name}</div>
                        <div>Surname:{item.surname}</div>
                        <div>Age:{item.age}</div>
                        <div>Count:{item.count}</div>
                        <button onClick={() => { RemovefromBasket(item) }}>Remove from Basket</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BasketPage