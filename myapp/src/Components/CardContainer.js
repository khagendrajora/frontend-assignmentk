import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './Cart'
import { ColorRing } from 'react-loader-spinner'

const CardContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setProduct(response.data)
                setLoading(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        setTimeout(() => {
            fetchProduct()

        }, 2000)
    })
  
    return (
        <>

            <div classNameName="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {loading ? (
                        <div style={{ height: '50vh' }} className='d-flex justify-center m-auto align-item-center '>

                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                    ) :
                        (
                            product.map((product, i) => (             
                                <Cart key={i} item={product} />
                            )


                            ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardContainer
