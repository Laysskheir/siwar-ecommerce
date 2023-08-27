import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '../../components/sliders/Slider';
import Products from '../../components/products/Products';
import Collection from '../../components/collections/Collection';
import Hero from '../../components/hero/Hero';
import Section from '../../components/section/Section ';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-blue text-white">
      <Slider />
      <Hero />
      <h2 className="mx-4 mb-4 mt-16 flex items-center justify-center text-2xl font-light tracking-tight text-white border-4 border-x-blue rounded-sm p-4">
        {t('home.collection')}
      </h2>
      <Collection />
      <h2 className="mx-4 flex items-center justify-center text-2xl font-light tracking-tight text-white border-4 border-x-blue rounded-sm p-4">
        {t('home.featuredProduct')}
      </h2>
      <Products />
      <div className="bg-white text-blue">
        <Section />
      </div>
    </div>
  );
}

export default Home;
