import Marquee from "react-fast-marquee";
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img5 from '../../assets/5.png'
import img8 from '../../assets/8.png'

import img24 from '../../assets/24.png'
import img25 from '../../assets/25.png'
import img26 from '../../assets/26.png'
import img27 from '../../assets/27.png'
import img28 from '../../assets/28.png'

import './home.css'

const Universities = () => {
    return (
        <div className="poppins text-center my-10">
            <h1 className="text-4xl text-[#004AC8] font-bold">Universities Across The Globe</h1>
            <h1 className="text-5xl font-bold">The Choice is Endless</h1>
            <Marquee pauseOnHover autoFill speed={200}
            >
                 <img className="px-2 lg:px-4 " src={img1} alt="" />
                 <img className="px-2 lg:px-4 " src={img2} alt="" />
                 <img className="px-2 lg:px-4 " src={img3} alt="" />
                 <img className="px-2 lg:px-4 " src={img5} alt="" />
                 <img className="px-2 lg:px-4 " src={img8} alt="" />
            </Marquee>
            <Marquee pauseOnHover autoFill direction="right" speed={200}
            >
                 <img className="px-2 lg:px-4 " src={img24} alt="" />
                 <img className="px-2 lg:px-4 " src={img25} alt="" />
                 <img className="px-2 lg:px-4 " src={img26} alt="" />
                 <img className="px-2 lg:px-4 " src={img27} alt="" />
                 <img className="px-2 lg:px-4 " src={img28} alt="" />
            </Marquee>

            <button className=' bg-[#004AC8] text-white px-16 py-2 my-10 rounded-3xl mx-auto w-fit'>View All Universities</button>

        </div>
    );
};

export default Universities;