import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function TopFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue text-white py-16 md:flex md:items-center md:justify-between px-8  border-b-2 border-gray-500/50">
      <div id="info" className="md:w-1/2">
        <h1 className="text-xl font-bold mb-4">{t('topFooter.infoTitle')}</h1>
        <div className="text-gray-400 space-y-2">
          <p>{t('topFooter.shippingPolicy')}</p>
          <p>{t('topFooter.refundPolicy')}</p>
          <p>{t('topFooter.termsCondition')}</p>
        </div>
      </div>

      <div id="about" className="md:w-1/2 mt-6 md:mt-0">
        <h1 className="text-xl font-bold mb-4">{t('topFooter.aboutTitle')}</h1>
        <p className="text-gray-400">
          {t('topFooter.aboutContent')}
        </p>
        <div className="flex items-center justify-end gap-4 text-2xl p-4">
          <Link to={`/`}>
            <BiLogoFacebookSquare />
          </Link>

          <Link to={`/`}>
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default TopFooter;
