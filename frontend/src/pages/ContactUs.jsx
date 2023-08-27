import React from "react";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-meno text-gray-900 mb-4">
            {t("contactUs.contactUsHeader")}
          </h2>
          <p className="mt-2 text-sm text-gray-500 mb-4">
            {t("contactUs.contactUsContent")}
          </p>
          <div className="text-gray-600">
            <p>{t("contactUs.phone")}</p>
            <p>{t("contactUs.email")}</p>
            <p>{t("contactUs.instagram")}</p>
            <p>{t("contactUs.facebook")}</p>
          </div>
        </div>
        <div className="mt-10">
          <form>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <div className="mt-1">
                  <input
                    placeholder={t("contactUs.namePlaceholder")}
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="name"
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-2 border-gray-500 px-2 py-4"
                  />
                </div>
              </div>
              <div>
                <div className="mt-1">
                  <input
                    placeholder={t("contactUs.emailPlaceholder")}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-2 border-gray-500 px-2 py-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-2 border-gray-500 px-2 py-4"
                    placeholder={t("contactUs.phoneNumberPlaceholder")}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-2 border-gray-500 px-2 py-4"
                    placeholder={t("contactUs.messagePlaceholder")}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center text-base font-medium px-8 py-2 shadow-sm text-white bg-blue translate-transform transform hover:scale-105"
              >
                {t("contactUs.submitButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
