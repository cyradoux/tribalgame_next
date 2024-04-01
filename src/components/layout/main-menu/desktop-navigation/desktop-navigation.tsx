import React from 'react';
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import {useRouter} from "next/router";
import logo from "../../../../assets/img/logo/logo.png";

const DesktopNavigation = () => {
    const router = useRouter();

    return (
        <>
            <Link href="/" className="logo d-flex align-items-center">
                <img src={logo.src} alt=""/>
            </Link>
            <nav id="navbar" className="navbar">
                <ul>
                    <li><Link href="/airsoft" className={`${router.pathname === "/airsoft" ? "active" : ""}`}>Airsoft</Link></li>
                    <li><Link href="/archerytag" className={`${router.pathname === "/archerytag" ? "active" : ""}`}>Archery-tag</Link></li>
                    <li><Link href="/lasergame" className={`${router.pathname === "/lasergame" ? "active" : ""}`}>Lasergame</Link></li>
                    <li><Link href="/paintball" className={`${router.pathname === "/paintball" ? "active" : ""}`}>Paintball</Link></li>
                    <li><Link href="/apropos" className={`${router.pathname === "/apropos" ? "active" : ""}`}>Qui sommes nous ?</Link></li>
                    <li><Link href="/contact" className={`${router.pathname === "/contact" ? "active" : ""}`}>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default DesktopNavigation;