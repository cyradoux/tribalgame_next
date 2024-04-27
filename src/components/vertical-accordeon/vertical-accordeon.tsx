import React, {useState} from 'react';
import clsx from "clsx";
import {preventDefault, blockScroll, unblockScroll} from "@/utils/scrollBlocker";

import arrow from "../../assets/img/icones/Arrow.webp";

import airsoftLogo from "../../assets/img/logo/airsoftLogo.svg";
import airsoftPlayer from "../../assets/img/airsoft/player_rmv.png";
import warzoneBg from "../../assets/img/airsoft/bg_warzone.webp";

import archeryLogo from "../../assets/img/logo/archerytagLogo.svg";
import archeryPlayer from "../../assets/img/archerytag/player.png";
import archerytagBG from "../../assets/img/archerytag/bg_archery.png";
import archerySky from "../../assets/img/archerytag/ciel.png";

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

    return (
        <>
            <div id="image_accordeon" className="wrapper">
                <div className="block">
                    {/*-----------------    Airsoft    ---------------------*/}
                    <div className={clsx("block1 block-w", {"active": activeBlock === "block1"}, {"min": activeBlock !== "block1"}, {"mobile_closed": activeBlock !== "block1" && extended})} style={styleAirsoft}>
                        <div className={clsx("bring_front", {"extended": extended})} onClick={() => handleClickBlock("block1")}></div>

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

                                <div className={"player_img"}>
                                    <img src={airsoftPlayer.src} alt=""/>
                                </div>
                                
                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block1"})}>
                                    <ul>
                                        <li><a href="">A propos</a></li>
                                        <li><a href="">Photo</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>
                                
                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block1"})}>
                                    <a href="">Start</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/*-----------------    ArcheryTag    ---------------------*/}
                    <div className={clsx("block2 block-w", {"active": activeBlock === "block2"}, {"min": activeBlock !== "block2"}, {"mobile_closed": activeBlock !== "block2" && extended})} style={styleArchery}>
                        <div className={clsx( "bring_front", {"extended": extended})} onClick={() => handleClickBlock("block2")}></div>

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

                                <div className={"player_img"}>
                                    <img src={archeryPlayer.src} alt=""/>
                                </div>

                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block2"})}>
                                    <ul>
                                        <li><a href="">A propos</a></li>
                                        <li><a href="">Photo</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>

                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block2"})}>
                                    <a href="">Start</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-----------------    Paintball    ---------------------*/}
                    <div className={clsx("block3 block-w", {"active": activeBlock === "block3"},{"min": activeBlock !== "block3"}, {"mobile_closed": activeBlock !== "block3" && extended})} style={stylePaintball}>
                        <div className={clsx("bring_front", {"extended": extended})} onClick={() => handleClickBlock("block3")}></div>

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

                                <div className={"player_img"}>
                                    <img src={paintballPlayer.src} alt=""/>
                                </div>

                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block3"})}>
                                    <ul>
                                        <li><a href="">A propos</a></li>
                                        <li><a href="">Photo</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>

                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block3"})}>
                                    <a href="">Start</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-----------------    Lasergame    ---------------------*/}
                    <div className={clsx("block4 block-w", {"active": activeBlock === "block4"},{"min": activeBlock !== "block4"}, {"mobile_closed": activeBlock !== "block4" && extended})} style={styleLaser}>
                        <div className={clsx("bring_front", {"extended": extended})} onClick={() => handleClickBlock("block4")}></div>

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

                                <div className={"player_img"}>
                                    <img src={lasergamePlayer.src} alt="image de joueur de lasergame"/>
                                </div>

                                <div className={clsx("airsoft_column accordeon_btn_groups", {"visible": extended && activeBlock === "block4"})}>
                                    <ul>
                                        <li><a href="">A propos</a></li>
                                        <li><a href="">Photo</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>

                                <div className={clsx("airsoft_column accordeon_start_btn", {"visible": extended && activeBlock === "block4"})}>
                                    <a href="">Start</a>
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