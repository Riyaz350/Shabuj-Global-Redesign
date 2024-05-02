import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowDownLong } from "react-icons/fa6";
import bgvideo from '../../assets/bgvideo.mp4'
 import './textwheel.css'
import './home.css'
const Banner = () => {
    
     
    useEffect(() => {
        const text = document.querySelector('.text p');
        if (text) {
        text.innerHTML = text.innerText.split("").map(
            (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
        ).join("");
        }
    }, []);

    const [enquire, setEnquire] = useState(1)
    const btnStyle = 'text-white z-10 rounded-full '
    return (
        <div className="   relative h-screen md:h-full w-full">
             <video   className="h-full w-fit object-cover" src={bgvideo} autoPlay loop  muted/>
            <div className="absolute top-1/4 left-0 lg:pl-20   space-y-10 flex flex-col  lg:items-start justify-center items-center">
                <div className={`flex flex-col   justify-between items-start h-full ${window.innerWidth <= 1300 ? 'space-y-5': 'space-y-20'}`}>
                <div className=" space-y-5 poppins">
                    <h1 className="z-10 lg:max-w-5xl lg:text-[90px] md:text-5xl text-4xl font-bold text-center lg:text-start text-[#00399F]">Start Your Path to   Global Education</h1>
                    <p className="z-10 text-xl text-center lg:text-start">We take pride in our ability to help students achieve their <br/> academic goals and succeed in life.</p>

                </div>
                <div className="inter w-fit mx-auto lg:mx-0 z-10 backdrop-blur-sm border-white border-2 gap-5 flex  bg-white/30 rounded-full p-2">

                    <button className={btnStyle}
                    onMouseEnter={()=>setEnquire(1)}  
                    style={{
                        backgroundColor: enquire ? "#004AC8" : "transparent",
                        color: "#ffffff",
                        padding: enquire ? ".5rem 2rem" : ".5rem",  
                        transition: "padding 0.5s ease, background-color 0.1s ease",  
                    }}>
                            <span  className="flex gap-2 items-center justify-center text-xl">Enquire {enquire  ? <motion.p initial={{scale:0, x:10, y:10}} whileInView={{scale:1, x:0, y:0}} transition={{duration:.2}}><GoArrowUpRight className="  text-2xl"/></motion.p> : <></>}</span>
                    </button>
                    
                    <button className={btnStyle}
                    onMouseEnter={()=>setEnquire(null)}  
                    style={{
                        backgroundColor: !enquire ? "#004AC8" : "transparent",
                        color: "#ffffff",
                        padding: !enquire ? ".5rem 2rem" : ".5rem",  
                        transition: "padding 0.5s ease, background-color 0.5s ease",  
                    }}
                    >
                            <span className="flex gap-2 items-center justify-center text-xl">Apply {!enquire && <motion.p initial={{scale:0, x:10, y:10}} whileInView={{scale:1, x:0, y:0}} transition={{duration:.2}}><GoArrowUpRight className="  text-2xl"/></motion.p>}</span>
                    </button>
                
                </div>
                </div>

                

            </div>

            <div className="poppins lg:flex hidden absolute w-fit mx-auto  bottom-14 left-1/3 lg:ml-48 h-10">
                    <div className="relative bg-white w-[200px] h-[200px] rounded-full   flex justify-center items-center">
                        <div className="absolute w-[150px] h-[150px] flex justify-center items-center text-5xl rounded-full"><FaArrowDownLong /></div>
                        <p   className="poppins text w-full"><p>DREAM BIG STUDY ABROAD.</p></p>


                        {/* <div className="text absolute w-full h-full"><p>BIG</p></div>
                        <div className="text absolute w-full h-full"><p>STUDY</p></div>
                        <div className="text absolute w-full h-full"><p>ABROAD </p></div> */}

                    </div>
            </div>

            
             
        </div>
    );
};

export default Banner;