import React from 'react';
import mask from "@/assets/img/airsoft/mask-removebg.png";
import Circles from "@/components/animations/circles/circles";

export type DoubleImgPropsType = {
    img: string,
    circlesColors: string
}
const DoubleImg = ({img, circlesColors}: DoubleImgPropsType) => {
    return (
        <>
            <div className={"double_img"}>

                <div className={"circles_box"}>
                    <div className={"front_up"}>
                        <img src={ img } alt="images du block"/>
                    </div>
                    <Circles/>
                </div>

            </div>

        </>
    );
};

export default DoubleImg;