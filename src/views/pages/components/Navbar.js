import {NavLink} from "react-router-dom";

import '../../../assets/css/Cus.css';
import { useState,} from "react";

const Navbar = props => {


    const [open, setOpen] = useState(false);

    const menu = () => {
       setOpen(!open)

    }


    return (
        <div>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                <nav className="navbar navbar-expand-lg z-1000">
                    <div className="container">
                        <h1 className="navbar-brand" href="#">RepoHub</h1>
                         <div className={`${open ? "show" : ''} menu-icon`} onClick={menu} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            <span></span>
                            <span></span>
                         </div>
                        
                        
                    </div>
                </nav>
                </div>
            </div>
        </div>

            <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header">
            
            </div>
            <div className="offcanvas-body">
               <div>
                    <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0"><NavLink to="/" className={ ({isActive}) => isActive ? "text-danger h6 text-decoration-none" : "h6 text-decoration-none" }>Home</NavLink></li>
                            <li className="list-group-item border-0"><NavLink to="/story" className={ ({isActive}) => isActive ? "text-danger h6 text-decoration-none" : "h6 text-decoration-none" }>Story</NavLink></li>
                            <li className="list-group-item border-0"><NavLink to="/services" className={ ({isActive}) => isActive ? "text-danger h6 text-decoration-none" : "h6 text-decoration-none" }>Services</NavLink></li>
                            <li className="list-group-item border-0"><NavLink to="/contact" className={ ({isActive}) => isActive ? "text-danger h6 text-decoration-none" : "h6 text-decoration-none" }>Contact</NavLink></li>
                    </ul> 
               </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;