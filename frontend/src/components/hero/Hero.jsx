import React from "react";
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="text-white flex flex-col items-center gap-8 m-16 p-8">
      <h1 className="text-4xl">{t('hero.title')}</h1>
      <p className="text-gray-400 px-8 text-center">
        {t('hero.description')}
      </p>
    </div>
  );
}

export default Hero;
