import React, {SetStateAction, useState} from 'react';
import Slide from "@/components/slider/slide";


export type SliderPropsType = {
    sliderItems: Slide[]
}

export type Slide = {
    img: string,
    title: string,
    text: string
}

const Slider = ({sliderItems}: SliderPropsType) => {
    const [slides, setSlides] = useState<SetStateAction<any>>(sliderItems);

    const nextSlide = () => {
        const firstSlide = slides.shift();
        setSlides([...slides, firstSlide]);
    };

    const prevSlide = () => {
        const lastSlide = slides.pop();
        setSlides([lastSlide, ...slides]);
    };

    return (
        <>
            <div className="slider_container">
                <div className="slider">
                    { slides.map((slide: any, index: number) => (
                        <Slide key={index} img={ slide.img } title={ slide.title }>
                            { slide.text }
                        </Slide>
                    ))}
                </div>

                <div className="buttons">
                    <span className="prev" onClick={ prevSlide }></span>
                    <span className="next" onClick={ nextSlide }></span>
                </div>
            </div>
        </>
    );
};

export default Slider;