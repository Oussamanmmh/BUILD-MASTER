
export default function Page3(){
    return(
        <>
                <div className=' relative space-y-20 px-4 md:px-20 py-6 pb-10 rounded-2xl' style={{backgroundImage:`url('https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726935965/build-master/3_k1l4ae.png')`,backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:"scroll"} }>
                        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl'></div>
                            <p className="text-xl text-white text-pretty px-10 relative">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum alias quia eius nostrum vero ipsam natus delectus est mollitia! Dolorum omnis laboriosam, culpa sint odit error enim corporis eveniet.
                            </p>
                            <div className="space-x-20  text-lg font-oswald relative">
                                <button className="bg-primary  text-white px-6 py-2 rounded-tl-3xl rounded-br-3xl btnlrn"> <span className='btntxt'>Explore</span></button>
                            </div>
            </div>
        </>
    )
}