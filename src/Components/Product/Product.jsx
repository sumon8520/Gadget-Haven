import React from 'react';

const Product = ({ product }) => {
    const { product_title, product_img, price } = product;
    return (
        <div>
            <div className='bg-white shadow-2xl p-5 rounded-2xl text-center space-y-3.5'>
                <div>
                    <img className='bg-[#D9D9D9] rounded-lg h-[300px] w-[400px] object-cover' src={product_img} alt="" />
                </div>
                <h2 className='text-xl font-semibold'>{product_title}</h2>
                <p className='font-medium'>{price}</p>
                <button className='btn'>View Details</button>
            </div>
        </div>
    );
};

export default Product;