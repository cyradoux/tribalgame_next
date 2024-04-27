import {useEffect, useState} from "react";

export const useUpdateWidth = () => {
    const [windowWidth, setWindowWidth] = useState(100);

    useEffect(() => {
        const handleResize = () => { setWindowWidth(window.innerWidth) };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth;
}