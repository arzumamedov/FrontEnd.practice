import React, { useContext, useEffect, useState } from 'react'
import './homepage.css'
import { BasketContext } from '../context/BasketContext'
function HomePage() {
    const [product, setProduct] = useState([])
    const { AddBasket } = useContext(BasketContext)

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        fetch("http://localhost:3000/")
            .then((res) => res.json())
            .then((api) => setProduct(api))
    }

    function Delete(id) {
        fetch("http://localhost:3000/" + id, { method: "Delete" })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }



    return (
        <>
            <h1>HomePage</h1>
            <div className='main'>
                {product.map((x) => (
                    <div key={x.id} className='cards'>
                        <div>Name:{x.name}</div>
                        <div>Surname:{x.surname}</div>
                        <div>Age:{x.age}</div>
                        <button onClick={() => { AddBasket(x) }}>AddBasket</button>
                        <button onClick={() => Delete(x._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomePage