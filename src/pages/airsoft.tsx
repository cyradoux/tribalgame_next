import React, {useEffect} from 'react';
import Hero from "@/components/hero/hero";
import Circles from "@/components/animations/circles/circles";
import DoubleImg from "@/components/double_img/double_img";

const Airsoft = () => {

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            body
            {
                background: #000
            }
            ::-webkit-scrollbar
            {
                width: 12px;
            }
            ::-webkit-scrollbar-thumb
            {
                background: linear-gradient(transparent, #E36A01);
                border-radius: 6px;
            }
            ::-webkit-scrollbar-thumb:hover
            {
                background: linear-gradient(transparent, #E36A01);
            }
        `;
        const head = document.querySelector("head");
        head!.appendChild(style);
    }, []);
    return (
        <>
            <Hero/>
            <div className={"container-fluid"} style={{backgroundColor: "rgba(33, 34, 38, 1)"}}>
                <div className={"container"}  style={{backgroundColor: "rgba(33, 34, 38, 1)"}}>
                    <div className="row">
                        <div className={"col-md-6 description_box"} style={{borderLeft: "25px solid #FF7400"}}>
                            <h2>Jouer à se faire peur</h2>
                            <p>
                                Vous vous souvenez, lorsqu’<strong>avec vos camarades vous partiez sur le sentier de la guerre</strong> ?
                                Ce petit frisson d’excitation et de frayeur, Tribal Games vous propose de le retrouver en version XXL.
                            </p>
                            <p>
                                Avec vos amis d’aujourd’hui, munis de répliques incroyablement réalistes d’armes réelles,
                                vous allez faire équipe pour essayer d’emporter la victoire sur l’équipe adverse.
                            </p>
                            <p>
                                Votre terrain de jeu ? Un <strong>vaste espace extérieur de près de 40 000 mètres carrés</strong>.
                                De quoi vous cacher, tendre des pièges et élaborer des stratégies qui vous donneront la supériorité sur vos adversaires !
                            </p>
                        </div>
                        <div className={"col-md-6"}>
                            <DoubleImg/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Airsoft;