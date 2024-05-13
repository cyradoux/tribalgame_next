import React from "react";
import airsoftHero from "../../assets/img/airsoft/player3.png";
import logo from "../../assets/img/logo/logo.png";
import arrow from "../../assets/img/icones/Arrow.webp";
import aisoftLogo from "../../assets/img/logo/airsoftLogo.svg";
import Image from "next/image";
import Link from "next/link";

export type HeroPropsType = {
  bgColor: string;
  bgImage: string;
  logo: string;
  playersNb: number;
  minAge: number;
  duration: string;
  title: string;
  subTitle: string;
};

const Hero = () => {
  const style = {
    background: `linear-gradient(to top, rgba(33, 34, 38, 1) 0%, rgba(35, 40, 25, 0.5) 100%), url("${airsoftHero.src}")`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className={"hero"}>
        <div className={`banner`} style={style}>
          <div className="content">
            <h1>TERRAIN AIRSOFT</h1>
            <h2>
              Vivez des sensations grandeur nature sur un terrain de 4 hectares
              ! A Tournai (près de Lille)
            </h2>
            {
              <h4>
                <span>À partir de 35€</span>
                <span>pour 2 H 00 min</span>
                <span>Materiel Compris</span>
              </h4>
            }
            <p>
              <strong>Entre amis</strong> ou <strong>en club</strong>, frissons
              et rires garantis en Wallonie avec l’Airsoft ! Plongez dans
              l'action avec ce jeu de plein air où l’on s’affronte avec des
              répliques et des billes biodégradables
            </p>
            {/*
                            <div className="buttons">
                                <Link href="#"><i className="fa fa-plus" aria-hidden="true"></i>Réserver</Link>
                            </div>
                        */}
          </div>
          <Link href="#contact" className="play">
            Réserver <Image height={25} width={25} src={arrow.src} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
