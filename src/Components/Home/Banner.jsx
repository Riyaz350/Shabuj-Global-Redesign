import { motion } from "framer-motion"
import {  useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowDownLong } from "react-icons/fa6";
import bgvideo from '../../assets/bgvideo.mp4'
 import './textwheel.css'
import './home.css'
 import ReactCurvedText from "react-curved-text";
const Banner = () => {
    
     
     

    const [enquire, setEnquire] = useState(1)
    const btnStyle = 'text-white z-10 rounded-full '
    return (
        <div className="   relative h-screen md:h-full w-full">
             <video   className="h-full w-fit object-cover" src={bgvideo} autoPlay loop  muted/>
            <div className={`absolute  left-0 lg:pl-20 space-y-10 flex flex-col  lg:items-start justify-center items-center ${window.innerWidth  <= 1300 & window.innerWidth >= 768 ? 'top-[40px]':'top-1/4'}`}>
                <div className={`flex flex-col   justify-between items-start h-full ${window.innerWidth <= 1300  ? 'space-y-5': 'space-y-20'}`}>
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
            {/* <TextSpinner/> */}
 

            <div className="  right-1/2   bg-[#EFF6FF] -mt-32  justify-center items-center mx-auto  hidden lg:flex">
            <ReactCurvedText 
            width='240'
            height='240'
            cx='120'
            cy='120'
            rx='85'
            ry='85'
            startOffset={0}
            reversed={true}
            text='DREAM BIG STUDY ABROAD.'
            textProps={{"style": {"fontSize": 18, "fontWeight": "bold"},   "textLength": "528px"}}
            textPathProps={{"fill": "#1f1f1f"}}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{"className": "rotating-curved-text-wheel"}} />
            <motion.div initial={{y:-20}} animate={{y:20}} transition={{duration:1, repeat:Infinity}} className="absolute w-[50px] h-[50px]   text-5xl rounded-full"><FaArrowDownLong /></motion.div>

            </div>

            
             
        </div>
    );
};

export default Banner;