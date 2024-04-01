import React, {ReactNode} from 'react';
import MainMenu from "@/components/layout/main-menu/main-menu";
import Footer from "@/components/layout/footer/footer";

export type LayoutType = {
    children: ReactNode
}

const Layout = ({ children }: LayoutType) => {
    return (
        <>

            <main>
                <MainMenu/>
                { children }
                <Footer/>
            </main>

        </>
    );
};

export default Layout;