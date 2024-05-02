import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import './textwheel.css'
import './home.css'

import { FaArrowDownLong } from "react-icons/fa6";

const Form = () => {
    useEffect(() => {
        const text = document.querySelector('.text p');
        if (text) {
        text.innerHTML = text.innerText.split("").map(
            (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
        ).join("");
        }
    }, []);
    const [tik, setTik] = useState(false)
    const inputStyle = 'p-2 rounded-md'
    const dropdownStyle = "dropdown dropdown-end max-w-xl w-full"
    return (
        <div className="bg-[#E7E7E7] text-center space-y-5 py-10">
            <h1 className="poppins text-4xl font-bold ">It’s Time to Start Your Journey With Us</h1>
            <p className="mulish">Book Your <span className="bg-[#88F3D0]">FREE</span> Consultation with Certified Counsellors </p>

            <div className="inter px-10 lg:p-0 lg:max-w-xl mx-auto space-y-2 text-[#8E8E8E]">
                <input placeholder="Name" className={`w-full ${inputStyle}`} type="text" />
                <div className="flex bg-[#FAFAFA]">
                    <input placeholder="Email" className={`w-full ${inputStyle}`} type="text" />
                    <button className="p-2 text-[#8E8E8E]">.com</button>
                </div>
                <div className="space-x-2 flex">
                    <input placeholder="+880" className={`w-1/6 ${inputStyle}`} type="text" />
                    <input placeholder="Mobile Number" className={`w-5/6 ${inputStyle}`} type="text" />
                </div>
                <div className={`  bg-white rounded-md flex justify-between items-center`}>
                    <div className={dropdownStyle}>
                        <div tabIndex={0} role="button" className={`w-full bg-white flex items-center justify-between  ${inputStyle}`}><p>Preferred Study Destination</p> <FaChevronDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                 </div>
                <div className={`  bg-white rounded-md flex justify-between items-center`}>
                    <div className={dropdownStyle}>
                        <div tabIndex={0} role="button" className={`w-full bg-white flex items-center justify-between  ${inputStyle}`}><p>Preferred Study Year</p> <FaChevronDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                 </div>
                <div className={`  bg-white rounded-md flex justify-between items-center`}>
                    <div className={dropdownStyle}>
                        <div tabIndex={0} role="button" className={`w-full bg-white flex items-center justify-between  ${inputStyle}`}><p>Preferred Study Intake</p> <FaChevronDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <button onClick={()=>setTik(!tik)} className={`${tik?  'bg-[#3560FF] text-white ' : ' bg-transparent'} border-[#3560FF] p-[2px] border-2 rounded-sm w-fit h-fit text-[#E7E7E7] font-bold text-sm`}><MdDone /></button>                
                    <p className="text-[#4B4B4B] text-start">By clicking you agree to our <span className="text-[#3560FF]">Privacy Policy</span> and <span className="text-[#3560FF]">Terms & Conditions</span> *</p>
                </div>
            </div>

            <div>
                <button className='mulish bg-[#004AC8] lg:my-10 text-white px-16 py-2   rounded-3xl mx-auto w-fit'>Book Free Counselling</button>
            </div>     

            {/* <div className="lg:flex hidden justify-center items-center  relative w-1/2 mx-auto h-10 top-[10vh]">
                <div className="relative bg-white w-[200px] h-[200px] rounded-full   flex justify-center items-center">
                    <p className="text poppins  w-full"> DREAM BIG STUDY ABROAD. </p>
                </div>
            </div> */}

<div className="curved-text-container">
  <p className="curved-text">DREAM</p>
</div>





        </div>
    );
};

export default Form;