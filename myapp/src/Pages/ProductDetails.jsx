import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'      

import { ToastContainer, toast } from 'react-toastify'   
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const id = params.product_id
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItem')) || [] 
        const productItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            rating: product.rating,
            quantity: 1
        }

        const existingItem = cartItems.find((item) => item.id === product.id)
        if (existingItem) {
            toast.error('Product already in the cart')

        }
        else {
            cartItems.push(productItem)
            localStorage.setItem('cartItem', JSON.stringify(cartItems))
            toast.success(`${productItem.title} added to cart`)
        }
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <div className="container my-5 flex d-flex">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-md-5">
                        <img src={product.image} alt={product.title} width={'300'} />
                    </div>
                    <div className="col-md-6"></div>
                    <h2>{product.title}</h2>
                    <h2>${product.price}</h2>
                    <h3>Category:{product.category}</h3>
                    <p>{product.description}</p>
                    <div className='my-2'>
                        <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails