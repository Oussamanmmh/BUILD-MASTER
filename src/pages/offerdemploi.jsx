import background from '../assets/svg/background.svg'

import { motion } from 'framer-motion'
export default function OfferDEmploi() {
    return(
        <>
        <section className="px-10 bg-white mt-36 md:mt-0 -space-y-32 md:-space-y-1" style={{backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundAttachment:"fixed" ,backgroundPosition:'center'} }>
            <div className=" flex flex-col md:flex-row items-center gap-32 md:gap-6 h-screen" >
               
                <motion.div
                    initial={{opacity:0 , x:-50}}
                    whileInView={{opacity:1 , x:0}}
                    viewport={{
                     margin:"-200px"
                    }}
                    transition={{duration:0.5}}>
                        <p className="text-4xl text-red-500 font-semibold">Careers</p>
                        <h1 className="text-5xl font-oswald font-bold">A solid alloy of know-how and pride</h1>
                </motion.div>
                <div
                 className=" py-6 px-4 rounded-xl w-full flex justify-between items-center bg-gradient-to-br from-cyan-500 to-teal-400 cursor-pointer containeroffer hover:scale-x-110 transition-all duration-300 ease-in-out hover:border-2 hover:border-white">
                     <div className="rounded-full flex justify-center items-center  p-4 circleoffer after:block relative after:absolute after:h-full after:rounded-full after:border-2 after:white after:w-full  after:inset-0 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-10 font-bold arrow ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>

                     </div>
                     <div >
                          <h1 className="font-bold text-3xl">Job Offers</h1>
                          <h1 className="text-sm">Building Tomorrow Project's Together</h1>
                     </div>
                </div>
                
            </div>
            <div className=" rounded-xl text-white py-10 px-8 flex  flex-col md:flex-row items-center gap-2 text-pretty -mt-20" style={{backgroundImage:`url('https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936528/build-master/smallback_jvzzxs.png')`, backgroundPosition:'center' , backgroundSize:'cover'}}>
               <div>
                    <p className="text-xl">Receive our monthly Canam360 newsletter</p>
                    <h1 className="font-bold text-4xl font-oswald">Subscribe to our newsletter</h1>
               </div>
               <div className="flex items-center gap-4 w-full">
                    <input type="text" placeholder="Enter your email" className="text-black caret-primary placeholder:text-primary rounded-3xl w-full px-8 py-6 outline-none"/>
                    <button className="bg-black rounded-3xl  font-bold text-3xl font-oswald px-8 py-6 ">Subscribe</button>
               </div>

            </div>
        </section>
        </>
    )
}