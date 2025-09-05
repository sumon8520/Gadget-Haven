import AllCategory from '../AllCategory/AllCategory';
import AllProduct from '../AllProduct/AllProduct';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='flex gap-7 w-[1500px] mx-auto justify-center'>
                <div className='mt-32'>
                    <AllCategory></AllCategory>
                </div>
                <AllProduct></AllProduct>
            </div>
        </div>
    );
};

export default Home;