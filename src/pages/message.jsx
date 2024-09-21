export default function Message() {
    return(

        <>
            <div className="relative   flex flex-col gap-20 px-20 py-10 mt-10 " style={{backgroundImage:`url('https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936361/build-master/background_hh5xe7.png')`,backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                <h1 className="z-40 relative text-5xl font-semibold font-oswald text-center text-white ">Message From <span className='text-primary'>CEO</span></h1>
                <q className="text-slate-200 relative  text-xl font-bold text-pretty text-start leading-10 ">Welcome to BuildMaster. We are a team of professionals who are dedicated to providing the best services in the industry. Our commitment to excellence ensures that every project is completed with the highest standards of quality and consistency. We are proud to have worked with some of the biggest names in the industry and look forward to working with you. Thank you for choosing BuildMaster.
                    We believe in continuous improvement and innovation, and we are always looking for ways to better serve our clients. Our team is our greatest asset, and we invest heavily in their development to ensure they have the skills and knowledge to deliver exceptional results. Together, we can build a brighter future.


                </q>
            </div>
        </>
    )}