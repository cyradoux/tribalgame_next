import React from 'react';
import mask from "@/assets/img/airsoft/mask-removebg.png";
import Circles from "@/components/animations/circles/circles";

const DoubleImg = () => {
    return (
        <>
            <div className={"double_img"}>

                <div className={"circles_box"}>
                    <div className={"front_up"}>
                        <img src={mask.src} alt=""/>
                    </div>
                    <Circles/>
                </div>

            </div>

        </>
    );
};

export default DoubleImg;