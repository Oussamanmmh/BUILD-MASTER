import SocialMedia from "./scocialmedia";

export default function Footer(){
    return(
        <footer className="bg-black footer text-white px-10 py-10 space-y-10 ">
            <SocialMedia/>
            <div className="flex flex-col md:flex-row   justify-center gap-20 container">
                    <div>
                            <h1 >About</h1>
                            <ul >
                                <li><a href="/">Misson and Values</a></li>
                                <li><a href="/">Honors and Awards</a></li>
                                <li><a href="/">Our Team</a></li>
                            </ul>
                    </div>
                    <div>
                        <h1>News</h1>
                        <ul>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">News</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1>Careers</h1>
                        <ul>
                             <li><a href="/">Why Work With Us</a></li>
                             <li><a href="/">Job Offers</a></li>
                             <li><a href="/">Employee and Testimonials</a></li>
                        </ul>
                    </div>
                    <div>
                          <h1>
                              Portal section
                          </h1>
                          <ul>
                                 <li><a href="/">Employee and Access</a></li>
                                 <li><a href="/">Loyality program</a></li>
                          </ul>
                    </div>
            </div>
            <div className="space-y-6">   
                    <a className="text-4xl text-primary font-bold font-oswald">BuildMaster</a>
                    <p className=" text-light text-sm">
                        &copy; {new Date().getFullYear()}  Canam. All rights reserved. | Privacy Statement | Trademarks and Copyrights | Statements on Child Labor, Forced Labor, Slavery and Human Trafficking
                    </p>
                    <div className="flex gap-10 font-oswald">
                         <div className=" rounded-3xl bg-red-600 px-5 py-2 font-bold">EN</div>
                         <button className="border border-light  px-6 py-2  rounded-tl-3xl rounded-br-3xl btncontact"><span className='btntxt'>Contact Us</span></button>

                    </div>

            </div>
        </footer>
    )
}