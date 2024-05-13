import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href: string;
  coverImageSrc: string;
  logoSrc: string;
  characterSrc: string;
}

const CardWithDelay: React.FC<CardProps> = ({
  href,
  coverImageSrc,
  logoSrc,
  characterSrc,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLinkClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };

  return (
    <div className={"col-md-6 card-3d"}>
      <div className="card" onClick={handleLinkClick}>
        <div className="wrapper">
          <Image
            height={380}
            width={667}
            src={coverImageSrc}
            alt=""
            className="cover-image"
          />
        </div>
        <Image
          height={380}
          width={667}
          src={logoSrc}
          alt=""
          className="title"
        />
        <Image
          height={380}
          width={667}
          src={characterSrc}
          alt="character"
          className="character"
        />
      </div>
    </div>
  );
};

export default CardWithDelay;