import React from 'react';
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import {useRouter} from "next/router";
import logo from "../../../../assets/img/logo/logo.png";
import { unblockScroll } from "../../../../utils/scrollBlocker";

const DesktopNavigation = () => {
    const router = useRouter();

    return (
        <>
            <Link href="/" className="logo d-flex align-items-center">
                <img src={logo.src} alt=""/>
            </Link>
            <nav id="navbar" className="navbar">
                <ul>
                    <li><Link href="/airsoft" onClick={unblockScroll} className={`${router.pathname === "/airsoft" ? "active" : ""}`}>Airsoft</Link></li>
                    <li><Link href="/archerytag" onClick={unblockScroll} className={`${router.pathname === "/archerytag" ? "active" : ""}`}>Archery-tag</Link></li>
                    <li><Link href="/lasergame" onClick={unblockScroll} className={`${router.pathname === "/lasergame" ? "active" : ""}`}>Lasergame</Link></li>
                    <li><Link href="/paintball" onClick={unblockScroll} className={`${router.pathname === "/paintball" ? "active" : ""}`}>Paintball</Link></li>
                    <li><Link href="/contact" onClick={unblockScroll} className={`${router.pathname === "/contact" ? "active" : ""}`}>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default DesktopNavigation;