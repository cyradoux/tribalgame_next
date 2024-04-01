import React, {useEffect, useState} from 'react';
import DesktopNavigation from "@/components/layout/main-menu/desktop-navigation/desktop-navigation";
import MobileNavigation from "@/components/layout/main-menu/MobileNavigation/mobile-navigation";

const MainMenu = () => {
    const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header id="header" className={`header d-flex align-items-center ${isSticky ? "sticked" : ""}`} style={{flexDirection: "column"}}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between" style={{padding: "15px"}}>
                <DesktopNavigation/>
                <MobileNavigation/>
            </div>
        </header>
    );
};

export default MainMenu;