import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  preventDefault,
  blockScroll,
  unblockScroll,
} from "@/utils/scrollBlocker";
import { parallax } from "@/utils/parallax";

import arrow from "../../assets/img/icones/Arrow.webp";

import airsoftPlayer from "../../assets/img/parallax/airsoft/player_rmv.webp";
import warzoneBg from "../../assets/img/airsoft/bg_warzone.webp";
import airsoftTerrain from "../../assets/img/parallax/airsoft/bg_warzone-firstplan.webp";
import tonneau from "../../assets/img/parallax/airsoft/tonneaux.webp";
import cabane from "../../assets/img/parallax/airsoft/4-cabane-tag.webp";
import tour from "../../assets/img/parallax/airsoft/tour.webp";

import archeryPlayer from "../../assets/img/parallax/archery/player.webp";
import archerytagBG from "../../assets/img/parallax/archery/bg_archery.webp";
import archerySky from "../../assets/img/parallax/archery/ciel.webp";
import bgArchery from "../../assets/img/parallax/archery/bg_archery.webp";
import cielarchery from "../../assets/img/parallax/archery/ciel.webp";

import paintballPlayer from "../../assets/img/paintball/playeuse.webp";
import paintballTerrain from "../../assets/img/paintball/terrain.webp";
import paintballCiel from "../../assets/img/paintball/ciel.webp";

import laserterrain from "../../assets/img/parallax/lasertag/terrain.webp";
import laserSky from "../../assets/img/parallax/lasertag/ciel.webp";
import lasergamePlayer from "../../assets/img/parallax/lasertag/player.webp";

const VerticalAccordeon = () => {
  const [activeBlock, setActiveBlock] = useState("");
  const [extended, setExtended] = useState(false);
  const parallaxSelector: string = "parallaxElement";

  const handleClickBlock = (blockName: string) => {
    setActiveBlock(blockName);
    setExtended(true);
    window.scrollTo(0, 0);
    blockScroll();
  };

  const handleClickBack = () => {
    setActiveBlock("");
    setExtended(false);
    unblockScroll();
  };

  const styleAirsoft = {
    backgroundImage: `url(${warzoneBg.src})`,
  };

  const styleArchery = {
    backgroundImage: `url(${archerytagBG.src}), url(${archerySky.src})`,
    backgroundSize: "cover, cover",
  };

  const stylePaintball = {
    backgroundImage: `url(${paintballTerrain.src}), url(${paintballCiel.src})`,
    backgroundSize: "cover, cover",
  };

  const styleLaser = {
    backgroundImage: `url(${laserterrain.src}), url(${laserSky.src})`,
    backgroundSize: "cover, cover",
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) =>
      parallax(e, `.${parallaxSelector}`, extended)
    );
  }, [extended]);

  return (
    <>
      <div id="image_accordeon" className="wrapper">
        <div className="block">
          {/*-----------------    Airsoft    ---------------------*/}
          <div
            className={clsx(
              "block1 block-w",
              { active: activeBlock === "block1" },
              { min: activeBlock !== "block1" },
              { mobile_closed: activeBlock !== "block1" && extended }
            )}
            style={styleAirsoft}
          >
            <div
              className={clsx("bring_front", { extended: extended })}
              onClick={() => handleClickBlock("block1")}
            ></div>

            {extended && activeBlock === "block1" && (
              <>
                {/*--------   TONNEAUX   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block1",
                  })}
                  style={{
                    position: "absolute",
                    right: "-30px",
                    bottom: "0",
                    height: "150px",
                    zIndex: "6",
                  }}
                >
                  <img
                    src={tonneau.src}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   CABANE   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block1",
                  })}
                  style={{ position: "absolute", bottom: "100px", zIndex: "4" }}
                >
                  <img
                    src={cabane.src}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt={""}
                  />
                </div>

                {/*--------   TERRAIN   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block1",
                  })}
                  style={{
                    position: "absolute",
                    left: "-30px",
                    bottom: "0",
                    zIndex: "3",
                  }}
                >
                  <img
                    src={airsoftTerrain.src}
                    style={{ width: "110%" }}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   TOUR   -------*/}
                <div
                  className={clsx("parallax_tour", {
                    appariation_fade: extended && activeBlock === "block1",
                  })}
                  style={{
                    position: "absolute",
                    right: "400px",
                    bottom: "0",
                    height: "100%",
                    width: "200px",
                    zIndex: "2",
                  }}
                >
                  <img
                    src={tour.src}
                    style={{ width: "100%" }}
                    className={parallaxSelector}
                    data-speed={"1.5"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   BACKGROUND   -------*/}
                <div
                  className={clsx("parallax_bg", {
                    appariation_fade: extended && activeBlock === "block1",
                  })}
                  style={{
                    position: "absolute",
                    width: "100vw",
                    top: "-50px",
                    left: "-50px",
                    zIndex: "1",
                  }}
                >
                  <img
                    src={warzoneBg.src}
                    style={{ width: "105vw" }}
                    className={parallaxSelector}
                    data-speed={"3.5"}
                    alt="terrain d'airsoft"
                  />
                </div>
              </>
            )}

            <div className="back">
              <div className="text">
                <div className={"accordeon_logo_box"}>
                  <h2>TEAM AIRSOFT</h2>
                </div>

                <div
                  className={clsx("accordeon_back", {
                    show: extended && activeBlock === "block1",
                  })}
                  onClick={handleClickBack}
                >
                  <div className={"accordeon_back_image"}>
                    <img src={arrow.src} alt="icone de retour en arrière" />
                  </div>
                  <div className={"accordeon_back_text"}>Retour</div>
                </div>

                <div
                  className={"player_img"}
                  style={{ position: "absolute", bottom: "0", zIndex: "4" }}
                >
                  <img
                    src={airsoftPlayer.src}
                    alt="image d'un joueur d'airsoft"
                  />
                </div>

                <div
                  className={clsx("airsoft_column accordeon_btn_groups", {
                    visible: extended && activeBlock === "block1",
                  })}
                >
                  <ul>
                    <li>
                      <a href="/airsoft#loisir">Tarifs Loisir</a>
                    </li>
                    <li>
                      <a href="/airsoft#event">Événements</a>
                    </li>
                    <li>
                      <a href="/airsoft#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div
                  className={clsx("airsoft_column accordeon_start_btn", {
                    visible: extended && activeBlock === "block1",
                  })}
                >
                  <a href="/contact">Réserver</a>
                </div>
              </div>
            </div>
          </div>

          {/*-----------------    ArcheryTag    ---------------------*/}
          <div
            className={clsx(
              "block2 block-w",
              { active: activeBlock === "block2" },
              { min: activeBlock !== "block2" },
              { mobile_closed: activeBlock !== "block2" && extended }
            )}
            style={styleArchery}
          >
            <div
              className={clsx("bring_front", { extended: extended })}
              onClick={() => handleClickBlock("block2")}
            ></div>

            {extended && activeBlock === "block2" && (
              <>
                {/*--------   TONNEAUX   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block2",
                  })}
                  style={{
                    position: "absolute",
                    right: "-30px",
                    bottom: "0",
                    height: "150px",
                    zIndex: "6",
                  }}
                >
                  <img
                    src={tonneau.src}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   CABANE   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block2",
                  })}
                  style={{ position: "absolute", bottom: "100px", zIndex: "4" }}
                >
                  <img
                    src={cabane.src}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt={""}
                  />
                </div>

                {/*--------   TERRAIN   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block2",
                  })}
                  style={{
                    position: "absolute",
                    left: "-30px",
                    bottom: "0",
                    zIndex: "3",
                  }}
                >
                  <img
                    src={bgArchery.src}
                    style={{ width: "110%" }}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   TOUR   -------*/}
                <div
                  className={clsx("parallax_tour", {
                    appariation_fade: extended && activeBlock === "block2",
                  })}
                  style={{
                    position: "absolute",
                    right: "400px",
                    bottom: "0",
                    height: "100%",
                    width: "200px",
                    zIndex: "2",
                  }}
                >
                  <img
                    src={tour.src}
                    style={{ width: "100%" }}
                    className={parallaxSelector}
                    data-speed={"1.5"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   BACKGROUND   -------*/}
                <div
                  className={clsx("parallax_bg", {
                    appariation_fade: extended && activeBlock === "block2",
                  })}
                  style={{
                    position: "absolute",
                    width: "110vw",
                    top: "-50px",
                    left: "-50px",
                    zIndex: "1",
                  }}
                >
                  <img
                    src={cielarchery.src}
                    style={{ width: "105vw" }}
                    className={parallaxSelector}
                    data-speed={"3.5"}
                    alt="terrain d'airsoft"
                  />
                </div>
              </>
            )}

            <div className="back">
              <div className="text">
                <div className={"accordeon_logo_box"}>
                <h2>TEAM ARCHERYTAG</h2>
                </div>

                <div
                  className={clsx("accordeon_back", {
                    show: extended && activeBlock === "block2",
                  })}
                  onClick={handleClickBack}
                >
                  <div className={"accordeon_back_image"}>
                    <img src={arrow.src} alt="icone de retour en arrière" />
                  </div>
                  <div className={"accordeon_back_text"}>Retour</div>
                </div>

                <div
                  className={"player_img"}
                  style={{ position: "absolute", bottom: "0", zIndex: "4" }}
                >
                  <img src={archeryPlayer.src} alt="" />
                </div>

                <div
                  className={clsx("airsoft_column accordeon_btn_groups", {
                    visible: extended && activeBlock === "block2",
                  })}
                >
                  <ul>
                    <li>
                      <a href="/archerytag#loisir">Tarifs Loisir</a>
                    </li>
                    <li>
                      <a href="/archerytag#event">Événements</a>
                    </li>
                    <li>
                      <a href="/archerytag#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div
                  className={clsx("airsoft_column accordeon_start_btn", {
                    visible: extended && activeBlock === "block2",
                  })}
                >
                  <a href="/contact">Réserver</a>
                </div>
              </div>
            </div>
          </div>

          {/*-----------------    Paintball    ---------------------*/}
          <div
            className={clsx(
              "block3 block-w",
              { active: activeBlock === "block3" },
              { min: activeBlock !== "block3" },
              { mobile_closed: activeBlock !== "block3" && extended }
            )}
            style={stylePaintball}
          >
            <div
              className={clsx("bring_front", { extended: extended })}
              onClick={() => handleClickBlock("block3")}
            ></div>

            {extended && activeBlock === "block3" && (
              <>
                {/*--------   TONNEAUX   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block3",
                  })}
                  style={{
                    position: "absolute",
                    right: "-30px",
                    bottom: "0",
                    height: "150px",
                    zIndex: "6",
                  }}
                >
                  <img
                    src={tonneau.src}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   TERRAIN   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block3",
                  })}
                  style={{
                    position: "absolute",
                    left: "-30px",
                    bottom: "0",
                    zIndex: "3",
                  }}
                >
                  <img
                    src={paintballTerrain.src}
                    style={{ width: "110%" }}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   TOUR   -------*/}
                <div
                  className={clsx("parallax_tour", {
                    appariation_fade: extended && activeBlock === "block3",
                  })}
                  style={{
                    position: "absolute",
                    right: "400px",
                    bottom: "0",
                    height: "100%",
                    width: "200px",
                    zIndex: "2",
                  }}
                >
                  <img
                    src={tour.src}
                    style={{ width: "100%" }}
                    className={parallaxSelector}
                    data-speed={"0.5"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   BACKGROUND   -------*/}
                <div
                  className={clsx("parallax_bg", {
                    appariation_fade: extended && activeBlock === "block3",
                  })}
                  style={{
                    position: "absolute",
                    width: "105%",
                    top: "-50px",
                    left: "-50px",
                    zIndex: "1",
                  }}
                >
                  <img
                    src={paintballCiel.src}
                    style={{ width: "102%" }}
                    className={parallaxSelector}
                    data-speed={"3.5"}
                    alt="terrain d'airsoft"
                  />
                </div>
              </>
            )}

            <div className="back">
              <div className="text">
                <div className={"accordeon_logo_box"}>
                  <h2>TEAM PAINTBALL</h2>
                </div>

                <div
                  className={clsx("accordeon_back", {
                    show: extended && activeBlock === "block3",
                  })}
                  onClick={handleClickBack}
                >
                  <div className={"accordeon_back_image"}>
                    <img src={arrow.src} alt="icone de retour en arrière" />
                  </div>
                  <div className={"accordeon_back_text"}>Retour</div>
                </div>

                <div
                  className={"player_img"}
                  style={{ position: "absolute", bottom: "100px", zIndex: "4" }}
                >
                  <img src={paintballPlayer.src} alt="" />
                </div>

                <div
                  className={clsx("airsoft_column accordeon_btn_groups", {
                    visible: extended && activeBlock === "block3",
                  })}
                >
                  <ul>
                    <li>
                      <a href="/paintball#loisir">Tarifs Loisir</a>
                    </li>
                    <li>
                      <a href="/paintball#event">Événements</a>
                    </li>
                    <li>
                      <a href="/paintball#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div
                  className={clsx("airsoft_column accordeon_start_btn", {
                    visible: extended && activeBlock === "block3",
                  })}
                >
                  <a href="/contact">Réserver</a>
                </div>
              </div>
            </div>
          </div>

          {/*-----------------    Lasergame    ---------------------*/}
          <div
            className={clsx(
              "block4 block-w",
              { active: activeBlock === "block4" },
              { min: activeBlock !== "block4" },
              { mobile_closed: activeBlock !== "block4" && extended }
            )}
            style={styleLaser}
          >
            <div
              className={clsx("bring_front", { extended: extended })}
              onClick={() => handleClickBlock("block4")}
            ></div>

            {extended && activeBlock === "block4" && (
              <>
                {/*--------   TONNEAUX   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block4",
                  })}
                  style={{
                    position: "absolute",
                    right: "-30px",
                    bottom: "0",
                    height: "150px",
                    zIndex: "6",
                  }}
                >
                  <img
                    src={tonneau.src}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   TERRAIN   -------*/}
                <div
                  className={clsx({
                    appariation_fade: extended && activeBlock === "block4",
                  })}
                  style={{
                    position: "absolute",
                    left: "-30px",
                    bottom: "0",
                    zIndex: "3",
                  }}
                >
                  <img
                    src={laserterrain.src}
                    style={{ width: "110%" }}
                    className={parallaxSelector}
                    data-speed={"1"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   TOUR   -------*/}
                <div
                  className={clsx("parallax_tour", {
                    appariation_fade: extended && activeBlock === "block4",
                  })}
                  style={{
                    position: "absolute",
                    left: "40%",
                    bottom: "0",
                    height: "100%",
                    width: "200px",
                    zIndex: "2",
                  }}
                >
                  <img
                    src={tour.src}
                    style={{ width: "100%" }}
                    className={parallaxSelector}
                    data-speed={"0.5"}
                    alt="terrain d'airsoft"
                  />
                </div>

                {/*--------   BACKGROUND   -------*/}
                <div
                  className={clsx("parallax_bg", {
                    appariation_fade: extended && activeBlock === "block4",
                  })}
                  style={{
                    position: "absolute",
                    width: "105%",
                    top: "-50px",
                    left: "-50px",
                    zIndex: "1",
                  }}
                >
                  <img
                    src={laserSky.src}
                    style={{ width: "105vw" }}
                    className={parallaxSelector}
                    data-speed={"3.5"}
                    alt="terrain d'airsoft"
                  />
                </div>
              </>
            )}

            <div className="back">
              <div className="text">
                <div className={"accordeon_logo_box"}>
                  <h2>TEAM LASERGAME</h2>
                </div>

                <div
                  className={clsx("accordeon_back", {
                    show: extended && activeBlock === "block4",
                  })}
                  onClick={handleClickBack}
                >
                  <div className={"accordeon_back_image"}>
                    <img src={arrow.src} alt="icone de retour en arrière" />
                  </div>
                  <div className={"accordeon_back_text"}>Retour</div>
                </div>

                <div
                  className={"player_img"}
                  style={{ position: "absolute", bottom: "0", zIndex: "4" }}
                >
                  <img
                    src={lasergamePlayer.src}
                    alt="image de joueur de lasergame"
                  />
                </div>

                <div
                  className={clsx("airsoft_column accordeon_btn_groups", {
                    visible: extended && activeBlock === "block4",
                  })}
                >
                  <ul>
                    <li>
                      <a href="/lasergame#loisir">Tarifs Loisir</a>
                    </li>
                    <li>
                      <a href="/lasergame#event">Événements</a>
                    </li>
                    <li>
                      <a href="/lasergame#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div
                  className={clsx("airsoft_column accordeon_start_btn", {
                    visible: extended && activeBlock === "block4",
                  })}
                >
                  <a href="/contact">Réserver</a>
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
