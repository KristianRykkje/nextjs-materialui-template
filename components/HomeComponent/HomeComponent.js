import React from "react";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <div>
      <p>put you text here</p>
      <p>{t("welcome_text")}</p>
      <Button variant="contained" color="primary">
        Click me!
      </Button>
      <LanguageSelector />
    </div>
  );
}

export default HomeComponent;
