import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate()
    const { image, title, price } = props.data
    const { id } = props.id

    function handleProduct() {
        navigate(`/product/${id}`)
    }

    return (
        <div onClick={handleProduct} className="card w-96 bg-base-100 shadow-xl transition-all duration-75 cursor-pointer hover:shadow-2xl">
            <figure className="px-3 pt-3">
                <img src={image} alt="Shoes" className="rounded-xl h-64 md:h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Card