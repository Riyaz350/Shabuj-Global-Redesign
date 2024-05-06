import { useState } from "react";
import img1 from '../../assets/0001 1.png'
import img2 from '../../assets/For Partners Icon.png'
import './home.css'
const Guide = () => {
    const [index, setIndex] = useState(0)
    const active = 'bg-[#004AC8] text-white '
    const inActive = 'bg-white text-[#004AC8]'
    const guides = [
        {
            name:"For Students",
            title:"Get complete guidance in your study abroad journey- from start to finish",
            paragraph:"Shabuj Global Education helps you with Course & University Selection, Interview and Test Preparation, Visa Application and Admission and more- so you can join your dream university with ease!",
            image:img1,
            button:'Start Now',
            bg:'#EFF6FF'
        },
        {
            name: "For Partners",
            title: "Wow your students with Shabuj Global Education's trusted admission process",
            paragraph: "No more lack of trust and transparency- we treat your business as our own. With SGE's 1500+ strong university network, experienced counsellors, and dedicated customer support, you can just focus on increasing your student reach- and leave the processing part to us!",
            image:img2,
            button:'Explore More',
            bg:'#EFF6FF'
          }
          
    ]
    return (
       <div>

        {/* Large device */}
         <div className="hidden lg:flex flex-col bg-[#EFF6FF] lg:pb-32">
            <div className="inter bg-[#EEE] text-sm lg:text-[20px] font-semibold max-w-3xl mx-auto space-x-10 mt-32 mb-10">
                <button className={`rounded-full py-[10px] px-28 ${index == 0  ? active :inActive}`} onClick={()=>setIndex(0)}>For Students</button>
                <button className={`rounded-full py-[10px] px-28 ${index == 1  ? active :inActive}`} onClick={()=>setIndex(1)}>For Partners</button>
            </div>

            <div className="max-w-5xl  mx-auto grid grid-cols-2 justify-center items-center">
                    <div className=" space-y-5">
                        <h1 className="poppins text-[#3560FF] font-bold text-3xl">{guides[index].name}</h1>
                        <h1 className="poppins text-4xl font-semibold">{guides[index].title}</h1>
                        <p className="mulish">{guides[index].paragraph}</p>
                        <button className='poppins font-semibold bg-[#2563EB] text-white px-16 py-2   rounded-3xl mx-auto w-fit'>{guides[index].button}</button>
                    </div>
                    <div>
                        <img className="w-3/4 mx-auto" src={guides[index].image} alt="" />
                    </div>
            </div>
        </div>

        {/* Medium and small device */}
        <div className="flex flex-col gap-5 lg:hidden">
            {guides.map((guide, index)=>(
                <div className={`flex flex-col justify-center gap-5 ${index == 0 && 'bg-[#EFF6FF]'} py-10`} key={index}>
                    <h1 className="text-center text-[#3560FF] font-bold">{guide.name}</h1>
                    <img className="w-1/2 mx-auto" src={guide.image} alt="" />
                    <h1 className="w-5/6 mx-auto text-xl font-bold">{guide.title}</h1>
                    <h1 className="w-5/6 mx-auto">{guide.paragraph}</h1>
                    <button className=' font-semibold bg-[#2563EB] text-white px-16 py-2   rounded-3xl mx-auto w-fit'>{guide.button}</button>
                </div>
            ))}
        </div>
       </div>
    );
};

export default Guide;