import React from 'react';
import airsoftHero from "../../assets/img/airsoft/airsoft2.webp";
import logo from "../../assets/img/logo/logo.png";

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
        background: `linear-gradient(to right, rgba(33, 34, 38, 1) 0%, rgba(35, 40, 25, 0.5) 100%), url("${airsoftHero.src}")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
    }

    return (
        <>
            <div className={"hero"}>
                <div className={`banner`} style={style}>
                    <div className="content">
                        <img src={logo.src} alt="logo" className="movieTitle"/>
                        <h2> Vivez l’expérience immersive d’une partie d’Airsoft près de Lille!!</h2>
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
                        <img src="" alt=""/>Watch Trailer
                    </a>
                </div>
            </div>

        </>
    );
};

export default Hero;