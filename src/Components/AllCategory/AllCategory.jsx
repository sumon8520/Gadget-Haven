import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const AllCategory = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Link to="/allcategory">
               <div className='flex flex-col gap-y-2 shadow-2xl p-6 rounded-lg'>
                    <button className='btn'>All Product</button>
                    <button className='btn'>SmartPhone</button>
                    <button className='btn'>Laptops</button>
                    <button className='btn'>Accessories</button>
                    <button className='btn'>Iphone</button>
                </div>
            </Link>
            {
                data.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default AllCategory;