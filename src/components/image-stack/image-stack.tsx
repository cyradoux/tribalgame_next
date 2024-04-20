import React from 'react';

const ImageStack = (props: any) => {
    return (
        <div className={`col-md-6 image_stack`}>
        <img src={ props.frontImg } alt="" className={"stack_front"}/>
        <img src={ props.backImg } alt="" className={"stack_back"}/>
    </div>
    );
};

export default ImageStack;