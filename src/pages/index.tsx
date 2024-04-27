import VerticalAccordeon from "@/components/vertical-accordeon/vertical-accordeon";
import SectionTitle from "@/components/UI/section-title/section-title";
import bg from "@/assets/img/layout/about.png";
import ImageStack from "@/components/image-stack/image-stack";
import airsoft1 from "@/assets/img/airsoft/airsoft1.png";
import rayure from "@/assets/img/layout/RAYURE.svg";
import satelliteView from "../../src/assets/img/layout/satellite_view.png";
import React from "react";
import Faq from "@/components/faq/faq";
import faqBg from "../../src/assets/img/layout/faq_bg.png"
import valuesBg from "../../src/assets/img/layout/values_bg.png";
import bgWithBg from "../../src/assets/img/layout/bg_with_border.svg";
import bgGeneric from "../../src/assets/img/layout/bg.png";
import basemap from "../../src/assets/img/layout/basemap.png";

/*----  3D  ----*/
import paintball3d from "../../src/assets/img/3d/3d-paintball-bg.png";
import paintballLogo from "../../src/assets/img/logo/paintballLogo.svg";
import paintballrmv3d from "../../src/assets/img/3d/3d-paintball-bg-removebg-preview.png";

import airsoft3d_bg from "../../src/assets/img/3d/airsoft-3d-bg.png";
import airsoftLogo from "../../src/assets/img/logo/airsoftLogo.svg";
import airsoft3d_rmv from "../../src/assets/img/3d/airsoft-3d-bg-removebg-preview.png";

import archery_3d_bg from "../../src/assets/img/3d/archery-tag-3d-bg.png";
import archeryTagLogo from "../../src/assets/img/logo/archerytagLogo.svg";
import archeryTag_RMV from "../../src/assets/img/3d/archery-tag-3d-bg-removebg-preview.png";

import lasertag_3d_bg from "../../src/assets/img/3d/lasertag_bg_3d.png";
import lasertagLogo from "../../src/assets/img/logo/lasergameLogo.svg";
import lasertagBgRmv from "../../src/assets/img/3d/laser_tag_3d_rmv.png";

const faqItems = [
    {
        question: "question 1",
        response: "La réponse"
    },
    {
        question: "question 2",
        response: "Réponse 2"
    },
    {
        question: "question 1",
        response: "La réponse"
    },
    {
        question: "question 2",
        response: "Réponse 2"
    },
    {
        question: "question 1",
        response: "La réponse"
    },
    {
        question: "question 2",
        response: "Réponse 2"
    },
    {
        question: "question 1",
        response: "La réponse"
    },
    {
        question: "question 2",
        response: "Réponse 2"
    }
]

export default function Home() {

    const sectionTitle = {
        titleBorderColor: "linear-gradient(to bottom, #FC1E00 0%, #242619 100%)",
        titleBgColor: "rgba(0,0,0,0)"
    }

    const style = {
        backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 100%), url("${bg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover",
        height: "100%"
    }

    const style2 = {
        backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 100%), url("${faqBg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover",
        height: "100%"
    }

    const style3 = {
        backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.1) 0%, rgba(33, 34, 38, 1) 100%), url("${valuesBg.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover",
        height: "100%"
    }

    const styleGen = {
        backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.6) 0%, rgba(33, 34, 38, 1) 50%), url("${bgGeneric.src}")`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover",
        height: "100%"
    }

    return (
        <>
            {/*--------------    Scenes    ----------------*/}
            <VerticalAccordeon/>

            {/*--------------    About    ----------------*/}
            <section id={"activity"} className={"container-fluid"} style={ style }>
                <SectionTitle
                    title={"Qui sommes nous ?"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_left"}
                    background={"rgba(0,0,0,0)"}
                >
                </SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex"}}>
                    <div className="row content">
                        <div className="col-md-6">
                            <h5 style={{fontSize: "1.7em", marginBottom: "1em"}}>Nous sommes tribal, l’association  de jeu  de tir  pour  tous !</h5>
                            <p>
                                tribal c&apos;est un terrain de 45 hectares est un max d&apos;adrénaline.
                                Nous pouvons accueillir tout type d&apos;événement  ( séminaires, enterrement de vie de garçon et jeune fille, anniversaire etc )
                                alors prenez vos répliques pour une ou plusieurs heures de jeu.
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

            {/*--------------    Offers    ----------------*/}
            <section id={"offers"} className={"container-fluid"} style={ styleGen }>
                <SectionTitle
                    title={"Nos activités"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_right"}
                    background={"rgba(0,0,0,0)"}
                ></SectionTitle>
                <div className={"row"}>

                    <div className={"col-md-6 card-3d"}>
                        <div className="card">
                            <div className="wrapper">
                                <img src={airsoft3d_bg.src} alt="" className="cover-image"/>
                            </div>
                            <img src={airsoftLogo.src} alt="" className="title"/>
                            <img src={airsoft3d_rmv.src} alt="character" className="character"/>
                        </div>
                    </div>

                    <div className={"col-md-6 card-3d"}>
                        <div className="card">
                            <div className="wrapper">
                                <img src={paintball3d.src} alt="" className="cover-image"/>
                            </div>
                            <img src={paintballLogo.src} alt="" className="title"/>
                            <img src={paintballrmv3d.src} alt="character" className="character"/>
                        </div>
                    </div>



                    <div className={"col-md-6 card-3d"}>
                        <div className="card">
                            <div className="wrapper">
                                <img src={archery_3d_bg.src} alt="" className="cover-image"/>
                            </div>
                            <img src={archeryTagLogo.src} alt="" className="title"/>
                            <img src={archeryTag_RMV.src} alt="character" className="character"/>
                        </div>
                    </div>

                    <div className={"col-md-6 card-3d"}>
                        <div className="card">
                            <div className="wrapper">
                                <img src={lasertag_3d_bg.src} alt="" className="cover-image"/>
                            </div>
                            <img src={lasertagLogo.src} alt="" className="title"/>
                            <img src={lasertagBgRmv.src} alt="character" className="character"/>
                        </div>
                    </div>
                </div>
            </section>



            {/*--------------    Values    ----------------*/}
            <section id={"values"} className={"container-fluid"} style={ style3 }>
                <SectionTitle
                    title={"Nos valeurs"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_left"}
                    background={"rgba(0,0,0,0)"}
                ></SectionTitle>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-12 values_content"} style={{backgroundImage: `url(${bgWithBg.src})`, backgroundSize: "cover"}}>
                            <p>
                                Chez Tribal nous sommes engagés pour l’inclusivité!
                                Encore aujourd&apos;hui les jeux de tirs( Airsoft, Paintball, lasergame,Archery-tag) ont malheureusement une image d&apos;activité très masculine…
                                Nous nous battons pour que cela change; chez nous tout le monde peut venir s&apos;amuser quel que soit le sexe ou même l&apos;âge !
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/*--------------    Localisation    ----------------*/}
            <section id={"activity"} className={"container-fluid"} style={style}>
                <SectionTitle
                    title={"Où nous trouver ?"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_right"}
                    background={"rgba(0,0,0,0)"}
                ></SectionTitle>
                <div className={"container"} style={{marginTop: "5rem", display: "flex"}}>
                    <div className="row content">
                        <ImageStack
                            frontImg={satelliteView.src}
                            backImg={rayure.src}
                            backImgAlign={"align_left"}
                        ></ImageStack>
                        <div className="col-md-6">
                            <h5 style={{fontSize: "1.2em"}}>Chemin d&apos;Antoing - 7500 Tournai - Belgique</h5>
                            <img src={basemap.src} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            {/*--------------    Faq    ----------------*/}
            <section id={"faq"} className={"container-fluid"} style={ style2 }>
                <SectionTitle
                    title={"Foires aux questions"}
                    borderColor={sectionTitle.titleBorderColor}
                    borderPosition={"align_right"}
                    background={"rgba(0,0,0,0)"}
                >
                </SectionTitle>
                <Faq faqItems={ faqItems }></Faq>
            </section>

        </>
    );
}
