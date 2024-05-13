import Link from "next/link";
import React from "react";

type TarifType = {
  type: string;
  prix: string;
};

type CategorieType = {
  nom: string;
  tarifs: TarifType[];
  services?: string[];
  conditions?: string;
  cta?: { texte: string; lien: string };
};

type PriceBoxProps = {
  title: string;
  tarifs: CategorieType[];
};

const PriceBox: React.FC<PriceBoxProps> = ({ title, tarifs }) => {
  return (
    <div className="tarifs-container">
      <h2>{title}</h2>
      {tarifs.map((categorie, index) => (
        <div key={index} className="tarif-card">
          <div className="tarif-info">
            <h3>{categorie.nom}</h3>
            {categorie.tarifs.map((tarif, tarifIndex) => (
              <p key={tarifIndex}>
                {tarif.type}: {tarif.prix}
              </p>
            ))}
          </div>
          <ul>
            {categorie.services &&
              categorie.services.map((service, serviceIndex) => (
                <li key={serviceIndex}>{service}</li>
              ))}
          </ul>
          {categorie.conditions && <p>{categorie.conditions}</p>}
          {categorie.cta && (
            <Link href={categorie.cta.lien} className="cta-button">
              {categorie.cta.texte}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceBox;
