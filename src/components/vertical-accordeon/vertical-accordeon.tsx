import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import {preventDefault, blockScroll, unblockScroll} from "@/utils/scrollBlocker";
import {parallax} from "@/utils/parallax";

import arrow from "../../assets/img/icones/Arrow.webp";

import airsoftLogo from "../../assets/img/logo/airsoftLogo.svg";
import airsoftPlayer from "../../assets/img/airsoft/player_rmv.png";
import warzoneBg from "../../assets/img/airsoft/bg_warzone.webp";
import airsoftTerrain from "../../assets/img/parallax/airsoft/bg_warzone-firstplan.png";
import tonneau from "../../assets/img/parallax/airsoft/tonneaux.png";
import cabane from "../../assets/img/parallax/airsoft/4-cabane-tag.webp";
import tour from "../../assets/img/parallax/airsoft/tour.png";

import archeryLogo from "../../assets/img/logo/archerytagLogo.svg";
import archeryPlayer from "../../assets/img/archerytag/player.png";
import archerytagBG from "../../assets/img/archerytag/bg_archery.png";
import archerySky from "../../assets/img/archerytag/ciel.png";
import bgArchery from "../../assets/img/parallax/archery/bg_archery.png";
import cielarchery from "../../assets/img/parallax/archery/ciel.webp";

import painballLogo from "../../assets/img/logo/paintballLogo.svg";
import paintballPlayer from "../../assets/img/paintball//playeuse.png";
import paintballTerrain from "../../assets/img/paintball/terrain.png";
import paintballCiel from "../../assets/img/paintball/ciel.png";

import lasergameLogo from "../../assets/img/logo/lasergameLogo.svg";
import laserterrain from "../../assets/img/lasergame/terrain.png";
import laserSky from "../../assets/img/lasergame/ciel.png";
import lasergamePlayer from "../../assets/img/lasergame/player.png";


const VerticalAccordeon = () => {
    const [activeBlock, setActiveBlock] = useState("");
    const [extended, setExtended] = useState(false);
    const parallaxSelector: string = "parallaxElement";

    const handleClickBlock = (blockName: string) => {
        setActiveBlock(blockName);
        setExtended(true);
        window.scrollTo(0,0);
        blockScroll();
    }

    const handleClickBack = () => {
        setActiveBlock("");
        setExtended(false);
        unblockScroll();
    }

    const styleAirsoft = {
        backgroundImage: `url(${warzoneBg.src})`
    }

    const styleArchery = {
        backgroundImage: `url(${archerytagBG.src}), url(${archerySky.src})`,
        backgroundSize: "cover, cover"
    }

    const stylePaintball = {
        backgroundImage: `url(${paintballTerrain.src}), url(${paintballCiel.src})`,
        backgroundSize: "cover, cover"
    }

    const styleLaser = {
        backgroundImage: `url(${laserterrain.src}), url(${laserSky.src})`,
        backgroundSize: "cover, cover"
    }

    useEffect(() => {
            document.addEventListener("mousemove", (e) => parallax(e, `.${parallaxSelector}`, extended));
    }, [extended]);

    return (
        <>
            <div id="image_accordeon" className="wrapper">
                <div className="block">
                    {/*-----------------    Airsoft    ---------------------*/}
                    <div className={clsx("block1 block-w", {"active": activeBlock === "block1"}, {"min": activeBlock !== "block1"}, {"mobile_closed": activeBlock !== "block1" && extended})} style={styleAirsoft}>
                        <div className={clsx("bring_front", {"extended": extended})} onClick={() => handleClickBlock("block1")}></div>

                        {
                            extended && activeBlock === "block1" &&
                            <>
                                {/*--------   TONNEAUX   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block1"})} style={{position: "absolute", right: "-30px", bottom: "0", height: "150px", zIndex: "6"}}>
                                    <img src={tonneau.src} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   CABANE   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block1"})} style={{position: "absolute", bottom: "100px", zIndex: "4"}}>
                                    <img src={cabane.src} className={parallaxSelector} data-speed={"1"} alt={""}/>
                                </div>

                                {/*--------   TERRAIN   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block1"})} style={{position: "absolute", left: "-30px", bottom: "0", zIndex: "3"}}>
                                    <img src={airsoftTerrain.src} style={{width: "110%"}} className={parallaxSelector} data-speed={"1"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   TOUR   -------*/}
                                <div className={clsx("parallax_tour", {"appariation_fade": extended && activeBlock === "block1"})} style={{position: "absolute", right: "400px", bottom: "0", height: "100%", width: "200px", zIndex: "2"}}>
                                    <img src={tour.src}  style={{width: "100%"}} className={parallaxSelector} data-speed={"1.5"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   BACKGROUND   -------*/}
                                <div className={clsx("parallax_bg",{"appariation_fade": extended && activeBlock === "block1"})} style={{position: "absolute", width: "100vw",top: "0", left: "-50px", zIndex: "1"}}>
                                    <img src={warzoneBg.src} style={{width: "105vw"}} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>
                            </>
                        }

                        <div className="back" >
                            <div className="text">
                                <div className={"accordeon_logo_box"}>
                                    <img src={ airsoftLogo.src } alt="Logo de tribal pour airsoft"/>
                                </div>

                                <div className={clsx("accordeon_back", {"show": extended && activeBlock === "block1"})} onClick={handleClickBack}>
                                    <div className={"accordeon_back_image"}>
                                        <img src={arrow.src} alt="icone de retour en arrière"/>
                                    </div>
                                    <div className={"accordeon_back_text"}>
                                        Retour
                                    </div>
                                </div>

                                <div className={"player_img"} style={{position: "absolute", bottom: "0",zIndex: "4"}}>
                                    <img src={airsoftPlayer.src} className={parallaxSelector} data-speed={"-1"} alt="image d'un joueur d'airsoft"/>
                                </div>
                                
                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block1"})}>
                                    <ul>
                                        <li><a href="/airsoft">A propos</a></li>
                                        <li><a href="/airsoft#gallery">Photo</a></li>
                                        <li><a href="/airsoft#contact">Contact</a></li>
                                    </ul>
                                </div>
                                
                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block1"})}>
                                    <a href="/contact">Start</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/*-----------------    ArcheryTag    ---------------------*/}
                    <div className={clsx("block2 block-w", {"active": activeBlock === "block2"}, {"min": activeBlock !== "block2"}, {"mobile_closed": activeBlock !== "block2" && extended})} style={styleArchery}>
                        <div className={clsx( "bring_front", {"extended": extended})} onClick={() => handleClickBlock("block2")}></div>

                        {
                            extended && activeBlock === "block2" &&
                            <>
                                {/*--------   TONNEAUX   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block2"})} style={{position: "absolute", right: "-30px", bottom: "0", height: "150px", zIndex: "6"}}>
                                    <img src={tonneau.src} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   CABANE   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block2"})} style={{position: "absolute", bottom: "100px", zIndex: "4"}}>
                                    <img src={cabane.src} className={parallaxSelector} data-speed={"1"} alt={""}/>
                                </div>

                                {/*--------   TERRAIN   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block2"})} style={{position: "absolute", left: "-30px", bottom: "0", zIndex: "3"}}>
                                    <img src={bgArchery.src} style={{width: "110%"}} className={parallaxSelector} data-speed={"1"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   TOUR   -------*/}
                                <div className={clsx("parallax_tour", {"appariation_fade": extended && activeBlock === "block2"})} style={{position: "absolute", right: "400px", bottom: "0", height: "100%", width: "200px", zIndex: "2"}}>
                                    <img src={tour.src}  style={{width: "100%"}} className={parallaxSelector} data-speed={"1.5"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   BACKGROUND   -------*/}
                                <div className={clsx("parallax_bg",{"appariation_fade": extended && activeBlock === "block2"})} style={{position: "absolute", width: "100vw",top: "0", left: "-50px", zIndex: "1"}}>
                                    <img src={cielarchery.src} style={{width: "105vw"}} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>
                            </>
                        }

                        <div className="back">
                            <div className="text">
                                <div className={"accordeon_logo_box"}>
                                    <img src={ archeryLogo.src } alt="Logo de tribal pour airsoft"/>
                                </div>

                                <div className={clsx("accordeon_back", {"show": extended && activeBlock === "block2"})}  onClick={handleClickBack}>
                                    <div className={"accordeon_back_image"}>
                                        <img src={arrow.src} alt="icone de retour en arrière"/>
                                    </div>
                                    <div className={"accordeon_back_text"}>
                                        Retour
                                    </div>
                                </div>

                                <div className={"player_img"} style={{position: "absolute", bottom: "0",zIndex: "4"}}>
                                    <img src={archeryPlayer.src} className={parallaxSelector} data-speed={"-1"} alt=""/>
                                </div>

                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block2"})}>
                                    <ul>
                                        <li><a href="/archerytag">A propos</a></li>
                                        <li><a href="/archerytag#gallery">Photo</a></li>
                                        <li><a href="/archerytag#contact">Contact</a></li>
                                    </ul>
                                </div>

                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block2"})}>
                                    <a href="/contact">Start</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-----------------    Paintball    ---------------------*/}
                    <div className={clsx("block3 block-w", {"active": activeBlock === "block3"},{"min": activeBlock !== "block3"}, {"mobile_closed": activeBlock !== "block3" && extended})} style={stylePaintball}>
                        <div className={clsx("bring_front", {"extended": extended})} onClick={() => handleClickBlock("block3")}></div>

                        {
                            extended && activeBlock === "block3" &&
                            <>
                                {/*--------   TONNEAUX   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block3"})} style={{position: "absolute", right: "-30px", bottom: "0", height: "150px", zIndex: "6"}}>
                                    <img src={tonneau.src} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   TERRAIN   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block3"})} style={{position: "absolute", left: "-30px", bottom: "0", zIndex: "3"}}>
                                    <img src={paintballTerrain.src} style={{width: "110%"}} className={parallaxSelector} data-speed={"1"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   TOUR   -------*/}
                                <div className={clsx("parallax_tour", {"appariation_fade": extended && activeBlock === "block3"})} style={{position: "absolute", right: "400px", bottom: "0", height: "100%", width: "200px", zIndex: "2"}}>
                                    <img src={tour.src}  style={{width: "100%"}} className={parallaxSelector} data-speed={"0.5"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   BACKGROUND   -------*/}
                                <div className={clsx("parallax_bg",{"appariation_fade": extended && activeBlock === "block3"})} style={{position: "absolute", width: "100vw",top: "0", left: "-50px", zIndex: "1"}}>
                                    <img src={paintballCiel.src} style={{width: "105vw"}} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>
                            </>
                        }

                        <div className="back">
                            <div className="text">
                                <div className={"accordeon_logo_box"}>
                                    <img src={ painballLogo.src } alt="Logo de tribal pour airsoft"/>
                                </div>

                                <div className={clsx("accordeon_back", {"show": extended && activeBlock === "block3"})}  onClick={handleClickBack}>
                                    <div className={"accordeon_back_image"}>
                                        <img src={arrow.src} alt="icone de retour en arrière"/>
                                    </div>
                                    <div className={"accordeon_back_text"}>
                                        Retour
                                    </div>
                                </div>

                                <div className={"player_img"} style={{position: "absolute", bottom: "0",zIndex: "4"}}>
                                    <img src={paintballPlayer.src} className={parallaxSelector} data-speed={"-1"} alt=""/>
                                </div>

                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block3"})}>
                                    <ul>
                                        <li><a href="/paintball">A propos</a></li>
                                        <li><a href="/paintball#gallery">Photo</a></li>
                                        <li><a href="/paintball#contact">Contact</a></li>
                                    </ul>
                                </div>

                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block3"})}>
                                    <a href="/contact">Start</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-----------------    Lasergame    ---------------------*/}
                    <div className={clsx("block4 block-w", {"active": activeBlock === "block4"},{"min": activeBlock !== "block4"}, {"mobile_closed": activeBlock !== "block4" && extended})} style={styleLaser}>
                        <div className={clsx("bring_front", {"extended": extended})} onClick={() => handleClickBlock("block4")}></div>

                        {
                            extended && activeBlock === "block4" &&
                            <>
                                {/*--------   TONNEAUX   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block4"})} style={{position: "absolute", right: "-30px", bottom: "0", height: "150px", zIndex: "6"}}>
                                    <img src={tonneau.src} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   TERRAIN   -------*/}
                                <div className={clsx({"appariation_fade": extended && activeBlock === "block4"})} style={{position: "absolute", left: "-30px", bottom: "0", zIndex: "3"}}>
                                    <img src={laserterrain.src} style={{width: "110%"}} className={parallaxSelector} data-speed={"1"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   TOUR   -------*/}
                                <div className={clsx("parallax_tour", {"appariation_fade": extended && activeBlock === "block4"})} style={{position: "absolute", right: "400px", bottom: "0", height: "100%", width: "200px", zIndex: "2"}}>
                                    <img src={tour.src}  style={{width: "100%"}} className={parallaxSelector} data-speed={"0.5"} alt="terrain d'airsoft"/>
                                </div>

                                {/*--------   BACKGROUND   -------*/}
                                <div className={clsx("parallax_bg",{"appariation_fade": extended && activeBlock === "block4"})} style={{position: "absolute", width: "100vw",top: "0", left: "-50px", zIndex: "1"}}>
                                    <img src={laserSky.src} style={{width: "105vw"}} className={parallaxSelector} data-speed={"2"} alt="terrain d'airsoft"/>
                                </div>
                            </>
                        }

                        <div className="back">
                            <div className="text">
                                <div className={"accordeon_logo_box"}>
                                    <img src={ lasergameLogo.src } alt="Logo de tribal pour airsoft"/>
                                </div>

                                <div className={clsx("accordeon_back", {"show": extended && activeBlock === "block4"})}  onClick={handleClickBack}>
                                    <div className={"accordeon_back_image"}>
                                        <img src={arrow.src} alt="icone de retour en arrière"/>
                                    </div>
                                    <div className={"accordeon_back_text"}>
                                        Retour
                                    </div>
                                </div>

                                <div className={"player_img"} style={{position: "absolute", bottom: "0",zIndex: "4"}}>
                                    <img src={lasergamePlayer.src} className={parallaxSelector} data-speed={"-1"} alt="image de joueur de lasergame"/>
                                </div>

                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block4"})}>
                                    <ul>
                                        <li><a href="/lasergame">A propos</a></li>
                                        <li><a href="/lasergame#gallery">Photo</a></li>
                                        <li><a href="/lasergame#contact">Contact</a></li>
                                    </ul>
                                </div>

                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block4"})}>
                                    <a href="/contact">Start</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default VerticalAccordeon;