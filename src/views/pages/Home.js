import {Link, NavLink} from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

import Home_Img_1 from "../../assets/img/home-img.png";

import Service_1 from "../../assets/img/our_service_1.png";
import Service_2 from "../../assets/img/our_service_2.png";
import Service_3 from "../../assets/img/our_service_3.png";
import Service_4 from "../../assets/img/our_service_4.png";

import Thumail from "../../assets/img/thumail.png";

import { Helmet } from "react-helmet";



const Home = props =>{

      const Works = [
            {id: 1, src: Home_Img_1, subtitle:"Sportbooks", desc:"Rewind"},
            {id: 2, src: Home_Img_1, subtitle:"Sportbooks", desc:"Rewind"},
            {id: 3, src: Home_Img_1, subtitle:"Sportbooks", desc:"Rewind"},
            {id: 4, src: Home_Img_1, subtitle:"Sportbooks", desc:"Rewind"},
            {id: 5, src: Home_Img_1, subtitle:"Sportbooks", desc:"Rewind"},
            {id: 6, src: Home_Img_1, subtitle:"Sportbooks", desc:"Rewind"},
      ]


      const Services = [
            {id: 1, src: Service_1, title:"Research & Analysis"},
            {id: 2, src: Service_2, title:"Research & Analysis"},
            {id: 3, src: Service_3, title:"Research & Analysis"},
            {id: 4, src: Service_4, title:"Research & Analysis"},
      ]

      useEffect( () => {
   
      ScrollReveal().reveal('.headline', {
            origin: 'buttom',
            distance: '40px',
            duration: 1200,
            interval: 200,
            scale: 8.9,
            viewFactor: 0.1,
      });

      })

    return(
      <div>

            <Helmet>
            {/* <!-- Primary Meta Tags --> */}
                  <title>RepoHub</title>
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

            {/* Home Section */}
            <div className="container">
                  <div className="row justify-content-center">
                  <div className="col-lg-10">
                  <section className="container">

                  <div className="row"> 
                        <div className="col-12">
                              <div className="mt-5 py-5">
                                    <h3 className="fw-light headline">Digital Agency</h3>
                                    <h3 className="mb-5 headline">
                                          We developer complex interface systems for Web,Mobile & Ar
                                    </h3>
                                    <img src={Home_Img_1} className="img-fluid headline pdf-rounded-xl" alt="Home Img" />
                              </div>
                        </div>
                  </div>

                  </section>

                  
                  </div>
                  </div>
            </div>

            {/* Work Section */}
            <div className="bg-light">
                  <div className="container">
                  <div className="row justify-content-center">
                  <div className="col-lg-10">
                  <section className="container">
                  <div className="row"> 
                        <div className="col-12">
                              <div className="mt-5 py-5">
                                    <h3 className="text-center mb-5 headline">Our Work Select Projects</h3>


                                    <div className="row row-cols-1 row-cols-md-2 g-5">
                                          {Works.map( (work : {} ) => {
                                                return (
                                                <div key={work.id} className="col headline">
                                                      <div className="card rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-red-200">
                                                            <img src={work.src} className="img-fluid" alt="Home Img" />
                                                            <div class="card-body">
                                                                  <h5 className="card-title">{work.subtitle}</h5>
                                                                  <p className="card-text">{work.desc}</p>
                                                            
                                                            </div>
                                                      </div>
                                                </div>

                                                )
                                          })}
                                          
                                    </div>
                                    
                              </div>
                        </div>
                  </div>
            </section>       
                  </div>
                  </div>
                  </div>

            </div>   

            {/* Services Section */}
            <div className="bg-light">
                  <div className="container">
                  <div className="row justify-content-center">
                  <div className="col-lg-10">
                  <section className="container">       
                  
                  <div className="row"> 
                        <div className="col-lg-6 headline">
                              <h4>Our Services</h4>
                        
                        </div>

                        <div className="col-lg-6 headline">
                        <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              </p>
                        </div>
                  </div>

                  <div className="row mt-4 g-4">
                  {Services.map(service => {
                                          return (
                                                <div key={service.id} className="col headline">
                                                      <div className="card text-center py-3 py-lg-5 border-0 shadow-xl shadow-red-200">
                                                      <div className="mb-1 mb-lg-3">
                                                      <img src={service.src} className="w-50" alt="Home Img" />
                                                      </div>
                                                            <div className="card-body">
                                                                  <h5 className="card-title ">{service.title}</h5>
                                                            
                                                            </div>
                                                      </div>
                                                </div>

                                                )
                                          })}

                                          <div className="col-12">
                                                <div className="float-end my-5">
                                                <div className="d-flex justify-content-center align-iten-center ">
                                                            <span className="me-3">Explore More</span>
                                                            <div>
                                                            <i className="fa-solid fa-angle-right fa-1x"></i>
                                                            </div>
                                                </div>
                                                </div>
                                          </div>
                                    
                              
                  </div>

            </section>       
                  </div>
                  </div>
                  </div>

            </div>  

            {/* Story Section */}

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
  






  export default Home;