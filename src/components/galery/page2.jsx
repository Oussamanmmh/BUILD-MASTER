export default function Page2(){
    return(
        <div className=' relative space-y-20 px-4 md:px-20 py-6 pb-10 rounded-2xl' style={{backgroundImage:`url('https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726935870/build-master/2_wvlgul.png')`,backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:"scroll"} }>
                        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl'></div>
                            <p className="text-xl text-white text-pretty px-10 relative">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et sequi iure fugit exercitationem ut vitae architecto modi qui corporis quo voluptas dolor, animi fugiat! Voluptates neque ratione deserunt nulla.
                            </p>
                            <div className="space-x-20  text-lg font-oswald relative">
                                <button className="bg-primary  text-white px-6 py-2 rounded-tl-3xl rounded-br-3xl btnlrn"> <span className='btntxt'>Hire Us</span></button>
                            </div>
            </div>
    )
}