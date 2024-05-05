import React, { ReactNode } from 'react';
import MainMenu from '@/components/layout/main-menu/main-menu';
import Footer from '@/components/layout/footer/footer';
import { Metadata } from 'next';
import Head from 'next/head';

export type LayoutType = {
    metadata: Metadata;
    children: ReactNode;
  };

const Layout = ({ metadata, children }: LayoutType) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Autres balises meta et link si nécessaire */}
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
