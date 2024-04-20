import React, { useLayoutEffect, useState } from "react";

const ComponentWithDivSize = ({ divRef }: any) => {
  const [divSize, setDivSize] = useState({ width: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
        if (divRef.current) {
            setDivSize({
                width: divRef.current.offsetWidth,
            });
        }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
        window.removeEventListener("resize", updateSize);
    };
}, [divRef]);

  return divSize.width
};

export default ComponentWithDivSize;
