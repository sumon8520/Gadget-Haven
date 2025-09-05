import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                {
                    products.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProduct;