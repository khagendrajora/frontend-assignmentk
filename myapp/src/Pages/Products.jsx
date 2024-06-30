import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from '../Components/Cart'

const Products = () => {
    const [product, setProduct] = useState([])

    const [limit, setLimit] = useState(4)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setProduct(response.data)

            }
            catch (err) {
                console.log(err)
            }
        }
        setTimeout(() => {
            fetchProduct()

        })
    })

    return (
        <>
            <div classNameName="container-fluid">
                <div className="row row-cols-1 mx-5 row-cols-md-4 g-4">
                    {
                        product.slice(0, limit).map((product, i) => (
                            <Cart key={i} item={product} />
                        )
                        )
                    }
                    <div className="my-2">
                        {
                            limit < product.length &&
                            <button className='btn btn-warning' onClick={() => setLimit(limit + 4)}>Load More</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
