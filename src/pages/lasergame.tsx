import React, {useEffect} from 'react';
import Slider from "@/components/slider/slider";
import SectionTitle from "@/components/UI/section-title/section-title";
import player2 from "../assets/img/airsoft/mask_bg.png"
import bg from "../assets/img/layout/bg.png";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";
import ImageStack from "@/components/image-stack/image-stack";
import rayure from "../assets/img/layout/RAYURE_laser.svg";
import lasergame1 from "../assets/img/lasergame/lasergame1.png";
import ContactForm from "@/components/contact-form/contact-form";

import slide1 from "../assets/img/airsoft/slides/slide1.png";
import slide2 from "../assets/img/airsoft/slides/slide2.png";
import slide3 from "../assets/img/airsoft/slides/slide3.png";
import slide4 from "../assets/img/airsoft/slides/slide4.png";
import slide5 from "../assets/img/airsoft/slides/slide5.png";
import slide6 from "../assets/img/airsoft/slides/slide6.png";
import GenericHero from "@/components/hero/generic-hero";
import lasergameBg from "@/assets/img/lasergame/lasergame_bg_hero.png";
import lasergameLogo from "@/assets/img/logo/lasergameLogo.svg";
import GenericDoubleImages from "@/components/double_img/generic-double-images";
import lasertagWeapons from "@/assets/img/lasergame/lasertag_weapon.png";
import paintball2 from "@/assets/img/paintball/paintball2.png";

const slidesData = [
    { img: slide1.src, title: 'Slide 01', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide2.src, title: 'Slide 02', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide3.src, title: 'Slide 03', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide4.src, title: 'Slide 04', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide5.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide6.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
];

const Lasergame = () => {
    const sectionTitle = {
        titleBorderColor: "linear-gradient(to bottom, #FF00F5 0%, #7000FF 100%)",
        titleBgColor: "rgba(0,0,0,0)"
    }

    const style = {
        backgroundImage: `radial-gradient(circle, rgba(112,0,255,0.2) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover", // Ajustez selon le besoin
        backgroundAttachment: "fixed",
        height: "100%"
    }

    const style2 = {
        background: `linear-gradient(to bottom, rgba(112,0,255,0.2) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
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
                background: linear-gradient(transparent, #FF00F5);
                border-radius: 6px;
            }
            ::-webkit-scrollbar-thumb:hover
            {
                background: linear-gradient(transparent, #FF00F5);
            }
        `;
        const head = document.querySelector("head");
        head!.appendChild(style);
    }, []);

    return (
        <>
            {/*-----------  Hero  -------------*/}
            <GenericHero
                bgColor={"linear-gradient(to top, rgba(112,0,255,0.2) 0%, rgba(33, 34, 38, 0.1) 100%)"}
                bgImage={lasergameBg.src}
                logo={lasergameLogo.src}
                playersNb={10}
                minAge={10}
                duration={"55min"}
                title={"Combattants du futur, amusez-vous dans une partie de Lasergame outdoor."}
                subTitle={"Près de Lille, Tribal Games est ses équipements ultramodernes vous accueille pour des parties endiablées de Laser Tag."}
            />

            {/*-----------  Description  -------------*/}
            <section id={"description_bloc"} style={{
                background: `radial-gradient(circle, rgba(112,0,255,0.2) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className={"container-fluid"} >
                    <SectionTitle
                        title={"Bienvenue dans le futur !"}
                        borderColor={sectionTitle.titleBorderColor}
                        borderPosition={"align_left"}
                        background={'rgba(33,34,38,0)'}
                    ></SectionTitle>
                    <div className={"container"}>
                        <div className="row">
                            <div className={"col-md-6 description_box"}>
                                <p>
                                    Pénétrez Evoluez avec votre équipe sur un terrain adapté, dans l’obscurité d’un labyrinthe inquiétant. muni de votre blaster,
                                    d&apos;un bandeau réflecteur et surtout d&apos;un bracelet shock plastron et de votre revolver laser, votre mission est simple :
                                    réussir à marquer un maximum de points et à laisser l’équipe adverse sur le carreau.
                                </p>
                                <p>
                                    Pour ce faire, un seul moyen : tirer le premier, bien viser les réflecteurs ou le blaster plastron de l’ennemi… et éviter d’être vous-même atteint.
                                    Attention : les miroirs ne sont pas vos amis  les bracelets shock délivrent une DECHARGE ELECTRIQUE lorsqu&apos;un adversaire vise votre bandeau ou votre blaster !
                                </p>
                                <p>
                                    Selon l&apos;âge et votre témérité, vous choisirez entre une simple vibration ou une décharge allant du niveau 1 à 5!
                                    Proposant des équipements de dernière génération, le lasergame Laser Tag de TRIBAL Games est est une expérience unique, immersive et qui vous fera pousser des cris.
                                    De frayeur ou de joie ? À vous de voir !
                                </p>
                            </div>
                            <div className={"col-md-6"}>
                                <GenericDoubleImages
                                    img={lasertagWeapons.src}
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
                    title={"À chaque partie ses vainqueurs"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_right"}
                    background={'transparent'}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex"}}>
                    <div className="row content">
                        <ImageStack
                            frontImg={lasergame1.src}
                            backImg={rayure.src}
                            backImgAlign={"align_left"}
                        ></ImageStack>
                        <div className="col-md-6">
                            <p>
                                Une partie de lasergame Laser Tag dure en moyenne 20 minutes.
                                De quoi aller au bout de vos émotions en restant sur le qui-vive tout le temps de la partie.
                            </p>
                            <p>
                                Le suspense est à son comble lorsque vous sortez de la salle du terrain pour attendre les résultats.
                                Qui a gagné ? Et dans votre équipe, êtes-vous le meilleur ou le boulet qui fait perdre les autres ?
                            </p>
                            <p>
                                Très vite, en dégustant une boisson bien méritée, vous obtenez les statistiques complètes.
                                Là encore, des cris se font entendre. Avant de vous remettre en selle pour une nouvelle partie.
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

            {/*-----------  Immersion  -------------*/}
            {/*
            <section id={"immersion"} className={"container-fluid"} style={style2}>
                <SectionTitle
                    title={"Le jeu le plus fun, des plus jeunes aux plus expérimentés"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_left"}
                    background={'transparent'}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex",justifyContent: "flex-start"}}>
                    <div className="row content">
                        <div className="col-md-12">
                            <p>
                                À en croire les commentaires des joueurs qui ont déjà testé le lasergame Laser Tag de  Tribal Games (voir les avis sur Google), l’expérience est vite addictive.
                                Plus on joue, plus on connaît les pièges et les meilleures tactiques, et plus on a envie de faire exploser son score.
                            </p>
                            <p>
                                Enterrements de vie de jeune fille ou de garçons, anniversaires d’enfants, soirée entre copains, séance de teambuilding… ne ratez pas une occasion pour jouer.
                                Et gagner  s'amuser quoi qu'il arrive !
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/*-----------  Equipment  -------------*/}
            <section id={"equipment"} className={"container-fluid lasergame"} style={style}>
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

export default Lasergame;