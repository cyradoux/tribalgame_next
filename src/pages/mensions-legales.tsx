import Layout from "@/components/layout/layout";
import React from "react";

export const metadataLegal = {
    title: "Mentions Légales de Tribal Games",
    description:
      "Consultez les mentions légales de Tribal Games pour tout savoir sur notre entreprise. Adresse, numéro de SIRET et autres informations importantes pour vous garantir une expérience de jeu en toute sécurité et confiance.",
  };

const MensionsLegales = () => {
  return (
    <>
      <Layout metadata={metadataLegal}>
        <h1>Mensions légales</h1>
      </Layout>
    </>
  );
};

export default MensionsLegales;
