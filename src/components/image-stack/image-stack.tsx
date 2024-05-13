import Image from 'next/image';
import React from 'react';

interface ImageStackProps {
  frontImg: string;
  backImg: string;
  backImgAlign?: string;
  height?: number | `${number}` | undefined; // Type union pour les valeurs de height
  width?: number | `${number}` | undefined; // Type union pour les valeurs de width
}

const ImageStack: React.FC<ImageStackProps> = ({
  frontImg,
  backImg,
  backImgAlign,
  height = 100, // Valeur par défaut pour la hauteur (en pixels)
  width = 100 // Valeur par défaut pour la largeur (100%)
}) => {
  return (
    <div className={`col-md-6 image_stack`}>
      <Image width={width} height={height} src={frontImg} alt="" className={"stack_front"} />
      <Image width={width} height={height} src={backImg} alt="" className={`stack_back ${backImgAlign}`} />
    </div>
  );
};

export default ImageStack;
