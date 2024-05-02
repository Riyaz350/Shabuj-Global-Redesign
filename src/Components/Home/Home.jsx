 import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';
import CoreStrength from './CoreStrength';
import Destination from './Destination';
import Form from './Form';
import Guide from './Guide';
import Success from './Success';
import Universities from './Universities';

const Home = () => {
    
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Guide/>
            <CoreStrength/>
            <Success/>
            <Destination/>
            <Universities/>
            <Form/>
            <Footer/>
        </div>
    );
};

export default Home;