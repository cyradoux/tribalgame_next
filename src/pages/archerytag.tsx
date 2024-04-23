import React, {useEffect} from 'react';
import GenericHero from "@/components/hero/generic-hero";

import archeryTagBg from "../assets/img/archerytag/archery_tag_bg.png";
import archerytagLogo from "../assets/img/logo/archerytagLogo.svg";
import bg from "@/assets/img/layout/bg.png";
import arrows from "../assets/img/archerytag/arrow_archery_tag.png";

import SectionTitle from "@/components/UI/section-title/section-title";
import GenericDoubleImages from "@/components/double_img/generic-double-images";
import ImageStack from "@/components/image-stack/image-stack";
import archeryTag1 from "@/assets/img/archerytag/archeryTag1.png";
import rayure from "@/assets/img/layout/RAYURE.svg";
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
import paintball2 from "@/assets/img/paintball/paintball2.png";

const slidesData = [
    { img: slide1.src, title: 'Slide 01', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide2.src, title: 'Slide 02', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide3.src, title: 'Slide 03', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide4.src, title: 'Slide 04', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide5.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide6.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
];

const Archerytag = () => {
    const sectionTitle = {
        titleBorderColor: "linear-gradient(to bottom, #BF4501 80%, #FF0000 100%)",
        titleBgColor: "rgba(0,0,0,0)"
    }

    const style = {
        backgroundImage: `radial-gradient(circle, rgba(191,69,1, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover", // Ajustez selon le besoin
        backgroundAttachment: "fixed",
        height: "100%"
    }

    const style2 = {
        background: `linear-gradient(to bottom, rgba(191,69,1, 1) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
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
            {/*-----------  Hero  -------------*/}
            <GenericHero
                bgColor={"linear-gradient(to top, rgba(191,69,1,0.2) 80%, rgba(33, 34, 38, 0.1) 100%)"}
                bgImage={archeryTagBg.src}
                logo={archerytagLogo.src}
                playersNb={10}
                minAge={10}
                duration={"55min"}
                title={"Découvrez l’ArcheryTag ou tir à l’arc sur cible mouvante"}
                subTitle={"Rejouez le meilleur d’Hunger Games dans une partie d’ArcheryTag, le tir de flèches en mousse.. Ferez-vous gagner votre équipe près du Hainaut ?"}
            />

            {/*-----------  Description  -------------*/}
            <section id={"description_bloc"} style={{
                background: `radial-gradient(circle, rgba(191,69,1, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className={"container-fluid"} >
                    <SectionTitle
                        title={"Un jeu d’adresse et de réflexion"}
                        borderColor={sectionTitle.titleBorderColor}
                        borderPosition={"align_left"}
                        background={'rgba(33,34,38,0)'}
                    ></SectionTitle>
                    <div className={"container"}>
                        <div className="row">
                            <div className={"col-md-6 description_box"}>
                                <p>
                                    Profitez d’un terrain de 40 000 mètres carrés adapté pour exercer vos talents d’archer ! En équipe ou en solitaire, partez affronter en équipe vos adversaires avec détermination et courage.
                                </p>
                                <p>
                                    À l’issue de la partie, il n’en restera qu’un. Votre passeport pour la victoire ? Un arc, des flèches en mousse, une bonne maîtrise de votre arme arc, et surtout votre intelligence.
                                    Car ici c’est sur des cibles mouvantes que vous allez tirer! Comment les déloger, viser et tirer dans un même mouvement ?
                                </p>
                                <p>
                                    Comment ne pas atteindre votre propre équipe ? Et comment vous protéger des ennemis ? Autant de défis amusants et pleins d’adrénaline que vous saurez relever.
                                </p>
                            </div>
                            <div className={"col-md-6"}>
                                <GenericDoubleImages
                                    img={arrows.src}
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
                    title={"Une expérience plébiscitée par les joueurs "}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_right"}
                    background={'transparent'}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex"}}>
                    <div className="row content">
                        <ImageStack
                            frontImg={archeryTag1.src}
                            backImg={rayure.src}
                            backImgAlign={"align_left"}
                        ></ImageStack>
                        <div className="col-md-6">
                            <p>
                                Avant de vous lancer dans l’aventure, découvrez les avis et les récits de ceux qui vous auront précédé,sur Google.
                            </p>
                            <p>
                                Leurs notes moyennes de 4,8 sur 5, leur enthousiasme et leur fidélité nous conduisent à toujours chercher à améliorer l’expérience des joueurs.
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
                                Vous aurez mille raisons de vous lancer dans une séance d’ArcheryTag. Au-delà de son originalité - nous sommes les seuls à la proposer dans notre région-, si vous cherchez tout simplement à rencontrer d’autres passionnés de jeux réels, vous n’aurez aucun mal à vous intégrer dans une équipe.
                            </p>
                            <p>
                                C’est l’activité idéale pour un anniversaire en famille ou  entre amis, un enterrement de vie de garçon ou de jeune fille ou encore une séance de teambuilding d’entreprise.
                                Et tout simplement pour passer une excellente journée avec ses amis.
                            </p>
                            <p>
                                C’est l’activité idéale pour un anniversaire en famille ou  entre amis, un enterrement de vie de garçon ou de jeune fille ou encore une séance de teambuilding d’entreprise.
                                Et tout simplement pour passer une excellente journée avec ses amis.
                            </p>
                        </div>

                        <ImageStack
                            frontImg={archeryTag1.src}
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
                    title={"Femmes, hommes, enfants, tous fans d’ArcheryTag"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_left"}
                    background={'transparent'}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex",justifyContent: "flex-start"}}>
                    <div className="row content">
                        <div className="col-md-12">
                            <p>
                                Vous aurez mille raisons de vous lancer dans une séance d’ArcheryTag. Au-delà de son originalité - nous sommes les seuls à la proposer dans notre région-, si vous cherchez tout simplement à rencontrer d’autres passionnés de jeux réels, vous n’aurez aucun mal à vous intégrer dans une équipe.
                                C’est l’activité idéale pour un anniversaire en famille ou  entre amis, un enterrement de vie de garçon ou de jeune fille ou encore une séance de teambuilding d’entreprise.
                                Et tout simplement pour passer une excellente journée avec ses amis.
                            </p>
                            <p>
                                C’est l’activité idéale pour un anniversaire en famille ou  entre amis, un enterrement de vie de garçon ou de jeune fille ou encore une séance de teambuilding d’entreprise.
                                Et tout simplement pour passer une excellente journée avec ses amis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            *}

            {/*-----------  Equipment  -------------*/}
            <section id={"equipment"} className={"container-fluid archerytag"} style={style}>
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
                                    Pour nous rejoindre, rien de plus simple il vous suffit d'avoir entre 8 ans pour le laser et 16ans pour le l'airsoft.
                                </p>
                                <p>
                                    Au niveau de l'équipement vous pouvez apporter votre équipement ou en louer sur place.
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
            <div className={"container-fluid contact_form_box"} style={style}>
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

export default Archerytag;