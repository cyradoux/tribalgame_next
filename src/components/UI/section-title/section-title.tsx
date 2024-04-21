import React from 'react';
import bg from "../../../assets/img/layout/bg.png";

export type SectionTitlePropsType = {
    title: string,
    borderColor: string,
    borderPosition: string,
    background: string
}

const SectionTitle = ({ title, borderColor, borderPosition, background }: SectionTitlePropsType) => {
    const sectionTitleStyle: React.CSSProperties & {"--color": string} = {
        '--color': borderColor,
        backgroundColor: background
    }
    return (
        <>
            <div className={`col-md-12 title_box ${borderPosition}`} style={{ background: background }}>
                <div className={"title_box_border"} style={sectionTitleStyle}></div>
                <div className={`section_title`}>
                    <h2>{ title }</h2>
                </div>
            </div>
        </>
    );
};

export default SectionTitle;