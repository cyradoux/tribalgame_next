import React, {useEffect} from 'react';
import Hero from "@/components/hero/hero";
import Circles from "@/components/animations/circles/circles";
import DoubleImg from "@/components/double_img/double_img";
import Slider from "@/components/slider/slider";
import SectionTitle from "@/components/UI/section-title/section-title";
import airsoftHero from "@/assets/img/airsoft/airsoft2.webp";
import player1 from "../assets/img/airsoft/player5_bg.png";
import player2 from "../assets/img/airsoft/mask_bg.png"
import bg from "../assets/img/layout/bg.png";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";
import ImageStack from "@/components/image-stack/image-stack";
import rayure from "../assets/img/layout/RAYURE_airsoft.svg";
import airsoft1 from "../assets/img/airsoft/airsoft1.png";
import ContactForm from "@/components/contact-form/contact-form";

import slide1 from "../assets/img/airsoft/slides/slide1.png";
import slide2 from "../assets/img/airsoft/slides/slide2.png";
import slide3 from "../assets/img/airsoft/slides/slide3.png";
import slide4 from "../assets/img/airsoft/slides/slide4.png";
import slide5 from "../assets/img/airsoft/slides/slide5.png";
import slide6 from "../assets/img/airsoft/slides/slide6.png";
import paintball2 from "@/assets/img/paintball/paintball2.png";
import {unblockScroll} from "@/utils/scrollBlocker";

const slidesData = [
    { img: slide1.src, title: 'Slide 01', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide2.src, title: 'Slide 02', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide3.src, title: 'Slide 03', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide4.src, title: 'Slide 04', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide5.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide6.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
];

const Airsoft = () => {
    const sectionTitle = {
        titleBorderColor: "linear-gradient(to bottom, #72443A 0%, #333E25 100%)",
        titleBgColor: "rgba(0,0,0,0)"
    }

    const style = {
        backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover", // Ajustez selon le besoin
        backgroundAttachment: "fixed",
        height: "100%"
    }

    const style2 = {
        background: `linear-gradient(to bottom, rgba(51,62,37, 1) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: 0
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
                background: linear-gradient(transparent, #72443A);
                border-radius: 6px;
            }
            ::-webkit-scrollbar-thumb:hover
            {
                background: linear-gradient(transparent, #72443A);
            }
        `;
        const head = document.querySelector("head");
        head!.appendChild(style);
        unblockScroll();
    }, []);
    return (
        <>
            {/*-----------  Hero  -------------*/}
            <Hero/>

            {/*-----------  Description  -------------*/}
            <section id={"description_bloc"} style={{
                background: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className={"container-fluid"} >
                    <SectionTitle
                        title={"Jouer à se faire peur"}
                        borderColor={sectionTitle.titleBorderColor}
                        borderPosition={"align_left"}
                        background={'rgba(33,34,38,0)'}
                    ></SectionTitle>
                    <div className={"container"}>
                        <div className="row">
                            <div className={"col-md-6 description_box"}>
                                <p>
                                    Vous vous souvenez, lorsqu’<strong>avec vos camarades vous partiez sur le sentier de la guerre</strong> ?
                                    Ce petit frisson d’excitation et de frayeur, Tribal Games vous propose de le retrouver en version XXL.
                                </p>
                                <p>
                                    Avec vos amis d’aujourd’hui, munis de répliques incroyablement réalistes d’armes réelles,
                                    vous allez faire équipe pour essayer d’emporter la victoire sur l’équipe adverse.
                                </p>
                                <p>
                                    Votre terrain de jeu ? Un <strong>vaste espace extérieur de près de 40 000 mètres carrés</strong>.
                                    De quoi vous cacher, tendre des pièges et élaborer des stratégies qui vous donneront la supériorité sur vos adversaires !
                                </p>
                            </div>
                            <div className={"col-md-6"}>
                                <DoubleImg/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*-----------  Activity  -------------*/}
            <section id={"activity"} className={"container-fluid"} style={style}>
                <SectionTitle
                    title={"Une activité immersive et sans risque"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_right"}
                    background={'transparent'}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex"}}>
                    <div className="row content">
                        <ImageStack
                            frontImg={airsoft1.src}
                            backImg={rayure.src}
                            backImgAlign={"align_left"}
                        ></ImageStack>
                        <div className="col-md-6">
                            <p>
                                Vêtus de treillis fournis par Tribal, équipés de votre arme d’airsoft -
                                vous pouvez apporter la vôtre ou en emprunter une dans notre vaste choix -,
                                vous commencerez par <strong>former vos équipes et fixer les objectifs et le scénario</strong> de l’opération.
                            </p>
                            <p>
                                Puis vous pourrez donner libre cours à votre imagination et à vos aptitudes physiques.
                                N’ayez crainte, <strong>les billes en plastique des armes factices ne vous causeront aucune blessure</strong> !
                            </p>
                            <p>
                                C’est l’activité idéale pour en enterrement de vie de garçon, pleine de fun et d’adrénaline.
                                C’est aussi une façon efficace d’organiser une séance de teambuilding :
                                rien de tel qu’un peu de bon stress pour consolider la cohésion de vos collaborateurs !
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
                            frontImg={airsoft1.src}
                            backImg={rayure.src}
                            backImgAlign={"align_right"}
                        ></ImageStack>
                    </div>
                </div>
            </section>

            {/*-----------  Immersion  -------------*/}
            {/*
            <section id={"immersion"} className={"container-fluid"} style={style2}>
                <SectionTitle
                    title={"L’airsoft remplace plus d’une séance de gym !"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_left"}
                    background={'transparent'}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex",justifyContent: "flex-start"}}>
                    <div className="row content">
                        <div className="col-md-12">
                            <p>
                                Vêtus de treillis fournis par Tribal, équipés de votre arme d’airsoft -
                                vous pouvez apporter la vôtre ou en emprunter une dans notre vaste choix -,
                                vous commencerez par <strong>former vos équipes et fixer les objectifs et le scénario</strong> de l’opération.
                            </p>
                            <p>
                                Puis vous pourrez donner libre cours à votre imagination et à vos aptitudes physiques.
                                N’ayez crainte, <strong>les billes en plastique des armes factices ne vous causeront aucune blessure</strong> !
                            </p>
                            <p>
                                C’est l’activité idéale pour en enterrement de vie de garçon, pleine de fun et d’adrénaline.
                                C’est aussi une façon efficace d’organiser une séance de teambuilding :
                                rien de tel qu’un peu de bon stress pour consolider la cohésion de vos collaborateurs !
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/*-----------  Equipment  -------------*/}
            <section id={"equipment"} className={"container-fluid airsoft"} style={style}>
                <div className={"container-fluid"}>
                    <div className="row">
                        <SectionTitle
                            title={"Conditions et équipement"}
                            borderColor={sectionTitle.titleBorderColor}
                            borderPosition={'align_left'}
                            background={"transparent"}
                        ></SectionTitle>
                        <div className={"col-md-12 equipment_content"}>
                            <AnimatedBorder>
                                <p>
                                    Pour nous rejoindre, rien de plus simple il vous suffit d&apos;avoir entre 8 ans pour le laser et 16ans pour l&apos;airsoft.
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
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_right"}
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
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_left"}
                    background={"transparent"}
                ></SectionTitle>
                <ContactForm/>
            </div>

        </>
    );
};

export default Airsoft;