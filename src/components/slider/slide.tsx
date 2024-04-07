import React, {ReactNode} from 'react';

export type SlidePropsType = {
    img: string,
    title: string,
    children: ReactNode
}

const Slide = ({ img, title, children }: SlidePropsType) => {
    const slideStyle: React.CSSProperties & { '--img': string } = {
        '--img': `url(${img})`
    };

    return (
        <>
            <div className="slides" style={ slideStyle }>
                <div className="content">
                    <h2>{ title }</h2>
                    <p>{ children }</p>
                </div>
            </div>
        </>
    );
};

export default Slide;