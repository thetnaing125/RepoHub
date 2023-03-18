
import { Helmet } from "react-helmet";
import Thumail from "../../assets/img/thumail.png";
import Logo from "../../assets/img/logo-1.png";

import Home_Img_1 from "../../assets/img/home-img.png";

import {Link,NavLink} from "react-router-dom";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// services Image 

import Service_Img_1 from "../../assets/img/our_service_1.png";
import Service_Img_2 from "../../assets/img/our_service_2.png";
import Service_Img_3 from "../../assets/img/our_service_3.png";
import Service_Img_4 from "../../assets/img/our_service_4.png";
 

const Services = props =>{

  useEffect( () => {
   
    ScrollReveal().reveal('.headline', {
          origin: 'buttom',
          distance: '40px',
          duration: 1200,
          interval: 50,
          scale: 8.9,
          viewFactor: 0.1,
    });

    })

    return(
      <div>


<Helmet>
            {/* <!-- Primary Meta Tags --> */}
                  <title>Story|RepoHub</title>
                  <link rel="icon" href={Logo}/>

                  <meta name="title" content="RepoHub"/>
                  <meta name="description" content="For Students  Learning RepoHub Project using Reactjs"/>

                  {/* <!-- Open Graph / Facebook --> */}
                  <meta property="og:type" content="website"/>
                  <meta property="og:url" content="repohub.co"/>
                  <meta property="og:title" content="RepoHub"/>
                  <meta property="og:description" content="For Students  Learning RepoHub Project using Reactjs"/>
                  <meta property="og:image" content={Thumail}/>

                  {/* <!-- Twitter --> */}
                  <meta property="twitter:card" content="summary_large_image"/>
                  <meta property="twitter:url" content="repohub.co"/>
                  <meta property="twitter:title" content="RepoHub"/>
                  <meta property="twitter:description" content="For Students  Learning RepoHub Project using Reactjs"/>
                  <meta property="twitter:image" content={Thumail}/>
</Helmet>
        
         {/* Services First Section */}
         <div className="container">
                  <div className="row justify-content-center">
                  <div className="col-lg-10">
                  <section className="container">

                  <div className="row headline"> 
                        <div className="col-12">
                              <div className="mt-5 py-5">
                                    <h3 className="fw-light headline">Services</h3>
                                    <h3 className="mb-5 headline">
                                    Our services extend to every aspect of the project development process
                                    </h3>
                                    <img src={Home_Img_1} className="img-fluid headline pdf-rounded-xl" alt="Home Img" />
                              </div>
                        </div>
                  </div>

                  </section>

                  
                  </div>
                  </div>
            </div>



        {/* Services Second Section */}
        {/* One Group */}
        <div className="mb-5">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-10">

                    <div className="">
                      <section className="container">
                              <div className="row headline">
                      
                                      <div className="col-sm-8">
                                        <div className="mb-5">
                                          <h6 className="fs-3 text-black fw-bold mb-3">Research & Analytics</h6>
                                          <p>
                                            We immerse ourselves in the analytics of your business, in order<br/> to study all the subtleties and determine target audience.
                                          </p>
                                        </div>

                                        <div className="row item-center">
                                              <div className="col-sm-5">
                                                <h4 className="fs-4 fw-bold">What we do</h4>
                                                <p>- Analyze cliente business</p>
                                                <p>- Branding Strategy</p>
                                                <p>- Research opportunities</p>
                                              </div>

                                              <div className="col-sm-5">
                                              <h4>.</h4>
                                                <p>- Create information architecture</p>
                                                <p>- Study the target audience</p>
                                                <p>- Production planning</p>
                                              </div>
                                        </div>
                                      </div>
                                

                                    <div className="col-sm-4 position-relative col-md-block">
                                      <img src={Service_Img_1} className="w-75 position-absolute top-0 buttom-0" alt="Home Img"/>
                                    </div>
                                
                              </div>
                      </section>
                    </div>


                  

                  </div>
              </div>
          </div>
        </div>


         {/* Two Group */}
         <div className="border-top py-5">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-10">

                    <div className="">
                      <section className="container">
                              <div className="row headline">
                                 
                                      <div className="col-sm-8">
                                        <div className="mb-5">
                                          <h6 className="fs-3 text-black fw-bold mb-3">Product design</h6>
                                          <p>
                                          We know how to create complex and intuitive interface systems<br/> that are enjoyable to use.
                                          </p>
                                        </div>

                                        <div className="row item-center">
                                              <div className="col-sm-5">
                                                <h4 className="fs-4 fw-bold">What we do</h4>
                                                <p>- Interface design</p>
                                                <p>- Visual Identity</p>
                                                <p>- Corporate & Promo landings</p>
                                              </div>

                                              <div className="col-sm-5">
                                              <h4>.</h4>
                                                <p>- UI Kits & Libraries</p>
                                                <p>- E-commerce</p>
                                                <p>- Apps for iOS & Android</p>
                                              </div>
                                        </div>
                                      </div>
                              
                                    <div className="col-sm-4 position-relative col-md-block">
                                      <img src={Service_Img_2} className="w-75 position-absolute top-0 buttom-0" alt="Home Img"/>
                                    </div>
                                
                              </div>
                      </section>
                    </div>


                  

                  </div>
              </div>
          </div>
        </div>

        {/* Three Group */}
        <div className="border-top py-5">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-10">

                    <div className="">
                      <section className="container">
                              <div className="row headline">
                                    
                                      <div className="col-sm-8">
                                        <div className="mb-5">
                                          <h6 className="fs-3 text-black fw-bold mb-3">Development & Integration</h6>
                                          <p>
                                          Our developer team easily subdue developments of any<br/> complexity. We dominate all the cycle of development.
                                          </p>
                                        </div>

                                        <div className="row item-center">
                                              <div className="col-sm-5">
                                                <h4 className="fs-4 fw-bold">What we do</h4>
                                                <p>- Front-end Development</p>
                                                <p>- Development Consulting</p>
                                                <p>- CMS Development</p>
                                              </div>

                                              <div className="col-sm-5">
                                              <h4>.</h4>
                                                <p>- API</p>
                                                <p>- Highload-systems</p>
                                                <p>- Animations</p>
                                              </div>
                                        </div>
                                      </div>
                                   

                                    <div className="col-sm-4 position-relative col-md-flex">
                                      <img src={Service_Img_3} className="w-75 position-absolute top-0 buttom-0 " alt="Home Img"/>
                                    </div>
                                
                              </div>
                      </section>
                    </div>


                  

                  </div>
              </div>
          </div>
        </div>


         {/* Four Group */}
         <div className="border-top py-5">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-10">

                    <div className="">
                      <section className="container">
                              <div className="row headline">
                                  
                                    <div className="col-sm-8">
                                      <div className="mb-5">
                                        <h6 className="fs-3 text-black fw-bold mb-3">Support</h6>
                                        <p>
                                        We provide technical assistance, that will help you to improve,<br/> keep the quality and speed of the launched project like website,<br/> app or full product.
                                        </p>
                                      </div>

                                      <div className="row item-center">
                                            <div className="col-sm-5">
                                              <h4 className="fs-4 fw-bold">What we do</h4>
                                              <p>- Content Strategy & Research</p>
                                              <p>- Branding Strategy</p>
                                              <p>- Opportunity Analysis</p>
                                            </div>

                                            <div className="col-sm-5">
                                            <h4>.</h4>
                                              <p>- Content Strategy</p>
                                              <p>- Strategic Planning</p>
                                              <p>- Production Planning</p>
                                            </div>
                                      </div>
                                    </div>

                                    <div className="col-sm-4 position-relative">
                                      <img src={Service_Img_4} className="w-75 position-absolute top-0 buttom-0" alt="Home Img"/>
                                    </div>
                                
                              </div>
                      </section>
                    </div>


                  

                  </div>
              </div>
          </div>
        </div>



        {/* Five Group */}

        <div className="bg-light">
                  <div className="container">
                        <div className="row justify-content-center">
                              <div className="col-lg-10">
                                    <div className="container">
                                          <div className="row">
                                                <div className="col">
                                                      <div className="my-lg-5 py-lg-5">
                                                            <Link to="/story" className="text-decoration-none text-secondary">
                                                                  <div className="text-center py-5 my-5 headline">
                                                                        <p className="text-uppercase">next</p>
                                                                        <h4 className="text-black">Our Story</h4>
                                                                        <i className="fa-solid fa-arrow-right-long"></i>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>     
                              </div>
                        </div>
                  </div>

            </div> 

            <div className="border-top py-5">
                  <div className="container">
                        <div className="row justify-content-center">
                              <div className="col-lg-10">
                                    <div className="container">
                                              <div className="row">
                                                      <div className="col col-lg-auto col-md-10 headline">
                                                            <div className="small mb-4 mb-lg-0">
                                                            <NavLink to="/" className="text-decoration-none text-secondary me-4">Home</NavLink>
                                                            <NavLink to="/" className="text-decoration-none text-secondary me-4">Story</NavLink>
                                                            <NavLink to="/" className="text-decoration-none text-secondary me-4">Works</NavLink> 
                                                            
                                                            <NavLink to="/" className="text-decoration-none text-secondary d-lg-none">Careers</NavLink>
                                                            <NavLink to="/" className="text-decoration-none text-secondary d-lg-none ms-4">Contact Us</NavLink>    
                                                            </div>
                                                      </div>



                                                      <div className="col headline">
                                                            <div className="text-center text-md-end">
                                                                  <h5>RepoHub</h5>
                                                                
                                                            </div>
                                                      </div>


                                                      <div className="col d-none d-lg-block">
                                                            <div className="text-end small headline">
                                                                  <NavLink to="/" className="text-decoration-none text-secondary ms-4">Careers</NavLink>
                                                                  <NavLink to="/" className="text-decoration-none text-secondary ms-4">Contact Us</NavLink>
                                                            </div>
                                                      </div>
                                              </div>
                                          
                                    </div>     
                              </div>
                        </div>
                  </div>

            </div> 



      </div>
    )
  }
  
  export default Services;