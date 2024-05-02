import { useEffect } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
// import './home.css'

 
const TextSpinner = () => {
    useEffect(() => {
        console.log('mounted 1')
        const text = document.querySelector('.text p');
        if (text) {
            text.innerHTML = text.innerText.split("").map(
                (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
            ).join("");
        }
        console.log('mounted 2')
    }, []);
    return (
        <div className="poppins lg:flex hidden absolute w-fit mx-auto  bottom-14 left-1/3 lg:ml-48 h-10">
                <div className="relative bg-white w-[200px] h-[200px] rounded-full   flex justify-center items-center">
                    <div className="absolute w-[150px] h-[150px] flex justify-center items-center text-5xl rounded-full"><FaArrowDownLong /></div>
                    <p   className="poppins text w-full"><p>DREAM BIG STUDY ABROAD.</p></p>
                </div>
            </div>
    );
};

export default TextSpinner;