
export default function CardPerson ({name, job,phone, email, img}) {
    return(
        <>
            <div className="bg-slate-100 rounded-xl py-3 flex flex-col gap-3 items-center  shadow-2xl shadow-slate-400">
                  <div className="flex items-center justify-between gap-60 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="size-8 fill-yellow-300 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 rotate-90"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>

                  </div>
                  <div className="flex flex-col items-center ">
                        <img src={img} alt="person" className="w-32 h-32 rounded-full"/>
                        <h1 className="text-2xl font-semibold mt-4 font-oswald">{name}</h1>
                        <p className="text-light font-semibold">{job}</p>
                  </div>
                  <div className="flex flex-col items-center">
                        <p className="text-light">{phone}</p>
                        <p className="text-primary">{email}</p>
                  </div>
            </div>
        </>
    )
}