import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [products, setProducts] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const fetchProduccts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error('error in fetching', error)
            }
        }
        fetchProduccts();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filteredResult = products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())

            );
            setSearchResults(filteredResult)
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, products])
    return (
        <>

            <header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <img src='' alt='' />
                            </Link>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <Link to="/" className="nav-link text-white">

                                        Home
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/products" className="nav-link text-white">

                                        Products
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-2 border-bottom mb-3">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" value={searchTerm} onChange={handleSearch} />
                        </form>

                        <div className="text-end">
                            <Link to='/login' className="btn btn-light text-dark me-2">Login</Link>
                            <Link to='/signup'> <button type="button" className="btn btn-primary">Sign-up</button></Link>
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-nowrap">
                    {searchResults && searchResults.map((item, i) =>
                        <div className="card d-flex flex-wrap flex-row w-25"  >
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h5>${item.price}</h5>
                                <Link onClick={() => setSearchTerm("")} to={`/productDetail/${item.id}`} className='btn btn-primary'>View Details</Link>

                            </div>
                        </div>
                    )}
                </div>

            </header>
        </>
    )
}

export default Header