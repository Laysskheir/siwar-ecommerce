import React from "react";
import { useTranslation } from "react-i18next";

function TopHeader() {

  const { t } = useTranslation();
  
  return (
    <div className="border-b-2 border-gray-500/50 text-sm font-mono  flex items-center py-2 justify-center bg-blue ">
      <h2 className="text-light">{t('topHeader.message')}</h2>
    </div>
  );
}

export default TopHeader;
