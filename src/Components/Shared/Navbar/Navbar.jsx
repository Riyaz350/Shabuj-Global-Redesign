import logo from '../../../assets/logo.png'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"
import '../../Home/home.css'
import navData from '../../../../public/navData.json'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
    const navClass = 'text-lg z-50 block font-semibold  text-[#041527]  w-fit  px-4 py-2 lg:py-0'
    const [isIndex, setIndex] = useState(null);
     
    return (
        <div className="bg-[#F0F8FF] inter ">
            <div className='px-5 lg:px-20 flex flex-col lg:gap-10  lg:flex-row justify-between  lg:items-center'>

                <div className='flex justify-between items-center my-10 lg:w-fit'>
                    <img className='h-[40px] w-fit  lg:mx-0 ' src={logo} alt="" />

                        {/* small device menu */}

                    <div className="dropdown  dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="btn z-50  bg-transparent shadow-none text-2xl   p-0"><RxHamburgerMenu /></div>
                        <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow bg-base-100 mt-10 rounded-box w-52">
                        {
                        navData.map(data=>
                            <button key={data.id} onMouseEnter={() => setIndex(data.id)}   className={` ${navClass} ${isIndex == data.id && ' bg-[#004AC8] rounded-lg text-white'}`}>{data?.title}</button>)
                        }
                        </ul>
                    </div>



                    
                </div>

                <div onMouseLeave={() => setIndex(null)}>

                            {/* larger device navbar */}

                {/* <div className='hidden lg:flex lg:flex-row gap-5 font-semibold  bg-transparent text-[#041527]   justify-center items-center  '> */}
                <div className=' flex gap-5'>
                    <div className='lg:flex hidden'>
                    {navData.map(data=>
                            <div className='flex justify-center' key={data.id}>
                                <button  onMouseEnter={() => setIndex(data.id)}   className={`${navClass} ${isIndex == data.id && ' bg-[#004AC8] rounded-lg text-white'}`}>{data?.title}</button>
                                <div   className={`z-50 rounded-2xl my-14 bg-white lg:w-fit ${isIndex == data.id? 'absolute':'hidden'}`}>
                            <div className='     lg:mx-auto rounded-2xl shadow-xl p-5 lg:p-10 w-fit  '>
                                <div className='flex justify-between w-fit'>
                                 <p onClick={() => setIndex(null)} className='flex lg:hidden text-2xl'><IoMdCloseCircleOutline /></p>
                                </div>
                                <div className='grid   w-fit  justify-between gap-5'>
                                
                                    <div className='z-50 flex flex-col justify-between pb-7 lg:w-[170px] gap-2'>
                                        {data.links.map((data, index)=>
                                            <motion.p className='cursor-pointer p-2 rounded-lg hover:bg-[#004AC8] hover:text-white' initial={{x:20}} whileInView={{x:0}} transition={{duration:0.3, delay:index*0.1}} key={index}>{data}</motion.p>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                       ) }
                    </div>
                    <button className='hidden lg:flex bg-[#93C5FD] py-2 px-5 rounded-lg text-white'>Login</button>
                </div>

                {/* {navData.map(data =>
                    <div   key={data.id} className='lg:hidden flex justify-center   z-40 '>
                        <div   className={`rounded-2xl z-50 bg-white lg:w-fit ${isIndex == data.id? 'absolute':'hidden'}`}>
                            <div className='     lg:mx-auto rounded-2xl shadow-xl p-5 lg:p-10 w-fit  '>
                                <div className='flex justify-end items-start w-full'>
                                 <p onClick={() => setIndex(null)} className='flex lg:hidden text-2xl'><IoMdCloseCircleOutline /></p>
                                </div>
                                <div className='grid   w-fit  justify-between gap-5'>
                                
                                    <div className='flex flex-col justify-between pb-7 lg:w-[170px] gap-2'>
                                        {data.links.map((data, index)=>
                                            <motion.p className=' cursor-pointer p-2 rounded-lg hover:bg-[#004AC8] hover:text-white' initial={{x:20}} whileInView={{x:0}} transition={{duration:0.3, delay:index*0.1}} key={index}>{data}</motion.p>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
            </div>
            
            

            

             
        </div>
    );
};

export default Navbar;








 