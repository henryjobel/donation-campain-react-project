

import Banner from '../../Components/Banner/Banner';
import DonationCards from '../../Components/DonationCards/DonationCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='pt-44 container mx-auto'>
            <DonationCards></DonationCards>
            </div>
        </div>
    );
};

export default Home;