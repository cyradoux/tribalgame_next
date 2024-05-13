import React, { useState } from "react";
import { LuAlignRight } from "react-icons/lu";
import Link from "next/link";
import bg from "../../../../assets/img/layout/bg.webp";
import logo from "../../../../assets/img/logo/logo.webp";
import Image from "next/image";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClickMobileMenu}
        className="navbar-toggler"
        type="button"
      >
        <LuAlignRight className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      </button>

      <div
        className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
        style={{
          backgroundColor: "rgba(0,0,0,1)",
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="offcanvas-header">
          <Image height={50} width={100} src={logo.src} alt="" />
          <button
            onClick={handleClickMobileMenu}
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link
                onClick={handleClickMobileMenu}
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={handleClickMobileMenu}
                className="nav-link"
                href="/airsoft"
              >
                Airsoft
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={handleClickMobileMenu}
                className="nav-link"
                href="/archerytag"
              >
                Archery-tag
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={handleClickMobileMenu}
                className="nav-link"
                href="/lasergame"
              >
                Lasergame
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={handleClickMobileMenu}
                className="nav-link"
                href="/paintball"
              >
                Paintball
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={handleClickMobileMenu}
                className="nav-link"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
