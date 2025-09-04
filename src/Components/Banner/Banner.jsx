import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
                <div className='text-center space-y-3 text-white overflow-hidden bg-[#9538E2] '>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                    <p className='font-semibold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <button className='btn bg-white text-black rounded-2xl'>Shop Now</button>
                    <div className='mx-auto'>
                        <img className='rounded-2xl mb-10 w-full h-full lg:w-[1111px] lg:h-[620px] object-cover mx-auto px-2.5' src={banner} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default Banner;