import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/slider/slider";
import SectionTitle from "@/components/UI/section-title/section-title";
import player2 from "../assets/img/airsoft/mask_bg.png";
import bg from "../assets/img/layout/bg.png";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";
import ImageStack from "@/components/image-stack/image-stack";
import rayure from "../assets/img/layout/RAYURE_laser.svg";
import lasergame1 from "../assets/img/lasergame/lasergame1.webp";
import lasergame2 from "../assets/img/lasergame/lasergame2.webp";
import ContactForm from "@/components/contact-form/contact-form";

import slide1 from "../assets/img/airsoft/slides/slide1.png";
import slide2 from "../assets/img/airsoft/slides/slide2.png";
import slide3 from "../assets/img/airsoft/slides/slide3.png";
import slide4 from "../assets/img/airsoft/slides/slide4.png";
import slide5 from "../assets/img/airsoft/slides/slide5.png";
import slide6 from "../assets/img/airsoft/slides/slide6.png";
import GenericHero from "@/components/hero/generic-hero";
import lasergameBg from "@/assets/img/lasergame/lasergame_bg_hero.webp";
import lasergameLogo from "@/assets/img/logo/lasergameLogo.svg";
import lasertagWeapons from "@/assets/img/lasergame/lasertag_weapon.webp";
import { unblockScroll } from "@/utils/scrollBlocker";
import Layout from "@/components/layout/layout";
import Comments from "@/components/comments/comments";
import { fetchReviews } from "@/services/googleBusinessService";
import PriceSlider from "@/components/priceBox/PriceSlider";
import DoubleImg from "@/components/double_img/generic-double-images";
import arrow from "../assets/img/icones/Arrow.webp";
const slidesData = [
  {
    img: slide1.src,
    title: "Slide 01",
    text: "Lorem ipsum, dolor sit amet consectetur...",
  },
  {
    img: slide2.src,
    title: "Slide 02",
    text: "Lorem ipsum, dolor sit amet consectetur...",
  },
  {
    img: slide3.src,
    title: "Slide 03",
    text: "Lorem ipsum, dolor sit amet consectetur...",
  },
  {
    img: slide4.src,
    title: "Slide 04",
    text: "Lorem ipsum, dolor sit amet consectetur...",
  },
  {
    img: slide5.src,
    title: "Slide 05",
    text: "Lorem ipsum, dolor sit amet consectetur...",
  },
  {
    img: slide6.src,
    title: "Slide 05",
    text: "Lorem ipsum, dolor sit amet consectetur...",
  },
];

export const metadataLaser = {
  title: "Tribal | LaserTag en extérieur",
  description:
    "Découvrez une expérience unique de Laser Tag en extérieur près de Tournai, à seulement 15 minutes de Lille. Tribal Games propose des parties endiablées de laser game avec des lasers ultramodernes dans un cadre naturel",
};

const reviews = fetchReviews();

const Lasergame = () => {
  const sectionTitle = {
    titleBorderColor: "linear-gradient(to bottom, #FF00F5 0%, #7000FF 100%)",
    titleBgColor: "rgba(0,0,0,0)",
  };

  const style = {
    backgroundImage: `radial-gradient(circle, rgba(112,0,255,0.2) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover", // Ajustez selon le besoin
    backgroundAttachment: "fixed",
    height: "100%",
  };

  const style2 = {
    background: `linear-gradient(to bottom, rgba(112,0,255,0.2) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  const heroStyle = {
    background: `linear-gradient(to top, rgba(112,0,255,0.8) 0%, rgba(33, 34, 38, 0.1) 100%), url("${lasergameBg.src}")`,
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

  const priceLaserLoisir: PriceSliderType[] = [
    {
      name: "Formule Découverte (1H30)",
      description: [
        "Briefing",
        "Accès au terrain",
        "Arme principale + Arme secondaire",
        "Bandeau tête + Bracelet Tazer",
      ],
      price: {
        type: "fixed",
        amount: 30,
      },
      cta: {
        texte: "Réserver",
        link: "/lasergame#contact",
      },
    },
    {
      name: "Formule Découverte (2H00)",
      description: [
        "Briefing",
        "Accès au terrain",
        "Arme principale + Arme secondaire",
        "Bandeau tête + Bracelet Tazer",
      ],
      price: {
        type: "fixed",
        amount: 40,
      },
      cta: {
        texte: "Réserver",
        link: "/lasergame#contact",
      },
    },
  ];

  const priceLaserEvent: PriceSliderType[] = [
    {
      name: "Tournois et événement",
      description: [
        "Anniversaire",
        "Enterrement de vie de jeune garçon/fille",
        "Écoles, BDE, clubs : nous contacter",
        "Scénario du lapin OFFERT + vidéo souvenir",
      ],
      price: {
        type: "onDemand",
      },
      cta: {
        texte: "Réserver",
        link: "/archerytag#contact",
      },
    },
    {
      name: "Nous nous déplaçons !",
      description: [
        "Contactez-nous pour organiser votre Archery Tag chez vous !",
      ],
      price: {
        type: "onDemand",
      },

      cta: {
        texte: "Réserver",
        link: "/archerytag#contact",
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
    unblockScroll();
  }, []);

  return (
    <>
      <Layout metadata={metadataLaser}>
        {/*-----------  Hero  -------------*/}

        <div className={"hero"}>
          <div className={`banner`} style={heroStyle}>
            <div className="content">
              <h1>LASERGAME OUTDOOR</h1>
              <h2>
                Combattants du futur, amusez-vous dans une partie de Lasertag
                outdoor.
              </h2>
              {
                <h4>
                  <span>À partir de 30€</span>
                  <span>pour 1 H 30 min</span>
                  <span>Materiel Compris</span>
                </h4>
              }
              <p>
                Près de Lille, Tribal Games est ses équipements ultramodernes
                vous accueille pour des parties endiablées de Laser Tag.
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
            background: `radial-gradient(circle, rgba(112,0,255,0.2) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className={"container-fluid"}>
            <SectionTitle
              title={"Bienvenue dans le futur !"}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_left"}
              background={"rgba(33,34,38,0)"}
            ></SectionTitle>
            <div className={"container"}>
              <div className="row">
                <div className={"col-md-6 description_box"}>
                  <p>
                    Pénétrez Evoluez avec votre équipe sur un terrain adapté,
                    dans l’obscurité d’un labyrinthe inquiétant. muni de votre
                    blaster, d&apos;un bandeau réflecteur et surtout d&apos;un
                    bracelet shock plastron et de votre revolver laser, votre
                    mission est simple : réussir à marquer un maximum de points
                    et à laisser l’équipe adverse sur le carreau.
                  </p>
                  <p>
                    Pour ce faire, un seul moyen : tirer le premier, bien viser
                    les réflecteurs ou le blaster plastron de l’ennemi… et
                    éviter d’être vous-même atteint. Attention : les miroirs ne
                    sont pas vos amis  les bracelets shock délivrent une
                    DECHARGE ELECTRIQUE lorsqu&apos;un adversaire vise votre
                    bandeau ou votre blaster !
                  </p>
                  <p>
                    Selon l&apos;âge et votre témérité, vous choisirez entre une
                    simple vibration ou une décharge allant du niveau 1 à 5!
                    Proposant des équipements de dernière génération, le
                    lasergame Laser Tag de TRIBAL Games est est une expérience
                    unique, immersive et qui vous fera pousser des cris. De
                    frayeur ou de joie ? À vous de voir !
                  </p>
                </div>
                <div className={"col-md-6"}>
                  <DoubleImg img={lasertagWeapons.src} />
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
                frontImg={lasergame1.src}
                backImg={rayure.src}
                backImgAlign={"align_left"}
              ></ImageStack>
              <div className="col-md-6">
                <p>
                  Une partie de lasergame Laser Tag dure en moyenne 1h30. De
                  quoi aller au bout de vos émotions en restant sur le qui-vive
                  tout le temps de la partie.
                </p>
                <p>
                  Le suspense est à son comble lorsque vous sortez de la salle
                  du terrain pour attendre les résultats. Qui a gagné ? Et dans
                  votre équipe, êtes-vous le meilleur ou le boulet qui fait
                  perdre les autres ?
                </p>
                <p>
                  Très vite, en dégustant une boisson bien méritée, vous obtenez
                  les statistiques complètes. Là encore, des cris se font
                  entendre. Avant de vous remettre en selle pour une nouvelle
                  partie.
                </p>
                <div id="loisir">
                  <PriceSlider
                    tarifsName={"TARIFS LOISIR"}
                    prices={priceLaserLoisir}
                  ></PriceSlider>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-----------  Immersion  -------------*/}
        <section id={"activity"} className={"container-fluid"} style={style}>
          <SectionTitle
            title={"Un moment de pur bonheur à partager"}
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
                  À en croire les commentaires des joueurs qui ont déjà testé le
                  Laser Tag de Tribal Games (voir les avis sur Google),
                  l’expérience est vite addictive. Plus on joue, plus on connaît
                  les pièges et les meilleures tactiques, et plus on a envie de
                  faire exploser son score. Enterrements de vie de jeune fille
                  ou de garçons, anniversaires d’enfants, soirée entre copains,
                  séance de teambuilding… ne ratez pas une occasion pour jouer.
                  Et   s'amuser quoi qu'il arrive !
                </p>
                <h2>Laser Tag pour vos événements spéciaux</h2>
                <p>
                  Découvrez une expérience futuriste et palpitante avec notre
                  activité de Laser Tag mobile. Que ce soit pour célébrer un
                  anniversaire mémorable, organiser un divertissement unique
                  pour un enterrement de vie de garçon ou de jeune fille, ou
                  renforcer l'esprit d'équipe lors d'un team-building
                  d'entreprise, le Laser Tag est l'activité idéale. Plongez dans
                  des combats dynamiques et amusants qui sauront ravir vos
                  invités et créer des souvenirs inoubliables.
                </p>

                <h2>Nous venons à vous</h2>
                <p>
                  Notre équipe se déplace pour organiser des sessions de Laser
                  Tag mobile où vous le souhaitez. Que ce soit en extérieur dans
                  des endroits adaptés tels que des terrains ou des espaces
                  ouverts, ou bien à l'intérieur dans des locaux d'entreprise,
                  des salles de sport ou d'autres espaces de taille suffisante,
                  nous sommes flexibles pour répondre à vos besoins. Offrez à
                  vos invités une journée remplie d'action et de convivialité,
                  sans souci d'organisation logistique, grâce à notre service de
                  Laser Tag mobile.
                </p>
                <div id="event">
                  <PriceSlider
                    tarifsName={"TARIFS EVENEMENT"}
                    prices={priceLaserEvent}
                  ></PriceSlider>
                  </div>
              </div>

              <ImageStack
                height={602}
                width={412}
                frontImg={lasergame2.src}
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
        <section
          id={"equipment"}
          className={"container-fluid lasergame"}
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
                    d&apos;avoir entre 8 ans pour le laser et 16ans pour le
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
        {/*
        <section id={"gallery"} className={"container-fluid"} style={style}>
          <SectionTitle
            title={"Galerie Photos"}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_right"}
            background={"transparent"}
          ></SectionTitle>
          <Slider sliderItems={slidesData} />
        </section>
         //*/}
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

export default Lasergame;
