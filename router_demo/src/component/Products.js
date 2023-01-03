import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div>
                <h1>All Products</h1>
            </div>
            <nav>
                <Link to='shirts'> Shirts</Link>
                <Link to='jeans'> Jeans</Link>
            </nav>
            {/* Outlet are ues to display the child route  */}
            <Outlet/>

        </>

    )
}

export default Products
