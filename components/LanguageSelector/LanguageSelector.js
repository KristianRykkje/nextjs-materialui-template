import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function LanguageSelector() {
  const router = useRouter();
  const { locale, locales } = router;

  const changeLanguage = e => {
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };

  const classes = useStyles();

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="language-selector">Age</InputLabel>
        <Select
          native
          value={locale}
          onChange={changeLanguage}
          inputProps={{
            name: "language",
            id: "language-selector",
          }}
        >
          {locales.map(language => (
            <option key={language} value={language}>
              {language.toUpperCase()}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default LanguageSelector;
