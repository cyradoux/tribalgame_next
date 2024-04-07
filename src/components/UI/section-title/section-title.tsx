import React from 'react';

export type SectionTitlePropsType = {
    title: string,
    borderColor: string,
    borderPosition: string
}

const SectionTitle = ({ title, borderColor, borderPosition }: SectionTitlePropsType) => {
    const sectionTitleStyle: React.CSSProperties & {"--color": string} = {
        '--color': borderColor
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