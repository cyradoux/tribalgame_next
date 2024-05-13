import React from "react";
import airsoftHero from "../../assets/img/airsoft/player3.png";
import logo from "../../assets/img/logo/logo.png";
import arrow from "../../assets/img/icones/Arrow.webp";
import aisoftLogo from "../../assets/img/logo/airsoftLogo.svg";
import Link from "next/link";
import Image from "next/image";

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

const GenericHero = ({
  bgColor,
  bgImage,
  logo,
  title,
  subTitle,
}: HeroPropsType) => {
  const style = {
    backgroundImage: `${bgColor}, url("${bgImage}")`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className={"hero"}>
        <div className={`banner`} style={style}>
          <div className="content">
            <h2>{title}</h2>
            {/*
                        <h4>
                            <span>2020</span>
                            <span>12+</span>
                            <span>1h 55min</span>
                            <span>Action</span>
                        </h4>
                        */}
            <p>{subTitle}</p>
            {/*
                        <div className="buttons">
                            <Link href="#"><i className="fa fa-play" aria-hidden="true"></i>Play</a>
                            <Link href="#"><i className="fa fa-plus" aria-hidden="true"></i>Réserver</a>
                        </div>
                        */}
          </div>
          <Link href="#contact" className="play">
            Réserver{" "}
          
          </Link>
        </div>
      </div>
    </>
  );
};

export default GenericHero;
