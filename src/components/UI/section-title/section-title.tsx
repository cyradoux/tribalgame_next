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
            <div className={"col-md-12 title_box"}>
                <div className={`section_title ${borderPosition}`} style={ sectionTitleStyle }>
                    <h2>{ title }</h2>
                </div>
            </div>
        </>
    );
};

export default SectionTitle;