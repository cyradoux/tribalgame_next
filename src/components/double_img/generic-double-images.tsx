import React from 'react';
import Circles from "@/components/animations/circles/circles";
import Image from 'next/image';

export type DoubleImgPropsType = {
    img: string,
    imgHeight?: number,
    imgWidth?: number 
}

const DoubleImg = ({ img, imgHeight = 500, imgWidth = 500 }: DoubleImgPropsType) => {
    return (
        <div className={"double_img"}>
            <div className={"circles_box"}>
                <div className={"front_up"}>
                    <Image height={imgHeight} width={imgWidth} src={img} alt="images du block" />
                </div>
                <Circles />
            </div>
        </div>
    );
};

export default DoubleImg;
