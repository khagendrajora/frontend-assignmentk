import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export const MyCart = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartItem'))
        setProduct(cartData)
    }, [])


    const removeCartHandler = id => {
        const cartItems = JSON.parse(localStorage.getItem('cartItem'))
        //remove from the cart using filter
        const filterCart = cartItems.filter((item) => item.id !== id)
        //update products after (change  the sate of a products)
        setProduct(filterCart)
        //update the local storage data filter
        localStorage.setItem('cartItem', JSON.stringify(filterCart))
        toast.success('item is remove from the cart')
    }

    //increase cart quantity
    const increaseQty = id => {
        const updateProducts = products.map(item => {
            // if (item.id === id && item.quantity < item.stock) {
            return { ...item, quantity: item.quantity + 1 }
            // }
            // return item
        })
        setProduct(updateProducts)
        localStorage.setItem('cartItems', JSON.stringify(updateProducts))
    }

    const decreaseQty = id => {
        const updateProducts = products.map(item => {
            if (item.id === id) {
                while (item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 }
                }

            }
            return item
        })
        setProduct(updateProducts)
        localStorage.setItem('cartItem', JSON.stringify(updateProducts))
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex justify-content-evenly my-4">
                    {!products ?
                        <h2 className='my-5 text-danger text-center'>
                            Your cart is empty
                        </h2>
                        : (
                            <>
                                <h2 className='text-center'>
                                    Your Cart Items
                                </h2>
                                <div className='col-md-8'>
                                    {products.map((item, i) => (
                                        <Fragment key={i}>
                                            <hr />
                                            <div className="row d-flex align-items-center">
                                                <div className="col-2">
                                                    <img src={item.image} alt={item.title} width={'100'} />
                                                </div>
                                                <div className="col-3">
                                                    <span><strong>{item.title}</strong></span>
                                                </div>
                                                <div className="col-3 text-warning">
                                                    Rs.{item.price}
                                                </div>
                                                <div className="col-3" >
                                                    <div className="d-flex">
                                                        <button className='btn btn-primary' onClick={() => increaseQty(item.id)}>+</button>
                                                        &nbsp;
                                                        <input type='number' className='"form-control border-0 text-center ' value={item.quantity} readOnly />
                                                        &nbsp;
                                                        <button className='btn btn-danger' onClick={() => decreaseQty(item.id)}>-</button>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    {item.quantity}
                                                </div>
                                                <div className="col-1">
                                                    <button className='btn btn-danger' onClick={() => removeCartHandler(item.id)}>Delete</button>
                                                </div>

                                            </div>

                                        </Fragment>
                                    ))}
                                </div>
                                <div className='col-md-3'>
                                    <div className="shadow p-2">
                                        <h5>Cart Summary</h5>
                                        <hr />
                                        <span><strong>Units:</strong>{products.reduce((total, item) => total + Number(item.quantity), 0)}</span> <br />
                                        <span><strong>Total:</strong>

                                            {products.reduce((total, item) => total + (item.quantity * item.price), 0)}</span>
                                    </div>
                                </div>
                            </>
                        )

                    }

                </div>
            </div>



        </>
    )
}
