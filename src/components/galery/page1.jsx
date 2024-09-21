
export default function Page1(){
    return(
        <>
            <div className=' relative space-y-20 px-4 md:px-20 py-6 pb-10 rounded-2xl' style={{backgroundImage:`url('https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726935791/build-master/1_scwdag.png')`,backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:"scroll"} }>
                        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl'></div>
                            <p className="text-xl text-white text-pretty px-10 relative">
                                We are a team of professionals who are dedicated to providing the best services in the industry. Our commitment to excellence ensures that every project is completed with the highest standards of quality and consistency.
                            </p>
                            <div className="space-x-20  text-lg font-oswald relative">
                                <button className="bg-primary  text-white px-6 py-2 rounded-tl-3xl rounded-br-3xl btnlrn"> <span className='btntxt'>Learn More</span></button>
                                <button className="border  border-white  px-6 py-2 text-white  rounded-tl-3xl rounded-br-3xl btncontact"><span className='btntxt'>Contact Us</span></button>
                            </div>
            </div>
        </>
    )
}