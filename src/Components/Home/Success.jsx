import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
 import talk from '../../assets/16 1.png'
 import men1 from '../../assets/Success/men1.jpg'
 import men2 from '../../assets/Success/men2.jpg'
 import men3 from '../../assets/Success/men3.jpg'
 import quote from '../../assets/Success/Vector (9).png'
 import './home.css'
 import React, { useRef, useState } from "react";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Success = (props) => {
  const { className, style, onClick } = props;

  const [index, setIndex] = useState(0)

  let sliderRef = useRef(null);

  // Next and Previous buttons
  const next = () => {
    setTimeout(() => {
      // Delayed execution after 500 milliseconds
      if (index >= 3) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 200);
    sliderRef.slickNext();
  };
  const previous = () => {
    setIndex(index-1)
    sliderRef.slickPrev();
  };

  //React slick carousel settings
  const settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility:false,
      
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            infinite: true,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,

          }
        }
      ]
  };

  // quote icons on cards
  const quotes = 
  <div className="flex ml-[-20px] mb-[-10px]">              
    <img className="w-[40px] h-[50px]" src={quote} alt="" />
    <img className="w-[40px] h-[50px]" src={quote} alt="" />
  </div>

// card styles
  const slideStyle = 'flex flex-col gap-2 px-10 pt-5 pb-10 rounded-2xl mr-4 text-center space-y-3'

  const successData = [
    {
      name: "Sakib",
      review: "This is a great product!",
      img: men1
    },
    {
      name: "Miraj",
      review: "Highly recommended!",
      img: men2
    },
    {
      name: "Raju",
      review: "Excellent quality.",
      img: men3
    }
  ]

  // Removing built in navigation buttons
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className='mb-20  overflow-hidden'>
            {/* slider section */}
      <div className="slider-container sliderContainer pt-20">
      <div   className='grid lg:grid-cols-3 '>
        <div className=" col-span-1 ml-auto">
          <h1 className='text-7xl max-w-md font-bold bg-[#21E5E5] bg-clip-text lg:inline-block text-transparent '>Become a Part of Our Success Stories</h1>
        </div>
        <div style={{width:200}} className="col-span-2 hidden lg:flex ">
        <Slider
          ref={slider => {
            sliderRef = slider;
          }}
          {...settings}
          className='  max-w-7xl  text-black  '
          centerPadding={100}
        >
          <div className='mr-5 ' key={1}>
            
            <div className={`${slideStyle} ${index ==0 ? 'sliderCard' : 'bg-[#F5F6FF]'}`}>
              {quotes}
               <img className='rounded-2xl' src={men1} alt="" />
              <h1 className='text-2xl font-bold'>Shakib Hasan</h1>
              <p className='text-start text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
          <div className='mr-5 ' key={1}>
            
            <div className={`${slideStyle} ${index ==1 ? 'sliderCard' : 'bg-[#F5F6FF]'}`}>
              {quotes}
                <img className='rounded-2xl' src={men1} alt="" />
                <h1 className='text-2xl font-bold'>Shakib Hasan</h1>
                <p className='text-start text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
          <div className='mr-5 ' key={1}>
            <div className={`${slideStyle} ${index ==2 ? 'sliderCard' : 'bg-[#F5F6FF]'}`}>
              {quotes}
                <img className='rounded-2xl' src={men1} alt="" />
                <h1 className='text-2xl font-bold'>Shakib Hasan</h1>
                <p className='text-start text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
          <div className='mr-5 ' key={1}>
            <div className={`${slideStyle} ${index ==3 ? 'sliderCard' : 'bg-[#F5F6FF]'}`}>
                {quotes}
                <img className='rounded-2xl' src={men1} alt="" />
                <h1 className='text-2xl font-bold'>Shakib Hasan</h1>
                <p className='text-start text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
          
        </Slider>
        </div>
      </div>
      <div className='my-10 text-white flex justify-start  ' style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
        <BsArrowLeft/>
        </button>

        <button className="button" onClick={next}>
        <BsArrowRight />
        </button>
      </div>
      </div>

      {/* tab section */}
      <div
      className='max-w-7xl mx-auto rounded-3xl relative my-40'
      style={{
        backgroundImage: ' radial-gradient(circle, rgba(255,67,58,1) 15%, rgba(253,196,93,1) 100%)'
        }}
      >
        <img className='hidden lg:block absolute top-[-160px] left-[-80px] ' src={talk} alt="" />
        <div className='max-w-xl mx-auto flex flex-col justify-center gap-5 py-10 '>
          <h1 className='poppins text-4xl lg:text-5xl text-white text-center lg:text-start font-bold'>Ready to take the leap?</h1>
          <p className='inter text-xl w-3/4  mx-auto text-white font-extralight text-center'>Connect with our finest counsellors and biggest study abroad community</p>
          <button className='poppins font-semibold bg-white px-16 py-2 rounded-3xl mx-auto w-fit'>Talk to a Counsellor</button>

        </div>
      </div>
    </div>
  );
};

export default Success
