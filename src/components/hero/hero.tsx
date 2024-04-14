import React from 'react';
import airsoftHero from "../../assets/img/airsoft/player3.png";
import logo from "../../assets/img/logo/logo.png";
import arrow from "../../assets/img/icones/Arrow.webp";
import aisoftLogo from "../../assets/img/logo/airsoftLogo.svg";

export type HeroPropsType = {
    bgColor: string,
    bgImage: string,
    logo: string,
    playersNb: number,
    minAge: number,
    duration: string,
    title: string,
    subTitle: string
}

const Hero = () => {
    const style = {
        background: `linear-gradient(to top, rgba(33, 34, 38, 1) 0%, rgba(35, 40, 25, 0.5) 100%), url("${airsoftHero.src}")`,
        backgroundSize: "cover"
    }

    return (
        <>
            <div className={"hero"}>
                <div className={`banner`} style={style}>
                    <div className="content">
                        <img src={aisoftLogo.src} alt="logo" className="movieTitle"/>
                        <h2>Retrouvez les sensations de votre enfance grandeur nature dans une partie d’Airsoft</h2>
                        <h4>
                            <span>2020</span>
                            <span>12+</span>
                            <span>1h 55min</span>
                            <span>Action</span>
                        </h4>
                        <p>
                            Frissons et rires garantis en Wallonie avec l’Airsoft, jeu de plein air où l’on s’affronte avec des répliques et billes biodégradables.
                        </p>
                        <div className="buttons">
                            <a href="#"><i className="fa fa-play" aria-hidden="true"></i>Play</a>
                            <a href="#"><i className="fa fa-plus" aria-hidden="true"></i>My list</a>
                        </div>
                    </div>
                    <a href="" className="play">
                        Regarder <img src={arrow.src} alt=""/>
                    </a>
                </div>
            </div>

        </>
    );
};

export default Hero;