import React from 'react';
import {Controls, Player} from "@lottiefiles/react-lottie-player";
import classes from "./spinner.module.css";

const Spinner = () => {
    return (
        <>
            <div className={ classes.spinner}>
                <Player
                    autoplay={true}
                    loop={true}
                    keepLastFrame={false}
                    src="https://lottie.host/d51abc15-476c-4282-889a-fe0ec044b382/BWnYhwa4FL.json"
                    style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center" }}
                >
                    <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
                </Player>
            </div>
        </>
    );
};

export default Spinner;