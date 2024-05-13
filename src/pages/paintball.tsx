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
import SectionTitle from "@/components/UI/section-title/section-title";
import DoubleImg from "@/components/double_img/generic-double-images";
import ImageStack from "@/components/image-stack/image-stack";
import Slider from "@/components/slider/slider";
import ContactForm from "@/components/contact-form/contact-form";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";
import Layout from "@/components/layout/layout";
import Comments from "@/components/comments/comments";
import { fetchReviews } from "@/services/googleBusinessService";
import { unblockScroll } from "@/utils/scrollBlocker";

{
  /*-----------  images  -------------*/
}

import paintball1 from "@/assets/img/paintball/paintball1.png";
import paintball2 from "@/assets/img/paintball/paintball2.png";
import rayure from "@/assets/img/layout/RAYURE_paintball.svg";
import player2 from "@/assets/img/airsoft/mask_bg.png";
import paintballBg from "../assets/img/paintball/paintball_bg_hero.webp";
import paintballLogo from "../assets/img/logo/paintballLogo.svg";
import bg from "@/assets/img/layout/bg.png";
import ball from "../assets/img/paintball/paintball_rmbg.webp";

import slide1 from "../assets/img/archerytag/slides/slide1.png";
import slide2 from "../assets/img/archerytag/slides/slide2.png";
import slide3 from "../assets/img/archerytag/slides/slide3.png";
import slide4 from "../assets/img/archerytag/slides/slide4.png";
import slide5 from "../assets/img/archerytag/slides/slide5.png";
import slide6 from "../assets/img/archerytag/slides/slide6.png";
import PriceSlider from "@/components/priceBox/PriceSlider";
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

export const metadataPaintball = {
  title: "Tribal | Terrain de Paintball",
  description:
    "Notre terrain de paintball de 40 000 m² à Tournai, à seulement 15 minutes de Lille, vous accueille que vous veniez seul, entre amis, en équipe ou en club. La location de matériel est disponible sur place.",
};

const reviews = fetchReviews();

const Paintball = () => {
  const sectionTitle = {
    titleBorderColor: "linear-gradient(to bottom, #FF0000 0%, #3300FF 100%)",
    titleBgColor: "rgba(0,0,0,0)",
  };

  const style = {
    backgroundImage: `radial-gradient(circle, rgba(255,0,0, 0.3) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover", // Ajustez selon le besoin
    backgroundAttachment: "fixed",
    height: "100%",
  };

  const style2 = {
    background: `linear-gradient(to bottom, rgba(255,0,0, 0.3) 0%, rgba(33, 34, 38, 0.5) 100%), url("${player2.src}")`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  const heroStyle = {
    background: `linear-gradient(to top, rgba(112,0,255,0.8) 0%, rgba(33, 34, 38, 0.1) 100%), url("${paintballBg.src}")`,
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

  const pricePaintballLoisir: PriceSliderType[] = [
    {
      name: "Formule Découverte (1H00)",
      description: [
        "Forfait Accès Terrain",
        "Animation / Briefing",
        "Lanceur + 200 billes",
        "Combinaison + Masque",
      ],
      price: {
        type: "fixed",
        amount: 30,
      },
      cta: {
        texte: "Réserver",
        link: "/paintball#contact",
      },
    },
    {
      name: "Formule aventure (2H30)",
      description: [
        "Forfait Accès Terrain",
        "Animation / Briefing",
        "Lanceur + 500 billes",
        "Combinaison + Masque",
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

  const pricePaintballEvent: PriceSliderType[] = [
    {
      name: "EV de garçon/fille",
      description: [
        "Scénario lapin Offert + souvenir vidéo.",
        "Mise à disposition d'un barbecue (sur réservation).",
        "Combinaison de lapin 30 € ou location 10 €.",
      ],
      price: {
        type: "fixed",
        amount: 30,
      },
      cta: {
        texte: "Réserver",
        link: "/paintball#contact",
      },
    },
    {
      name: "Team Building",
      description: [
        "Vous souhaitez une journée hors du commun ?",
        "connaitre nos tarifs CE et entreprises ?",
        "Contactez nous pour un forfait sur mesure.",
      ],
      price: {
        type: "onDemand",
      },
      cta: {
        texte: "Réserver",
        link: "/paintball#contact",
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
      <Layout metadata={metadataPaintball}>
        {/*-----------  Hero  -------------*/}
        <div className={"hero"}>
          <div className={`banner`} style={heroStyle}>
            <div className="content">
              <h1>TERRAIN PAINTBALL OUTDOOR</h1>
              <h2>
                100% Fun-100% Adrénaline et cris de joie : jouez au paintball
                près de Tournai
              </h2>
              {
                <h4>
                  <span>À partir de 30€</span>
                  <span>pour 1 H 30 min</span>
                  <span>Materiel Compris</span>
                </h4>
              }
              <p>
                Rires et sensations extrêmes adrénaline se mêlent lors
                d’incroyables parties de paintball chez Tribal Games, entre
                proche de Ath, Mons, Mouscron et la en Wallonie. Sensations
                extrêmes entre amis au programme d’un après-midi de Paintball
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
            backgroundImage: `radial-gradient(circle, rgba(255,0,0, 0.3) 0%, rgba(33, 34, 38, 1) 50%), url("${bg.src}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className={"container-fluid"}>
            <SectionTitle
              title={"Faites monter l’adrénaline"}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_left"}
              background={"rgba(33,34,38,0)"}
            ></SectionTitle>
            <div className={"container"}>
              <div className="row">
                <div className={"col-md-6 description_box"}>
                  <p>
                    Vous aimez les jeux vidéo et tirer sur tout ce qui bouge ?
                    Et si vous partiez vivre une aventure dans la réalité, sans
                    danger, mais avec beaucoup de frissons !
                  </p>
                  <p>
                    Le paintball est fait pour celles et ceux qui aiment se
                    dépasser, vivre des moments forts, physiques, excitants et
                    réjouissants. Avec des amis ou accompagné.e de votre
                    chéri.e, lancez-vous dans un univers ludique et
                    passionnant !
                  </p>
                  <p>
                    Imaginez : un terrain de jeu de 40 000 mètres carrés, des
                    équipes dispersées dans les bois et la nature. À vous de
                    mener votre équipe à la victoire !
                  </p>
                </div>
                <div className={"col-md-6"}>
                  <DoubleImg img={ball.src} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-----------  Activity  -------------*/}
        <section id={"activity"} className={"container-fluid"} style={style}>
          <SectionTitle
            title={"Évitez les billes de peintures et remportez la partie"}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_right"}
            background={"rgba(0,0,0,0.0)"}
          ></SectionTitle>
          <div
            className={"container"}
            style={{ marginTop: "5rem", display: "flex" }}
          >
            <div className="row content">
              <ImageStack
                height={602}
                width={412}
                frontImg={paintball1.src}
                backImg={rayure.src}
                backImgAlign={"align_left"}
              ></ImageStack>
              <div className="col-md-6">
                <p>
                  Avec votre fusil lanceur et vos centaines de balles de
                  peinture, lancez-vous au sein d’une équipe constituée d’amis à
                  la poursuite de vos adversaires. Le paintball, c’est plus
                  qu’une traque ou un combat sans merci.
                </p>
                <p>
                  C’est surtout un grand champ de bataille parsemé d’obstacles,
                  de pièges, d’où un ennemi peut surgir à tout moment. Muni de
                  votre combinaison intégrale et de votre masque, vous ne
                  risquez rien… sauf l’élimination !
                </p>
                <p>
                  Soyez plus malin que ceux de l’équipe d’en face. Toujours sur
                  vos gardes, développez une stratégie gagnante, entre prudence
                  et bravoure.
                </p>
                <div id="loisir">
                  <PriceSlider
                    tarifsName={"TARIFS LOISIR"}
                    prices={pricePaintballLoisir}
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
                  Pourquoi vous lancer dans une partie de paintball ?
                  Demandez-le aux dizaines de milliers de joueurs qui vous ont
                  précédé. Retrouvez leurs avis sur Google.
                </p>
                <p>
                  Ils ont apprécié la performance sportive, les rires et les
                  frayeurs entre amis, le terrain de jeu incroyablement vaste…
                  Que ce soit lors d’une séance de teambuilding, d’un
                  anniversaire.
                </p>
                <p>
                  C’est l’activité idéale pour un enterrement de vie de garçon
                  ou de filles, pleine de fun et d’adrénaline nous vous
                  offrirons le scénario du LAPINOU ou d’une sortie entre amis,
                  vous ne serez pas déçu !
                </p>
                <div id="event">
                  <PriceSlider
                    tarifsName={"TARIFS ÉVÉNEMENTS"}
                    prices={pricePaintballEvent}
                  ></PriceSlider>
                </div>
              </div>

              <ImageStack
                height={602}
                width={412}
                frontImg={paintball2.src}
                backImg={rayure.src}
                backImgAlign={"align_right"}
              ></ImageStack>
            </div>
          </div>
        </section>

        {/*-----------  Equipment  -------------*/}
        <section
          id={"equipment"}
          className={"container-fluid paintball"}
          style={style}
        >
          <div className={"container-fluid"}>
            <div className="row">
              <SectionTitle
                title={"Conditions et équipement"}
                borderColor={sectionTitle.titleBorderColor}
                borderPosition={"align_right"}
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
        {/*}
        <section id={"gallery"} className={"container-fluid"} style={style}>
          <SectionTitle
            title={"Galerie Photos"}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_left"}
            background={"transparent"}
          ></SectionTitle>
          <Slider sliderItems={slidesData} />
        </section>
        */}
        {/*-----------  Contact Form  -------------*/}
        <div
          id="contact"
          className={"container-fluid contact_form_box"}
          style={style}
        >
          <SectionTitle
            title={"Contactez-nous"}
            borderColor={sectionTitle.titleBorderColor}
            borderPosition={"align_right"}
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

export default Paintball;
