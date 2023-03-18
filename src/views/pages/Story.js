import {Helmet} from "react-helmet";
import Thumail from "../../assets/img/thumail.png";
import Logo from "../../assets/img/logo-1.png";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import {Link, NavLink} from "react-router-dom";
import Home_Img_1 from "../../assets/img/home-img.png";




const Story = props =>{


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


      {/* Story First Section */}
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
              <section className="container">
                  <div className="row"> 
                        <div className="col-12">
                              <div className="mt-5 py-5">
                                    <h3 className="fw-light headline">Our Story</h3>
                                    <h3 className="mb-5 headline">
                                    We developer complex interface systems for Web, Mobile & Ar
                                    </h3>
                                    <img src={Home_Img_1} className="img-fluid pdf-rounded-xl headline" alt="Home Img" />
                              </div>
                        </div>
                  </div>

              </section>
              </div>
          </div>
      </div>

      {/* Story Second Section */}
      <div className="container mb-5">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row headline">
                    <div className="col-3">
                      <h1 className="text-black display-5 fw-bold">20</h1>
                      <h6 className="text-gray">Employer</h6>
                    </div>

                    <div className="col-3">
                    <h1 className="text-black display-5 fw-bold">5</h1>
                    <h6 className="text-gray">years of Experiences</h6>
                    </div>
                </div>
              </div>
          </div>
      </div>


        {/* Story Third Section */}

        <div className="bg-light border-top">
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
  
  export default Story;