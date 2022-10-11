import React, { Suspense } from "react";
import i18n from "i18next";
import Loader from "./Loader";

const LanguageButtons = () => {
  const lngs = [
    { code: "en", nativeName: "English" },
    { code: "es", nativeName: "Español" },
  ];

  return (
    <>
      <Suspense fallback={<Loader />}>
        {lngs.map((lng) => {
          return (
            <button
              className="mun__langbutton"
              key={lng.code}
              type="submit"
              onClick={() => i18n.changeLanguage(lng.code)}
            >
              {lng.nativeName}
            </button>
          );
        })}
      </Suspense>
    </>
  );
};

export default LanguageButtons;
