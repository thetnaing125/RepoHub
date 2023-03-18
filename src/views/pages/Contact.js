
import { Helmet } from "react-helmet";
import Thumail from "../../assets/img/thumail.png";
import Logo from "../../assets/img/logo-1.png";


import { useEffect } from "react";

import ScrollReveal from "scrollreveal";

const Contact = props =>{

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

            {/* First Section */}
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-10">

                    <section className="container">
                        <div className="row headline">
                            <div className="col-12">
                                <div className="mt-5 py-5">
                                  <h2 className="text-secondary">Wazup there</h2>
                                  <h1 className="fw-bold text-black">
                                    We’re here for you, drop as a line
                                  </h1>
                                </div>
                            </div>
                        </div>
                    </section>

                  </div>
              </div>

          </div>

            {/* Second Section */}
          <div className="container mb-5">
              <div className="row justify-content-center">
                <div className="col-lg-10">

                     <section className="container">
                        <div className="row">
                          <div className="col-12">

                              <div className="border-bottom col-7 headline">
                                  <div className="d-flex flex-row justify-content-start mb-2 py-3">
                                      <div className="col-12 text-secondary"><h5>New Business</h5></div>
                                      <div className="col-12 text-secondary"><i class="fa-solid fa-arrow-right"></i></div>
                                  </div>
                              </div>


                              <div className="border-bottom col-7 headline">
                                    <div className="d-flex flex-row justify-content-start mb-2 py-3">
                                      <div className="col-12 text-secondary"><h5>Send a message</h5></div>
                                      <div className="col-12 text-secondary"><i class="fa-solid fa-arrow-right"></i></div>
                                  </div>
                              </div>

                              <div className="border-bottom col-7 mb-5 headline">
                                    <div className="d-flex flex-row justify-content-start mb-2 py-3">
                                      <div className="col-12 text-secondary"><h5>Careers</h5></div>
                                      <div className="col-12 text-secondary"><i class="fa-solid fa-arrow-right"></i></div>
                                  </div>
                              </div>

                          </div>
                        </div>
                     </section>
                </div>
              </div>
          </div>


          {/* Second Section */}
          <div className="container mb-5">
              <div className="row md:block justify-content-center">
                  <div className="col-lg-10">
                        <section className="container">
                            <div className="row">
                                <div className="col headline">
                                  <p>General inquiries —</p>
                                  <h5 className="fw-bold text-black">Quick chat</h5>
                                  <p><i class="fa-brands fa-facebook-messenger"></i>Message on facebook</p>
                                </div>

                                <div className="col headline">
                                  <p>New business —</p>
                                  <h5 className="fw-bold text-black md:fs-6">hi@repohub.co</h5>
                                  <p>+95 9 888 777 666</p>
                                </div>

                                <div className="col headline">
                                  <p>Office —</p>
                                  <h5 className="fw-bold text-black">Yangon</h5>
                                  <p>Yangon, Myanmar</p>
                                </div>
                            </div>
                        </section>
                  </div>
              </div>
          </div>

      </div>
    )
  }
  
  export default Contact;