import React from "react";
import { useRouter } from "next/router";

function LanguageSelector() {
  const router = useRouter();
  const { locale, locales } = router;

  const changeLanguage = e => {
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };

  return (
    <div>
      <select onChange={changeLanguage} defaultValue={locale}>
        {locales.map(language => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
