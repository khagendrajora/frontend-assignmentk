import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {

    const { title, image, price, id } = props.item
    return (
        <>

            <div className="col">
                <div className="card">
                    <div className='card-img'>
                        <img src={image} className="card-img-top" alt={title} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5>${price}</h5>
                        <Link to={`/productDetail/${id}`} className='btn btn-primary'>View Details</Link>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Cart