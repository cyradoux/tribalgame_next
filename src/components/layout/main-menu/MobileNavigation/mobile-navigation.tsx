import React, {useState} from 'react';
import {LuAlignRight} from "react-icons/lu";
import Link from "next/link";

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button onClick={handleClickMobileMenu} className="navbar-toggler" type="button" >
                <LuAlignRight className="mobile-nav-toggle mobile-nav-show bi bi-list"/>
            </button>

            <div className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Kim Naturopathe<span>.</span></h5>
                    <button onClick={handleClickMobileMenu} type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link onClick={handleClickMobileMenu} className="nav-link active" aria-current="page" href="/">Accueil</Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={handleClickMobileMenu} className="nav-link" href="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={handleClickMobileMenu} className="nav-link" href="/blog">Blog</Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={handleClickMobileMenu} className="nav-link" href="/avis">Avis</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNavigation;