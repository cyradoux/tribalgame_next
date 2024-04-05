import React, {useEffect} from 'react';
import Hero from "@/components/hero/hero";

const Airsoft = () => {

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            body
            {
                background: #000
            }
            ::-webkit-scrollbar
            {
                width: 12px;
            }
            ::-webkit-scrollbar-thumb
            {
                background: linear-gradient(transparent, #E36A01);
                border-radius: 6px;
            }
            ::-webkit-scrollbar-thumb:hover
            {
                background: linear-gradient(transparent, #E36A01);
            }
        `;
        const head = document.querySelector("head");
        head!.appendChild(style);
    }, []);
    return (
        <>
            <Hero/>
        </>
    );
};

export default Airsoft;