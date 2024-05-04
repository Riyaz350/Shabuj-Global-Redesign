import { LiaGreaterThanSolid } from "react-icons/lia";
 import { useState } from "react";
 import flight from '../../assets/Fligh Path (1).png'
 import plane from '../../assets/33 1.png'
 import america from '../../assets/Flags/USA.jpg'
 import UK from '../../assets/Flags/UK.jpeg'
 import NZ from '../../assets/Flags/NZ.jpeg'
 import GERMANY from '../../assets/Flags/GERMANY.jpeg'
 import CANADA from '../../assets/Flags/CANADA.jpeg'
 import AUSTRALIA from '../../assets/Flags/AUSTRALIA.jpeg'
 import './home.css'
const Destination = () => {
    const [cardIndex, setCardIndex] = useState(null)
    const width = window.innerWidth
    const countries = [
        {
            name:'UK',
            img:UK
        },
        {
            name:'USA',
            img:america

        },
        {
            name:'CANADA',
            img:CANADA

        },
        {
            name:'Australia',
            img:AUSTRALIA

        },
        {
            name:'Germany',
            img:GERMANY

        },
        {
            name:'New Zealand',
            img:NZ

        }
    ]
     
    return (
        
        <div > 
            <div className="poppins flex flex-col py-10 my-20  relative overflow-hidden lg:overflow-visible"
                style={{
                    background: 'linear-gradient(90deg, rgba(13,53,234,1) 30%, rgba(44,124,249,1) 50%, rgba(13,53,234,1) 70%)'
                }}
                >
                <div className="text-white text-center space-y-5 py-5 ">
                    <div className={`absolute top-[-120px] hidden lg:flex ${width <= 1240 ? 'right-[8%]' : 'right-[27%]' } `}>
                        <img src={plane} alt="" />
                    </div>
                    <div className={`absolute h-full hidden lg:flex   ${width > 1240 ? 'right-[30%]' :'right-[10%]' } `}>
                        <img className=" w-full h-full mx-auto" src={flight} alt="" />
                    </div>
                    <div className='bg-[#21E5E5] bg-clip-text py-2  text-transparent text-4xl font-bold'>
                        <h1 className=''>Choose Your Destination</h1>
                    </div>
                    <h1 className="text-5xl font-bold pb-10">We’ll Plan the Rest</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto p-5 lg:p-0">
                        {countries.map((country, index)=>(
                            <div
                            
                            key={index} onMouseEnter={()=>setCardIndex(index)} onMouseLeave={()=>setCardIndex(null)} className={` bg-[#08183100] md:w-3/4 lg:w-2/4 md:mx-auto rounded-3xl h-[250px] relative`}>
                                <div
                                style={{
                                    transform: cardIndex == index ? "rotate(-10deg)" : "none",
                                    transformOrigin: "bottom right",
                                    transition: "transform 0.5s ease"
                                }}
                                > <img className={` ${cardIndex ==index && 'rotate-bg'} h-[250px] scale-x-[-1] w-full rounded-3xl bg-red-500 `} src={country.img} alt="" /> </div>
                                <div
                                style={{
                                    transform: cardIndex == index ? "rotate(10deg) translateY(40px) translateX(30px)" : "none",
                                    transformOrigin: "bottom left",
                                    transition: "transform 0.5s ease"
                                }}
                                className={`${cardIndex == index ? 'bg-[#08214b] z-20': 'bg-[#081831] z-10'} absolute top-0 left-0 flex flex-col justify-around items-center w-full   h-[250px]  rounded-3xl`}  >
                                    <h1 className="text-[#88F3D0] text-2xl text-center font-bold">{country.name}</h1>
                                    <button className="w-fit bg-[#2563EB] rounded-full text-white p-2"><LiaGreaterThanSolid /></button>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>

                <button className=' font-semibold bg-white px-16 py-2 my-10 rounded-3xl mx-auto w-fit'>Explore More</button>
            </div>
        </div>
    );
};

export default Destination;