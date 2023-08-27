import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

function AboutUs() {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <div className="bg-white py-16 px-8 sm:px-6 lg:px-16">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-meno text-gray-900 mb-4">
            {t("aboutUs.aboutUsHeader")} {/* Use t function here */}
          </h2>
          <p className="mt-2 text-gray-500 mb-4">
            {t("aboutUs.aboutUsContent")} {/* Use t function here */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
