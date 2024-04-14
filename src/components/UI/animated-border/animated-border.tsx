import React, {ReactNode} from 'react';

export type AnimatedBorderPropsType = {
    children: ReactNode
}
const AnimatedBorder = ({ children }: AnimatedBorderPropsType) => {
    return (
        <>
            <div className="animated_border_box">
                <span>
                    { children }
                </span>
            </div>
        </>
    );
};

export default AnimatedBorder;