import React, { ReactNode } from 'react';
import MainMenu from '@/components/layout/main-menu/main-menu';
import Footer from '@/components/layout/footer/footer';
import Head from 'next/head';

export type LayoutType = {
    metadata: Metadata;
    children: ReactNode;
  };

  type Metadata = {
    title: string;
    description: string;
  };
  
  const metadata: Metadata = {
    title: 'Tribal Games | Accueil',
    description: ' Profitez de nos activités d\'Airsoft, Archery-Tag, Laser Game et Paintball pour allier stratégie et divertissement. Réservez votre place dès maintenant et vivez des moments intenses.',
  };
  

const Layout = ({ metadata, children }: LayoutType) => {
  return (
    <>
      <Head>
        <title>{metadata.title ?? 'Tribal Games | Accueil'}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main>
        <MainMenu />
        {/* Vous pouvez ajouter du contenu ici */}
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
