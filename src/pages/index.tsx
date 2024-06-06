import VerticalAccordeon from "@/components/vertical-accordeon/vertical-accordeon";
import SectionTitle from "@/components/UI/section-title/section-title";
import bg from "@/assets/img/layout/about.webp";
import ImageStack from "@/components/image-stack/image-stack";
import rayure from "@/assets/img/layout/RAYURE.svg";
import satelliteView from "../../src/assets/img/layout/satellite_view.webp";
import React from "react";
import faqBg from "../../src/assets/img/layout/faq_bg.webp";
import valuesBg from "../../src/assets/img/layout/values_bg.webp";
import bgWithBg from "../../src/assets/img/layout/bg_with_border.svg";
import bgGeneric from "../../src/assets/img/layout/bg.webp";
import basemap from "../../src/assets/img/layout/basemap.webp";
import welcom from "../../src/assets/img/index/welcom.webp";

/*----  3D  ----*/
import paintball3d from "../../src/assets/img/3d/3d-paintball-bg.webp";
import paintballLogo from "../../src/assets/img/logo/paintballLogo.svg";
import paintballrmv3d from "../../src/assets/img/3d/3d-paintball-bg-removebg-preview.webp";

import airsoft3d_bg from "../../src/assets/img/3d/airsoft-3d-bg.webp";
import airsoftLogo from "../../src/assets/img/logo/airsoftLogo.svg";
import airsoft3d_rmv from "../../src/assets/img/3d/airsoft-3d-bg-removebg-preview.webp";

import archery_3d_bg from "../../src/assets/img/3d/archery-tag-3d-bg.webp";
import archeryTagLogo from "../../src/assets/img/logo/archerytagLogo.svg";
import archeryTag_RMV from "../../src/assets/img/3d/archery-tag-3d-bg-removebg-preview.webp";

import lasertag_3d_bg from "../../src/assets/img/3d/lasertag_bg_3d.webp";
import lasertagLogo from "../../src/assets/img/logo/lasergameLogo.svg";
import lasertagBgRmv from "../../src/assets/img/3d/laser_tag_3d_rmv.webp";
import Comments from "@/components/comments/comments";
import Layout from "@/components/layout/layout";

import { fetchReviews } from "@/store/data/google/googleBusinessService";
import Image from "next/image";
import CardWithDelay from "@/components/3d-card/CardWithDelay";

export const metadataIndex = {
  title: "Tibal | Airsoft, Paintball, Archery Tag, Laser Tag",
  description:
    "Vivez l'aventure avec Tribal Games à Tournai en belgique (15 minutes de lille) ! Laser, Paintball, Airsoft, Archery Tag : des défis palpitants vous attendent. Réservez dès maintenant pour une journée inoubliable!",
};

export default function Home() {
  const sectionTitle = {
    titleBorderColor: "linear-gradient(to bottom, #FC1E00 0%, #242619 100%)",
    titleBgColor: "rgba(0,0,0,0)",
  };

  const style = {
    backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 100%), url("${bg.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover",
    height: "100%",
  };

  const style2 = {
    backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.5) 0%, rgba(33, 34, 38, 1) 100%), url("${faqBg.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover",
    height: "100%",
  };

  const style3 = {
    backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.1) 0%, rgba(33, 34, 38, 1) 100%), url("${valuesBg.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover",
    height: "100%",
  };

  const styleGen = {
    backgroundImage: `radial-gradient(circle, rgba(51,62,37, 0.6) 0%, rgba(33, 34, 38, 1) 50%), url("${bgGeneric.src}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "cover",
    height: "100%",
  };

  const reviews = fetchReviews();

  return (
    <>
      <>
        <Layout metadata={metadataIndex}>
          {/*--------------    Scenes    ----------------*/}
          <VerticalAccordeon />

          {/*--------------    Offers    ----------------*/}
          <section id={"offers"} className={"container-fluid"} style={styleGen}>
            <SectionTitle
              title={"Tarifs et réservations"}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_right"}
              background={"rgba(0,0,0,0)"}
            ></SectionTitle>
            <div className={"row"}>
              <CardWithDelay
                href={"/airsoft"}
                coverImageSrc={airsoft3d_bg.src}
                logoSrc={airsoftLogo.src}
                characterSrc={airsoft3d_rmv.src}
              />
              <CardWithDelay
                href={"/paintball"}
                coverImageSrc={paintball3d.src}
                logoSrc={paintballLogo.src}
                characterSrc={paintballrmv3d.src}
              />
              <CardWithDelay
                href={"/archerytag"}
                coverImageSrc={archery_3d_bg.src}
                logoSrc={archeryTagLogo.src}
                characterSrc={archeryTag_RMV.src}
              />
              <CardWithDelay
                href={"/lasergame"}
                coverImageSrc={lasertag_3d_bg.src}
                logoSrc={lasertagLogo.src}
                characterSrc={lasertagBgRmv.src}
              />
            </div>
          </section>

          {/*--------------    About    ----------------*/}
          <section id={"activity"} className={"container-fluid"} style={style}>
            <SectionTitle
              title={"Qui sommes nous ?"}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_left"}
              background={"rgba(0,0,0,0)"}
            ></SectionTitle>
            <div
              className={"container"}
              style={{ marginTop: "5rem", display: "flex" }}
            >
              <div className="row content">
                <div className="col-md-6">
                  <h5 style={{ fontSize: "1.7em", marginBottom: "1em" }}>
                    Paintball Concept devient Tribal Games!
                  </h5>
                  <p>
                    Après plus de 17 ans de bons et loyaux services, Paintball
                    Concept change de nom afin de mieux correspondre à ses
                    activités.
                  </p>
                  <p>
                    Vous avez remarqué ? À côté du Paintball, nous proposons
                    désormais des jeux d’Airsoft, d’Archery Tag et de Laser Tag.
                    Sans vraiment y penser, nous sommes devenus le hub des jeux
                    d’extérieur pour adultes et enfants entre Nord de la France
                    et Sud Belgique !
                  </p>
                  <p>
                    L’endroit idéal pour libérer vos instincts, mettre en œuvre
                    des stratégies, challenger vos capacités physiques, et
                    surtout vous amuser entre amis ou collègues en faisant le
                    plein d’adrénaline !
                  </p>
                  <p>
                    Bienvenue à votre tribu pour l’expérience fun la plus
                    décoiffante ! Tribal Games vous attend sur un vaste espace
                    de 40 000 mètres carrés.
                  </p>
                </div>
                <ImageStack
                  height={602}
                  width={412}
                  frontImg={welcom.src}
                  backImg={rayure.src}
                  backImgAlign={"align_right"}
                ></ImageStack>
              </div>
            </div>
          </section>

          {/*--------------    Values    ----------------*/}
          <section id={"values"} className={"container-fluid"} style={style3}>
            <SectionTitle
              title={"Nos valeurs"}
              borderColor={sectionTitle.titleBorderColor}
              borderPosition={"align_left"}
              background={"rgba(0,0,0,0)"}
            ></SectionTitle>
            <div className={"container"}>
              <div className={"row"}>
                <div
                  className={"col-12 values_content"}
                  style={{
                    backgroundImage: `url(${bgWithBg.src})`,
                    backgroundSize: "cover",
                  }}
                >
                  <p>
                    Chez Tribal nous sommes engagés pour l’inclusivité! Encore
                    aujourd&apos;hui les jeux de tirs( Airsoft, Paintball,
                    lasergame,Archery-tag) ont malheureusement une image
                    d&apos;activité très masculine… Nous nous battons pour que
                    cela change; chez nous tout le monde peut venir
                    s&apos;amuser quel que soit le sexe ou même l&apos;âge !
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
            <div
              className={"container"}
              style={{ marginTop: "5rem", display: "flex" }}
            >
              <div className="row content">
                <ImageStack
                  height={602}
                  width={412}
                  frontImg={satelliteView.src}
                  backImg={rayure.src}
                  backImgAlign={"align_left"}
                ></ImageStack>
                <div className="col-md-6">
                  <h5 style={{ fontSize: "1.2em" }}>
                    Chemin d&apos;Antoing - 7500 Tournai - Belgique
                  </h5>
                  <Image width={776} height={567} src={basemap.src} alt="" />
                </div>
              </div>
            </div>
          </section>

          {/*--------------    Comments    ----------------*/}

          <section id={"comments"} className={"container-fluid"} style={style2}>
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
    </>
  );
}
