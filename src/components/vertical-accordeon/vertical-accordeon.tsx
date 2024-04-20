import React, {useState} from 'react';
import clsx from "clsx";

import airsoftLogo from "../../assets/img/logo/airsoftLogo.svg";
import archeryLogo from "../../assets/img/logo/archerytagLogo.svg";
import lasergameLogo from "../../assets/img/logo/lasergameLogo.svg";
import painballLogo from "../../assets/img/logo/paintballLogo.svg";
import arrow from "../../assets/img/icones/Arrow.webp";
import airsoftPlayer from "../../assets/img/airsoft/airsoft-player.webp";
import archeryPlayer from "../../assets/img/archerytag/archery-player.webp";
import paintballPlayer from "../../assets/img/paintball/paintballPlayer.webp";
import lasergamePlayer from "../../assets/img/lasergame/lasergamePlayer.webp";
import warzone from "../../assets/img/layout/bg_warzone.webp";
import lasertag from "../../assets/img/layout/lasergame_bg.webp";
import laserSalle from "../../assets/img/lasergame/lasergame_bg2.webp";

const VerticalAccordeon = () => {
    const [activeBlock, setActiveBlock] = useState("");
    const [extended, setExtended] = useState(false);

    const handleClickBlock = (blockName: string) => {
        setActiveBlock(blockName);
        setExtended(true);
    }

    const handleClickBack = () => {
        setActiveBlock("");
        setExtended(false);
    }

    const styleAirsoft = {
        backgroundImage: `url(${warzone.src})`
    }
    const styleLaser = {
        backgroundImage: `url(${laserSalle.src})`
    }

    return (
        <>
            <div id="image_accordeon" className="wrapper">
                <div className="block">
                    {/*-----------------    Airsoft    ---------------------*/}
                    <div className={clsx("block1 block-w", {"active": activeBlock === "block1"}, {"min": activeBlock !== "block1"})} style={styleAirsoft}>
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
                            </div>
                        </div>
                    </div>

                    {/*-----------------    ArcheryTag    ---------------------*/}
                    <div className={clsx("block2 block-w", {"active": activeBlock === "block2"}, {"min": activeBlock !== "block2"})}>
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
                            </div>
                        </div>
                    </div>

                    {/*-----------------    Paintball    ---------------------*/}
                    <div className={clsx("block3 block-w", {"active": activeBlock === "block3"},{"min": activeBlock !== "block3"})}>
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
                            </div>
                        </div>
                    </div>

                    {/*-----------------    Lasergame    ---------------------*/}
                    <div className={clsx("block4 block-w", {"active": activeBlock === "block4"},{"min": activeBlock !== "block4"})} style={styleLaser}>
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
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default VerticalAccordeon;