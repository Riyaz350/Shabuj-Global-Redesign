import power from '../../assets/cuate.png'
import city from '../../assets/City Outline.png'
import star from '../../assets/Star 3.png'
import img1 from '../../assets/counter/1.png'
import img2 from '../../assets/counter/2.png'
import img3 from '../../assets/counter/3.png'
import img4 from '../../assets/counter/4.png'
import img5 from '../../assets/counter/5.png'
import img6 from '../../assets/counter/6.png'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './home.css'

const CoreStrength = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });
  const counterStyle = "text-4xl  md:text-5xl text-center"
  const skills = ['US Design','App Design', 'Dashboard', 'Wireframe','User Research']
  const counterDatas = [
    {
      img: img1,
      number:16,
      text:'Global Offices'
    },
    {
      img: img2,
      number:100,
      text:'UK Education Fair'
    },
    {
      img: img3,
      number:50000,
      text:'Courses Offered'
    },
    {
      img: img4,
      number:350,
      text:'Global Counsellors'
    },
    {
      img: img5,
      number:150,
      text:'Recruiting University'
    },
    {
      img: img6,
      number:5000,
      text:'Student Served'
    },
  ]
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div>
        <div 
          style={{
            backgroundImage: `url(${city})`,
            backgroundSize: "contain",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "center bottom",
          }}
          className='lg:py-32 lg:mt-40 poppins'>
            <div
            className="    max-w-7xl mx-auto rounded-3xl "  
            style={{
              background: "linear-gradient(124deg, rgba(49,135,252,1) 39%, rgba(5,34,230,1) 100%) ",
            }}
            >
              <div
               
              className="rounded-2xl  relative">
                <div className='lg:flex  flex-col-reverse lg:flex-row-reverse '>
                  <div className='bg-[#21E5E5] lg:mt-32 lg:w-1/2 text-center lg:py-0 py-10 mx-auto  bg-clip-text lg:inline-block text-transparent text-6xl font-bold'>
                    <h1 className=''>Our Core Strength</h1>
                  </div>
                  <img  className=' lg:mt-[-110px] lg:p-[10px] md:w-1/2 mx-auto lg:w-fit' src={power} alt="" />
                </div>
                <div 
                 style={{
                  background: "linear-gradient(183deg, rgba(0,0,0,0) 30%, rgba(6,45,79,1) 90%)",
              
                }}
                className='lg:absolute rounded-lg bottom-0 flex justify-between w-full  '>
                   <div className="grid grid-cols-2 md:grid-cols-3  text-center lg:grid-cols-6 my-5 px-10   text-white md:gap-10 gap-2    lg:w-full lg:my-10 mx-auto  font-bold  ">
                   
                    {counterDatas.map((counter, index)=>(
                      <div key={index} className=" m-0 text-center flex flex-col items-center justify-between ">
                          <img src={counter?.img} alt="" />
                          <div  className={counterStyle} ref={ref}> {isVisible && <CountUp end={counter?.number} duration={2.5} />}{index !==0 && '+'}</div>
                          <h2 className="text-xs lg:text-base font-light    ">{counter?.text}</h2>
                      </div>
                    ))}
                </div>
                   
                </div>
              </div>
            </div>
        </div>
        
        
        <div className='inter bg-[#4BA1FF] py-10 rounded-tl-badge rounded-br-badge lg:my-0 my-10'>
          <div className='bg-white -rotate-2 '>
          <Marquee pauseOnHover autoFill direction="right" speed={200}
              >     
              {skills.map((skill, index)=>(
                <div className='flex items-center' key={index}>
                  <p className='text-3xl lg:text-5xl text-black py-2'>{skill}</p>
                  <img className="px-2 lg:px-4 " src={star} alt="" />

                </div>
              ))}
              </Marquee>
          </div>
        </div>
    </div>
  );
};

export default CoreStrength;
