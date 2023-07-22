import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <>
            <div className="container-fluid" style={{
                backgroundColor: 'grey',
                height: '150px'
            }}>
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2  mx-auto">

                            <ul className="nav flex-row justify-content-between">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="products" className="nav-link p-0 text-body-secondary">Products</Link></li>

                            </ul>
                        </div>
                    </div>
                    <p className="text-center">&copy; 2023 Company, Inc. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}

export default Footer