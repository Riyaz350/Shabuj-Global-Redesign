 import talk from '../../assets/16 1.png'
 import './home.css'
const Success = () => {
   

  return (
    <div className='my-20 lg:mt-40'>
            {/* slider section */}
            <div>

            </div>

            {/* tab section */}
            <div
            className='max-w-7xl mx-auto rounded-3xl relative'
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
