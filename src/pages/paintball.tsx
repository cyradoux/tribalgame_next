import React, {useEffect} from 'react';
import GenericHero from "@/components/hero/generic-hero";

import paintballBg from "../assets/img/paintball/paintball_bg_hero.png";
import paintballLogo from "../assets/img/logo/paintballLogo.svg";
import bg from "@/assets/img/layout/bg.png";
import ball from "../assets/img/paintball/paintball_rmbg.png";

import SectionTitle from "@/components/UI/section-title/section-title";
import GenericDoubleImages from "@/components/double_img/generic-double-images";
import ImageStack from "@/components/image-stack/image-stack";
import paintball1 from "@/assets/img/paintball/paintball1.png";
import paintball2 from "@/assets/img/paintball/paintball2.png";
import rayure from "@/assets/img/layout/RAYURE_paintball.svg";
import player2 from "@/assets/img/airsoft/mask_bg.png";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";

import slide1 from "../assets/img/archerytag/slides/slide1.png";
import slide2 from "../assets/img/archerytag/slides/slide2.png";
import slide3 from "../assets/img/archerytag/slides/slide3.png";
import slide4 from "../assets/img/archerytag/slides/slide4.png";
import slide5 from "../assets/img/archerytag/slides/slide5.png";
import slide6 from "../assets/img/archerytag/slides/slide6.png";
import Slider from "@/components/slider/slider";
import ContactForm from "@/components/contact-form/contact-form";
import {unblockScroll} from "@/utils/scrollBlocker";

const slidesData = [
    { img: slide1.src, title: 'Slide 01', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide2.src, title: 'Slide 02', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide3.src, title: 'Slide 03', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide4.src, title: 'Slide 04', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide5.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide6.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
];
const Paintball = () => {
    const sectionTitle = {
        titleBorderColor: "linear-gradient(to bottom, #FF0000 0%, #3300FF 100%)",
        titleBgColor: "rgba(0,0,0,0)"
    }

    const style = {
        backgroundImage: `radial-gradient(circle, rgba(255,0,0, 0.3) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover", // Ajustez selon le besoin
        backgroundAttachment: "fixed",
        height: "100%"
    }

    const style2 = {
        background: `linear-gradient(to bottom, rgba(255,0,0, 0.3) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    }

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            body
            {
                background: rgba(33, 34, 38, 1);
            }
            ::-webkit-scrollbar
            {
                width: 12px;
            }
            ::-webkit-scrollbar-thumb
            {
                background: linear-gradient(transparent, rgb(255,0,0));
                border-radius: 6px;
            }
            ::-webkit-scrollbar-thumb:hover
            {
                background: linear-gradient(transparent, #E36A01);
            }
        `;
        const head = document.querySelector("head");
        head!.appendChild(style);
        unblockScroll();
    }, []);

    return (
        <>
            {/*-----------  Hero  -------------*/}
            <GenericHero
                bgColor={"linear-gradient(to top,rgba(33, 34, 38, 0.1) 0%, rgba(255,0,0,0.1) 100%)"}
                bgImage={paintballBg.src}
                logo={paintballLogo.src}
                playersNb={10}
                minAge={10}
                duration={"55min"}
                title={"100% Fun-100% Adrénaline et cris de joie : jouez au paintball près de Tournai"}
                subTitle={"Rires et sensations extrêmes adrénaline se mêlent lors d’incroyables parties de paintball chez Tribal Games, entre proche de Ath, Mons, Mouscron et la en Wallonie. Sensations extrêmes entre amis au programme d’un après-midi de Paintball "}
            />

            {/*-----------  Description  -------------*/}
            <section id={"description_bloc"} style={{
                backgroundImage: `radial-gradient(circle, rgba(255,0,0, 0.3) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className={"container-fluid"} >
                    <SectionTitle
                        title={"Faites monter l’adrénaline"}
                        borderColor={ sectionTitle.titleBorderColor }
                        borderPosition={"align_left"}
                        background={'rgba(33,34,38,0)'}
                    ></SectionTitle>
                    <div className={"container"}>
                        <div className="row">
                            <div className={"col-md-6 description_box"}>
                                <p>
                                    Vous aimez les jeux vidéo et tirer sur tout ce qui bouge ?
                                    Et si vous partiez vivre une aventure dans la réalité, sans danger, mais avec beaucoup de frissons !
                                </p>
                                <p>
                                    Le paintball est fait pour celles et ceux qui aiment se dépasser, vivre des moments forts, physiques, excitants et réjouissants.
                                    Avec des amis ou accompagné.e de votre chéri.e, lancez-vous dans un univers ludique et passionnant !
                                </p>
                                <p>
                                    Imaginez : un terrain de jeu de 40 000 mètres carrés, des équipes dispersées dans les bois et la nature.
                                    À vous de mener votre équipe à la victoire !
                                </p>
                            </div>
                            <div className={"col-md-6"}>
                                <GenericDoubleImages
                                    img={ball.src}
                                    circlesColors={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*-----------  Activity  -------------*/}
            <section id={"activity"} className={"container-fluid"} style={style}>
                <SectionTitle
                    title={"Évitez les billes de peintures et remportez la partie"}
                    borderColor={ sectionTitle.titleBorderColor }
                    borderPosition={"align_right"}
                    background={"rgba(0,0,0,0.0)"}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex"}}>
                    <div className="row content">
                        <ImageStack
                            frontImg={paintball1.src}
                            backImg={rayure.src}
                            backImgAlign={"align_left"}
                        ></ImageStack>
                        <div className="col-md-6">
                            <p>
                                Avec votre fusil lanceur et vos centaines de balles de peinture, lancez-vous au sein d’une équipe constituée d’amis à la poursuite de vos adversaires.
                                Le paintball, c’est plus qu’une traque ou un combat sans merci.
                            </p>
                            <p>
                                C’est surtout un grand champ de bataille parsemé d’obstacles, de pièges, d’où un ennemi peut surgir à tout moment.
                                Muni de votre combinaison intégrale et de votre masque, vous ne risquez rien… sauf l’élimination !
                            </p>
                            <p>
                                Soyez plus malin que ceux de l’équipe d’en face. Toujours sur vos gardes, développez une stratégie gagnante, entre prudence et bravoure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*-----------  Immersion  -------------*/}
            <section id={"activity"} className={"container-fluid"} style={style}>
                <SectionTitle
                    title={"Un moment de pur bonheur à partager"}
                    borderColor={ sectionTitle.titleBorderColor }
                    borderPosition={"align_left"}
                    background={"rgba(0,0,0,0.0)"}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex"}}>
                    <div className="row content">

                        <div className="col-md-6">
                            <p>
                                Pourquoi vous lancer dans une partie de paintball ?
                                Demandez-le aux dizaines de milliers de joueurs qui vous ont précédé. Retrouvez leurs avis sur Google.
                            </p>
                            <p>
                                Ils ont apprécié la performance sportive, les rires et les frayeurs entre amis, le terrain de jeu incroyablement vaste…
                                Que ce soit lors d’une séance de teambuilding, d’un anniversaire.
                            </p>
                            <p>
                                C’est l’activité idéale pour un enterrement de vie de garçon ou de filles, pleine de fun
                                et d’adrénaline nous vous offrirons le scénario du LAPINOU ou d’une sortie entre amis, vous ne serez pas déçu !
                            </p>
                        </div>

                        <ImageStack
                            frontImg={paintball2.src}
                            backImg={rayure.src}
                            backImgAlign={"align_right"}
                        ></ImageStack>
                    </div>
                </div>
            </section>

            {/*-----------  Equipment  -------------*/}
            <section id={"equipment"} className={"container-fluid paintball"} style={style}>
                <div className={"container-fluid"}>
                    <div className="row">
                        <SectionTitle
                            title={"Conditions et équipement"}
                            borderColor={ sectionTitle.titleBorderColor }
                            borderPosition={'align_right'}
                            background={"transparent"}
                        ></SectionTitle>
                        <div className={"col-md-12 equipment_content"}>
                            <AnimatedBorder>
                                <p>
                                    Pour nous rejoindre, rien de plus simple il vous suffit d&apos;avoir entre 8 ans pour le laser et 16ans pour le l&apos;airsoft.
                                </p>
                                <p>
                                    Au niveau de l&apos;équipement vous pouvez apporter votre équipement ou en louer sur place.
                                </p>
                            </AnimatedBorder>
                        </div>
                    </div>
                </div>
            </section>

            {/*-----------  Gallery  -------------*/}
            <section id={"gallery"} className={"container-fluid"} style={style}>
                <SectionTitle
                    title={"Galerie Photos"}
                    borderColor={ sectionTitle.titleBorderColor }
                    borderPosition={"align_left"}
                    background={"transparent"}
                ></SectionTitle>
                <Slider
                    sliderItems={slidesData}
                />
            </section>

            {/*-----------  Contact Form  -------------*/}
            <div id="contact" className={"container-fluid contact_form_box"} style={style}>
                <SectionTitle
                    title={"Contactez-nous"}
                    borderColor={ sectionTitle.titleBorderColor }
                    borderPosition={"align_right"}
                    background={"transparent"}
                ></SectionTitle>
                <ContactForm/>
            </div>

        </>
    );
};

export default Paintball;