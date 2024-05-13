{
  /*-----------  Utilitaires  -------------*/
}

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

{
  /*-----------  composants  -------------*/
}
import DoubleImg from "@/components/double_img/generic-double-images";
import Slider from "@/components/slider/slider";
import SectionTitle from "@/components/UI/section-title/section-title";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";
import ImageStack from "@/components/image-stack/image-stack";
import ContactForm from "@/components/contact-form/contact-form";
import Comments from "@/components/comments/comments";

import { unblockScroll } from "@/utils/scrollBlocker";
import Layout from "@/components/layout/layout";
import { fetchReviews } from "@/services/googleBusinessService";

{
  /*-----------  Images  -------------*/
}

import slide1 from "../assets/img/airsoft/slides/slide1.png";
import slide2 from "../assets/img/airsoft/slides/slide2.png";
import slide3 from "../assets/img/airsoft/slides/slide3.png";
import slide4 from "../assets/img/airsoft/slides/slide4.png";
import slide5 from "../assets/img/airsoft/slides/slide5.png";
import slide6 from "../assets/img/airsoft/slides/slide6.png";

import rayure from "../assets/img/layout/RAYURE_airsoft.svg";
import airsoft1 from "../assets/img/airsoft/airsoft-pour-tous.webp";
import airsoft2 from "../assets/img/airsoft/club-airsoft.webp";
import player2 from "../assets/img/airsoft/mask_bg.png";
import bg from "../assets/img/layout/bg.png";
import mask from "../assets/img/airsoft/mask-removebg.webp";
import PriceSlider from "@/components/priceBox/PriceSlider";
import arrow from "../assets/img/icones/Arrow.webp";
import airsoftHero from "../assets/img/airsoft/playerHero.webp";

{
  /*-----------  Données  -------------*/
}

const slidesData = [
  {
    img: slide1.src,
  },
  {
    img: slide2.src,
  },
  {
    img: slide3.src,
  },
  {
    img: slide4.src,
  },
  {
    img: slide5.src,
  },
  {
    img: slide6.src,
  },
];

export const metadataAirsoft = {
  title: "Tribal Airsoft | Terrain de 4 hectares en Wallonie",
  description:
    "Terrain d'Airsoft de 40 000 m² aménagé à Tournai, à 15 min de Lille, pour des moments inoubliables seul, entre amis ou en club. Réservez dès maintenant ! (location de répliques et protection possible)",
};

const reviews = fetchReviews();

const Airsoft = () => {
  const sectionTitle = {
    titleBorderColor: "linear-gradient(to bottom, #72443A 0%, #333E25 100%)",
    titleBgColor: "rgba(0,0,0,0)",
  };

  const style = {
    backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover", // Ajustez selon le besoin
    backgroundAttachment: "fixed",
    height: "100%",
  };

  const style2 = {
    background: `linear-gradient(to bottom, rgba(51,62,37, 1) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    padding: 0,
  };

  const heroStyle = {
    background: `linear-gradient(to top, rgba(33, 34, 38, 1) 0%, rgba(35, 40, 25, 0.5) 100%), url("${airsoftHero.src}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  type PriceSliderType = {
    name: string;
    description: string | string[];
    price: {
      type: "fixed" | "onDemand";
      amount?: number;
      additionalPerHalfHour?: number;
    };
    cta: {
      texte: string;
      link: string;
    };
  };

  const priceAirsoftLoisir: PriceSliderType[] = [
    {
      name: "Formule Découverte (2H00)",
      description: [
        "500 billes incluses",
        "Masque de protection",
        "M4 avec mode coup par coup/rafale",
        "Plastron pour les femmes",
      ],
      price: {
        type: "fixed",
        amount: 35,
      },
      cta: {
        texte: "Réserver",
        link: "/airsoft#contact",
      },
    },
    {
      name: "Heure supplémentaire",
      description: "Encore plus de fun pendant une heure supplémentaire !",
      price: {
        type: "fixed",
        amount: 15,
      },
      cta: {
        texte: "Réserver",
        link: "/airsoft#contact",
      },
    },
  ];

  const priceAirsoftClub: PriceSliderType[] = [
    {
      name: "Accès Terrain",
      description: ["Demie journée"],
      price: {
        type: "fixed",
        amount: 20,
      },
      cta: {
        texte: "Réserver",
        link: "/airsoft#contact",
      },
    },
    {
      name: "Accès Terrain",
      description: ["Journée complète"],
      price: {
        type: "fixed",
        amount: 30,
      },

      cta: {
        texte: "Réserver",
        link: "/airsoft#contact",
      },
    },
    {
      name: "Location du matériel",
      description: ["Demie journée"],
      price: {
        type: "fixed",
        amount: 20,
      },
      cta: {
        texte: "Réserver",
        link: "/airsoft#contact",
      },
    },
    {
      name: "Location du matériel",
      description: ["Journée complète"],
      price: {
        type: "fixed",
        amount: 30,
      },

      cta: {
        texte: "Réserver",
        link: "/airsoft#contact",
      },
    },
  ];

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
      <Layout metadata={metadataAirsoft}>
        {/*-----------  Hero  -------------*/}
        <div className={"hero"}>
          <div className={`banner`} style={heroStyle}>
            <div className="content">
              <h1>TERRAIN AIRSOFT</h1>
              <h2>
                Vivez des sensations grandeur nature sur un terrain de 4
                hectares ! A Tournai (près de Lille)
              </h2>
              {
                <h4>
                  <span>À partir de 35€</span>
                  <span>pour 2 H 00 min</span>
                  <span>Materiel Compris</span>
                </h4>
              }
              <p>
                <strong>Entre amis</strong> ou <strong>en club</strong>,
                frissons et rires garantis en Wallonie avec l’Airsoft ! Plongez
                dans l'action avec ce jeu de plein air où l’on s’affronte avec
                des répliques et des billes biodégradables
              </p>
              <div className="buttons">
                <Link href="#loisir">
                  <i className="fa fa-plus" aria-hidden="true"></i>TARIFS LOISIR
                </Link>
              </div>

              <div className="buttons">
                <Link href="#event">
                  <i className="fa fa-plus" aria-hidden="true"></i>TARIFS
                  EVENEMENT
                </Link>
              </div>
            </div>
            <Link href="#contact" className="play">
              Réserver <Image height={25} width={25} src={arrow.src} alt="" />
            </Link>
          </div>
        </div>

        {/*-----------  Description  -------------*/}
        <section
          id={"description_bloc"}
          style={{
            background: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className={"container-fluid"}>
            <SectionTitle
              title={"Divertissement et adrénaline "}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_left"}
              background={"rgba(33,34,38,0)"}
            ></SectionTitle>
            <div className={"container"}>
              <div className="row">
                <div className={"col-md-6 description_box"}>
                  <p>
                    Une activité immersive vous attend ! Commencez par former
                    vos équipes et définir les objectifs selon les scénarios
                    proposés. En équipe, seul ou en club, donnez libre cours à
                    votre imagination et à vos aptitudes physiques !
                  </p>
                  <p>
                    L'Airsoft est parfait pour divers événements tels qu'un
                    enterrement de vie de garçon, offrant du fun et de
                    l'adrénaline à profusion. Découvrez nos scénarios uniques
                    pour des expériences inoubliables !
                  </p>
                  <p>
                    De plus, c'est une option idéale pour renforcer la cohésion
                    d'équipe lors de sessions de teambuilding. Le stress positif
                    et la stratégie d'équipe consolident les liens entre vos
                    collaborateurs, favorisant ainsi une meilleure
                    collaboration.
                  </p>
                </div>
                <div className={"col-md-6"}>
                  <DoubleImg img={mask.src} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-----------  Activity  -------------*/}
        <section id={"activity"} className={"container-fluid"} style={style}>
          <SectionTitle
            title={"L’Airsoft pour tous "}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_right"}
            background={"transparent"}
          ></SectionTitle>
          <div
            className={"container"}
            style={{ marginTop: "5rem", display: "flex" }}
          >
            <div className="row content">
              <ImageStack
                height={602}
                width={412}
                frontImg={airsoft1.src}
                backImg={rayure.src}
                backImgAlign={"align_left"}
              />
              <div className="col-md-6">
                <p>
                  L'Airsoft, un plaisir ouvert à toutes et à tous, peut
                  également être une activité partagée par des couples ou entre
                  amis. C'est une alternative ludique et immersive pour tous
                  ceux qui cherchent une expérience différente.
                </p>
                <p>
                  En plus d'être une source de divertissement, l'Airsoft offre
                  des bienfaits similaires à une séance de gym ! Cette activité
                  physique vous fera parcourir des kilomètres sans même vous en
                  rendre compte, que ce soit en vous cachant, en courant ou en
                  sautant des obstacles.
                </p>
                <p>Pour rejoindre la partie, rien de plus simple :</p>
                <p>
                  Formez un groupe d'au moins 8 joueurs, avec ou sans votre
                  propre réplique et équipement.
                </p>
                <div id="loisir">
                  <PriceSlider
                    tarifsName={"TARIFS LOISIR"}
                    prices={priceAirsoftLoisir}
                  ></PriceSlider>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-----------  Immersion  -------------*/}
        <section id={"activity"} className={"container-fluid"} style={style}>
          <SectionTitle
            title={"Club airsoft "}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_left"}
            background={"rgba(0,0,0,0.0)"}
          ></SectionTitle>
          <div
            className={"container"}
            style={{ marginTop: "5rem", display: "flex" }}
          >
            <div className="row content">
              <div className="col-md-6">
                <p>
                  Découvrez l'Airsoft en club et rencontrez de nouvelles équipes
                  !
                </p>
                <p>
                  Si vous avez apprécié l'expérience de l'Airsoft et souhaitez
                  la vivre plus fréquemment, intégrez un club pour profiter d'un
                  terrain aménagé avec un encadrement adapté.
                </p>
                <p>
                  Notre terrain est ouvert aux clubs tous les 1ers et 3èmes
                  dimanches de chaque mois à partir de 9h15. C'est l'occasion
                  idéale pour les joueurs équipés ou les novices désireux de
                  découvrir cette activité. Nous proposons également la location
                  de matériel pour ceux qui en ont besoin.
                </p>
                <div id="event">
                  <PriceSlider
                    tarifsName={"TARIFS CLUB"}
                    prices={priceAirsoftClub}
                  ></PriceSlider>
                </div>
              </div>

              <ImageStack
                height={602}
                width={412}
                frontImg={airsoft2.src}
                backImg={rayure.src}
                backImgAlign={"align_right"}
              ></ImageStack>
            </div>
          </div>
        </section>

        {/*-----------  Immersion  -------------*/}
        {/*
          <section
            id={"immersion"}
            className={"container-fluid"}
            style={style2}
          >
            <SectionTitle
              title={"LES KIDS"}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_left"}
              background={"transparent"}
            ></SectionTitle>
            <div
              className={"container"}
              style={{
                marginTop: "5rem",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <div className="row content">
                <div className="col-md-12">
                  <p>
                    Vêtus de treillis fournis par Tribal, équipés de votre arme
                    d’airsoft - vous pouvez apporter la vôtre ou en emprunter
                    une dans notre vaste choix -, vous commencerez par{" "}
                    <strong>
                      former vos équipes et fixer les objectifs et le scénario
                    </strong>{" "}
                    de l’opération.
                  </p>
                  <p>
                    Puis vous pourrez donner libre cours à votre imagination et
                    à vos aptitudes physiques. N’ayez crainte,{" "}
                    <strong>
                      les billes en plastique des armes factices ne vous
                      causeront aucune blessure
                    </strong>
                     !
                  </p>
                  <p>
                    C’est l’activité idéale pour en enterrement de vie de
                    garçon, pleine de fun et d’adrénaline. C’est aussi une façon
                    efficace d’organiser une séance de teambuilding : rien de
                    tel qu’un peu de bon stress pour consolider la cohésion de
                    vos collaborateurs !
                  </p>
                </div>
              </div>
            </div>
          </section>
            }
/*}
        {/*-----------  Equipment  -------------*/}
        <section
          id={"equipment"}
          className={"container-fluid airsoft"}
          style={style}
        >
          <div className={"container-fluid"}>
            <div className="row">
              <SectionTitle
                title={"Conditions et équipement"}
                borderColor={sectionTitle.titleBorderColor}
                borderPosition={"align_left"}
                background={"transparent"}
              ></SectionTitle>
              <div className={"col-md-12 equipment_content"}>
                <AnimatedBorder>
                  <p>
                    Pour nous rejoindre, rien de plus simple il vous suffit
                    d&apos;avoir entre 8 ans pour le laser et 16ans pour
                    l&apos;airsoft.
                  </p>
                  <p>
                    Au niveau de l&apos;équipement vous pouvez apporter votre
                    équipement ou en louer sur place.
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
          <Slider sliderItems={slidesData} />
        </section>

        {/*-----------  Contact Form  -------------*/}
        <div
          id="contact"
          className={"container-fluid contact_form_box"}
          style={style}
        >
          <SectionTitle
            title={"Contactez-nous"}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_left"}
            background={"transparent"}
          ></SectionTitle>
          <ContactForm />
        </div>

        {/*--------------    Comments    ----------------*/}

        <section id={"comments"} className={"container-fluid"} style={style}>
          <SectionTitle
            title={"Avis des clients"}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_left"}
            background={"rgba(0,0,0,0)"}
          ></SectionTitle>
          <Comments reviews={reviews} />
        </section>
      </Layout>
    </>
  );
};

export default Airsoft;
