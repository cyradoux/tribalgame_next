import React, {SetStateAction, useState} from 'react';
import Slide from "@/components/slider/slide";

import slide1 from "../../assets/img/airsoft/slides/slide1.png";
import slide2 from "../../assets/img/airsoft/slides/slide2.png";
import slide3 from "../../assets/img/airsoft/slides/slide3.png";
import slide4 from "../../assets/img/airsoft/slides/slide4.png";
import slide5 from "../../assets/img/airsoft/slides/slide5.png";
import slide6 from "../../assets/img/airsoft/slides/slide6.png";
import SectionTitle from "@/components/UI/section-title/section-title";

const slidesData = [
    { img: slide1.src, title: 'Slide 01', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide2.src, title: 'Slide 02', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide3.src, title: 'Slide 03', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide4.src, title: 'Slide 04', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide5.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
    { img: slide6.src, title: 'Slide 05', text: 'Lorem ipsum, dolor sit amet consectetur...' },
];

const Slider = () => {
    const [slides, setSlides] = useState<SetStateAction<any>>(slidesData);

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