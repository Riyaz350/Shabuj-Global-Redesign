 import '../shared.css'
 import SGE from '../../../assets/SGE Logo V 2 1.png'
 import city from '../../../assets/City Outline.png'
 import { FaFacebookF } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 import { FaLinkedinIn } from "react-icons/fa";
 import { FaSquareYoutube } from "react-icons/fa6";
 import '../../Home/home.css'

const Footer = () => {
    return (
        <div className='poppins relative bg-[#E7E7E7] overflow-hidden'>
            <div>
                <img className='absolute bottom-0 w-full ' src={city} alt="" />
            </div>
            <div className=" curved-top-container h-200px text-white bg-[#081831] flex flex-col items-center py-5">
                
                <h1 className='text-2xl'>Our Students are Our Reference</h1>

                <img src={SGE} alt="" />

                <div className='max-w-7xl mx-auto border-y-2 border-white grid lg:grid-cols-4 my-5 py-10 px-10 lg:py-5 gap-14 lg:gap-0'>
                    <div className='space-y-2'>
                        <h1 className='text-xl mulish'>About Shabuj Global Education</h1>
                        <p className='w-2/3 font-light'>Lorem ipsum dolor sit amet consectetur. Amet commodo bibendum ac sem molestie. Nisi imperdiet orci nulla in. Convallis eu ligula neque id varius sit lacus et. Pellentesque porta interdum morbi enim ultrices egestas aliquet amet. Aliquet elit amet porttitor posuere.</p>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-xl mulish'>Study Destinations</h1>
                        <ul className='font-light'>
                            <li>UK</li>
                            <li>USA</li>
                            <li>Canada</li>
                            <li>Australia</li>
                            <li>Germany</li>
                            <li>New Zealand</li>
                        </ul>
                    </div>
                        
                    <div className='space-y-2'>
                        <h1 className='text-xl mulish'>Services for students</h1>
                        <ul className='font-light'>
                            <li>Counselling</li>
                            <li>Test Preparation</li>
                            <li>Course, Country & <br/> University Selection</li>
                            <li>Scholarship</li>
                            <li>File Assessment</li>
                        </ul>
                        <p>SERVICES FOR INSTITUTIONS</p>
                        <p>SERVICES FOR PARTNERS</p>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-xl mulish'>Company</h1>
                        <ul className='font-light'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <h1>SEARCH UNIVERSITIES</h1>
                        <h1>UPCOMING EVENTS</h1>
                        <h1>BOOK ONLINE COUNSELLING</h1>
                    </div>
                </div>

                <div className=' space-y-2   pb-10 '>
                    <h1 className='text-xl text-center m-10'>OUR OFFICES</h1>
                    <div className='flex flex-col lg:flex-row space-y-10 items-center lg:items-start lg:space-y-0 lg:space-x-10'>
                    <h1 className='text-[#5093FB] bold mulish'>Head Office (London)</h1>

                    <div className='  mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10'>
                        
                        <div className=' space-y-2'>
                                <h1 className='text-[#5093FB] bold flex flex-col mulish'><span>South Asian Regional</span> <span>Head Office (Dhaka)</span></h1>
                                <ul className='space-y-2 font-thin'>
                                    <li>Chattogram Office</li>
                                    <li>Sylhet Office</li>
                                </ul>
                        </div>
                        <div className=' space-y-2'>
                                <h1 className='text-[#5093FB] bold mulish'>India Office </h1>
                                <ul className='space-y-2 font-thin'>
                                    <li>Kannur</li>
                                    <li>Abuja</li>
                                </ul>
                        </div>
                        <div className=' space-y-2'>
                                <h1 className='text-[#5093FB] bold mulish'>Nigeria Office </h1>
                                <ul className='space-y-2 font-thin'>
                                    <li>Chattogram Office</li>
                                    <li>Sylhet Office</li>
                                </ul>
                        </div>
                        <div className=' space-y-2'>
                                <h1 className='text-[#5093FB] bold mulish'>Middle East Office</h1>
                                <ul className='space-y-2 font-thin'>
                                    <li>Dubai</li>
                                </ul>
                        </div>

                    </div>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto border-t-2 w-full py-5 flex flex-col lg:flex-row item-center justify-center lg:justify-between'>
                    <div className='text-2xl flex gap-5 justify-center lg:justify-start lg:border-none border-b-2 pb-5 lg:pb-0 border-white'>
                        <p><FaFacebookF /></p>
                        <p><FaInstagram /></p>
                        <p><FaLinkedinIn /></p>
                        <p><FaSquareYoutube /></p>
                    </div>

                    <div className='flex flex-col justify-center lg:justify-start text-center lg:text-start lg:flex-row gap-5 text-[#CACACA] py-2 lg:py-0'>
                        <p>Copyright © 2024, All Right Reserved <span className='underline'>Shabuj Global Education</span></p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;