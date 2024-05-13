{
  /*-----------  Utilitaires  -------------*/
}

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

{
  /*-----------  composants  -------------*/
}

import GenericHero from "@/components/hero/generic-hero";
import ContactForm from "@/components/contact-form/contact-form";
import Layout from "@/components/layout/layout";
import Comments from "@/components/comments/comments";
import SectionTitle from "@/components/UI/section-title/section-title";
import GenericDoubleImages from "@/components/double_img/generic-double-images";
import ImageStack from "@/components/image-stack/image-stack";
import { unblockScroll } from "@/utils/scrollBlocker";
import { fetchReviews } from "@/services/googleBusinessService";

{
  /*-----------  Images  -------------*/
}

import Slider from "@/components/slider/slider";
import slide1 from "../assets/img/archerytag/slides/slide1.png";
import slide2 from "../assets/img/archerytag/slides/slide2.png";
import slide3 from "../assets/img/archerytag/slides/slide3.png";
import slide4 from "../assets/img/archerytag/slides/slide4.png";
import slide5 from "../assets/img/archerytag/slides/slide5.png";
import slide6 from "../assets/img/archerytag/slides/slide6.png";

import rayure from "@/assets/img/layout/RAYURE.svg";
import player2 from "@/assets/img/airsoft/mask_bg.png";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";
import archeryTagBg from "../assets/img/archerytag/archery_tag_bg.webp";
import bg from "@/assets/img/layout/bg.png";
import arrows from "../assets/img/archerytag/arrow_archery_tag.webp";
import archeryTag1 from "@/assets/img/archerytag/archeryTag1.webp";
import archeryTag2 from "@/assets/img/archerytag/archeryTag2.webp";
import PriceSlider from "@/components/priceBox/PriceSlider";
import arrow from "@/assets/img/icones/Arrow.webp";

{
  /*-----------  Données  -------------*/
}

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

export const metadataArcheryTag = {
  title: "Tribal | Action et fun en équipe",
  description:
    "Découvrez l'Archery-Tag en plein air près de Lille ! Profitez de batailles épiques alliant tir à l'arc et jeu en équipe sur notre terrain de 40 000 m². Réservez votre expérience pour des moments de fun et de compétition en extérieur.",
};

const reviews = fetchReviews();

const Prices = [
  {
    name: "Formule Découverte (1h30)",
    description:
      "8 joueurs minimum. 20 € pour 1h30 puis 5 € la demi-heure supplémentaire.",
    price: {
      type: "fixed",
      amount: 20,
      additionalPerHalfHour: 5,
    },
  },
  {
    name: "Demi-heure supplémentaire",
    description: "",
    price: {
      type: "fixed",
      amount: 5,
    },
  },
  {
    name: "Tournois et événements",
    description:
      "Tournois, Enterrement de vie de jeune garçon/fille. Anniversaire...",
    inclus: "Scénario du lapin OFFERT + vidéo souvenir.",
    price: {
      type: "onDemand",
    },
  },
  {
    name: "Nous nous déplaçons !",
    description: "Contactez-nous pour organiser votre Archery Tag chez vous !",
    price: {
      type: "onDemand",
    },
  },
];

const Archerytag = () => {
  const sectionTitle = {
    titleBorderColor: "linear-gradient(to bottom, #BF4501 80%, #FF0000 100%)",
    titleBgColor: "rgba(0,0,0,0)",
  };

  const style = {
    backgroundImage: `radial-gradient(circle, rgba(191,69,1, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover", // Ajustez selon le besoin
    backgroundAttachment: "fixed",
    height: "100%",
  };

  const style2 = {
    background: `linear-gradient(to bottom, rgba(191,69,1, 1) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    padding: 0,
  };

  const heroStyle = {
    background: `linear-gradient(to top, rgba(227, 106, 1, 0.83), rgba(35, 40, 25, 0.5) 100%),url("${archeryTagBg.src}")`,
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

  const priceArcheryTagLoisir: PriceSliderType[] = [
    {
      name: "Formule Découverte (1h30)",
      description: [
        "8 joueurs minimum",
        "Accès terrain",
        "Briefing encadrement",
        "Arc et flèches / Masque / Plastron femme",
      ],
      price: {
        type: "fixed",
        amount: 25,
      },
      cta: {
        texte: "Réserver",
        link: "/archerytag#contact",
      },
    },
    {
      name: "Demi-heure supplémentaire",
      description: "Encore plus de fun pendant une demi-heure supplémentaire !",
      price: {
        type: "fixed",
        amount: 7,
      },
      cta: {
        texte: "Réserver",
        link: "/archerytag#contact",
      },
    },
  ];

  const priceArcheryTagEvent: PriceSliderType[] = [
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
    unblockScroll();
  }, []);

  return (
    <>
      <Layout metadata={metadataArcheryTag}>
        {/*-----------  Hero  -------------*/}
        <div className={"hero"}>
          <div className={`banner`} style={heroStyle}>
            <div className="content">
              <h1>TERRAIN D'ARCHERY TAG</h1>
              <h2>Découvrez l’ArcheryTag ou tir à l’arc sur cible mouvante</h2>
              {
                <h4>
                  <span>À partir de 35€</span>
                  <span>pour 2 H 00 min</span>
                  <span>Materiel Compris</span>
                </h4>
              }
              <p>
                Rejouez le meilleur d’Hunger Games dans une partie d’ArcheryTag,
                le tir de flèches en mousse.. Ferez-vous gagner votre équipe
                près du Hainaut ?
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
            background: `radial-gradient(circle, rgba(191,69,1, 0.5) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className={"container-fluid"}>
            <SectionTitle
              title={"Un jeu d’adresse et de réflexion"}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_left"}
              background={"rgba(33,34,38,0)"}
            ></SectionTitle>
            <div className={"container"}>
              <div className="row">
                <div className={"col-md-6 description_box"}>
                  <p>
                    Profitez d’un terrain de 40 000 mètres carrés adapté pour
                    exercer vos talents d’archer ! En équipe ou en solitaire,
                    partez affronter en équipe vos adversaires avec
                    détermination et courage.
                  </p>
                  <p>
                    À l’issue de la partie, il n’en restera qu’un. Votre
                    passeport pour la victoire ? Un arc, des flèches en mousse,
                    une bonne maîtrise de votre arme arc, et surtout votre
                    intelligence. Car ici c’est sur des cibles mouvantes que
                    vous allez tirer! Comment les déloger, viser et tirer dans
                    un même mouvement ?
                  </p>
                  <p>
                    Comment ne pas atteindre votre propre équipe ? Et comment
                    vous protéger des ennemis ? Autant de défis amusants et
                    pleins d’adrénaline que vous saurez relever.
                  </p>
                </div>
                <div className={"col-md-6"}>
                  <GenericDoubleImages img={arrows.src} />
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
                frontImg={archeryTag1.src}
                backImg={rayure.src}
                backImgAlign={"align_left"}
              ></ImageStack>
              <div className="col-md-6">
                <p>
                  L'Archery Tag, tout comme l'Airsoft, est une activité
                  divertissante ouverte à tous, qu'il s'agisse de couples ou
                  d'amis. C'est une manière ludique et immersive de partager un
                  moment ensemble, offrant une alternative intéressante pour
                  ceux qui recherchent une expérience différente.
                </p>

                <p>
                  En plus d'être amusant, l'Archery Tag offre une activité
                  physique tout en vous divertissant. Que vous vous cachiez, que
                  vous couriez ou que vous évitiez des obstacles, cette activité
                  vous fait bouger sans même vous en rendre compte.
                </p>

                <h2>Comment rejoindre une partie d'Archery Tag</h2>
                <ul>
                  <li>Formez un groupe d'au moins 8 joueurs</li>
                  <li>Réservez votre session en ligne ou par téléphone</li>
                  <li>
                    Préparez-vous à vivre une aventure remplie d'action et de
                    compétition !
                  </li>
                </ul>

                <div id={"loisir"}>
                  <PriceSlider
                    tarifsName={"TARIFS ARCHERY TAG LOISIR"}
                    prices={priceArcheryTagLoisir}
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
                  Avant de vous lancer dans l’aventure,{" "}
                  <strong>
                    découvrez les avis et les récits de ceux qui vous auront
                    précédé,
                  </strong>
                  sur Google. Leurs notes moyennes de 4,8 sur 5, leur
                  enthousiasme et leur fidélité nous conduisent à toujours
                  chercher à améliorer l’expérience des joueurs.
                </p>
                <h2>Archery Tag pour des moments inoubliables</h2>
                <p>
                  Plongez-vous dans une aventure palpitante avec notre activité
                  d'Archery Tag. Que ce soit pour un anniversaire en famille ou
                  entre amis, un enterrement de vie de garçon ou de jeune fille,
                  ou encore une séance de team-building d'entreprise, l'Archery
                  Tag est l'activité idéale pour des moments de divertissement
                  en plein air. Découvrez les joies du tir à l'arc en équipe
                  dans un environnement ludique et sécurisé, et créez des
                  souvenirs inoubliables avec vos proches et collègues.
                </p>

                <h2>Nous venons à vous pour une expérience personnalisée</h2>
                <p>
                  Notre équipe se déplace pour organiser des parties d'Archery
                  Tag où vous le souhaitez. Que ce soit en extérieur dans des
                  lieux adaptés comme des parcs, des terrains de sport aménagés,
                  ou même à l'intérieur dans des locaux d'entreprise disposant
                  d'un espace suffisant, nous sommes flexibles pour répondre à
                  vos besoins. Offrez à vos invités une journée remplie
                  d'action, de compétition et de convivialité, sans souci
                  d'organisation logistique grâce à notre service d'Archery Tag
                  mobile.
                </p>
                <div id="event">
                  <PriceSlider
                    tarifsName={"TARIF EVENEMENT ARCHERY TAG"}
                    prices={priceArcheryTagEvent}
                  ></PriceSlider>
                </div>
              </div>

              <ImageStack
                height={602}
                width={412}
                frontImg={archeryTag2.src}
                backImg={rayure.src}
                backImgAlign={"align_right"}
              ></ImageStack>
            </div>
          </div>
        </section>

        {/*-----------  Equipment  -------------*/}

        <section
          id={"equipment"}
          className={"container-fluid archerytag"}
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
/*}
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

export default Archerytag;
