import React, {useEffect} from 'react';
import SectionTitle from "@/components/UI/section-title/section-title";
import ContactForm from "@/components/contact-form/contact-form";
import bg from "@/assets/img/layout/layout_assault.png";
import {unblockScroll} from "@/utils/scrollBlocker";

const Contact = () => {
    const style = {
        backgroundImage: `linear-gradient(to top, rgba(33, 34, 38, 0.01) 0%, rgba(33, 34, 38, 1) 80%), url("${bg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: 0,
        minHeight: "100vh",
        marginTop: "200px"
    }

    useEffect(() => {
        unblockScroll()
    }, []);

    return (
        <>
            {/*-----------  Contact Form  -------------*/}
            <div className={"container-fluid contact_form_box"} style={style}>
                <SectionTitle
                    title={"Contactez-nous"}
                    borderColor={'var(--color-secondary-airsoft)'}
                    borderPosition={"align_left"}
                    background={"transparent"}
                ></SectionTitle>
                <ContactForm/>
            </div>
        </>
    );
};

export default Contact;