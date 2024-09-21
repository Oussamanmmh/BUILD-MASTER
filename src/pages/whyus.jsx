import background from '../assets/1.png'
export default function WhyUs(){
    return(
        <>
            <div className="  px-10 space-y-20 py-20 text-white relative whyus" style={{backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundAttachment:"fixed"} }>
                    <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
                    <h1 className="text-5xl font-bold font-oswald text-center relative  ">
                            Why Chooose Us for your next Projects?
                    </h1>
                    <div className='flex items-center gap-6 relative'>
                       
                            <div className='flex flex-col  gap-24 items-center w-1/2'>
                                    <p>
                                        <span className='text-7xl font-oswald font-bold text-primary '>01</span>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure perspiciatis at tempore, voluptatum ipsa deserunt voluptates quibusdam ad modi doloribus doloremque provident vero illo dolores consectetur! Sint, debitis possimus.</span>
                                    </p>
                            
                            <p>
                                        <span className='text-7xl font-oswald font-bold text-primary '>02</span>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti ad iste eos rerum, nulla veritatis natus deserunt, harum molestias necessitatibus amet rem accusamus illum nam at iure repudiandae incidunt!</span>
                            </p>
                            <p>
                                        <span className='text-7xl font-oswald font-bold text-primary '>03</span>
                                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ipsam cum maxime modi commodi, velit, vitae sed ad assumenda tempora nihil optio incidunt, ducimus mollitia. Est voluptate quasi odit nam.</span>
                            </p>
                         </div>
                    </div>
            </div>
        </>
    )
}