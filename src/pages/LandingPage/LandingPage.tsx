import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";
import { Color } from "../../styles/colors";

import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../providers/CustomProvider";

export const LandingPage: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);
  const { showLanguageModal, setShowLanguageModal, setLanguage } =
    useLanguageContext();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [openLanguageDialog, setOpenLanguageDialog] = useState(false);

  const handleCloseLanguageDialog = () => {
    setLanguage(selectedLanguage);
    setOpenLanguageDialog(false);
    setShowLanguageModal(false);
  };

  const handleLanguageOptionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  useEffect(() => {
    setOpenLanguageDialog(showLanguageModal);
  }, [showLanguageModal]);

  return (
    <Box sx={ss.content}>
      <Box sx={ss.profileCardWrapper}>
        <Box sx={ss.title}>{t("landing_page.title")}</Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowLanguageModal(true)}
        >
          {t("landing_page.language_dialog.title")}
        </Button>
      </Box>
        <Dialog
          open={openLanguageDialog}
          onClose={handleCloseLanguageDialog}
          sx={ss.dialog}
          data-testid="landingPage_languageDialog"
        >
          <DialogTitle sx={ss.dialogTitle}>
            {t("landing_page.language_dialog.title")}
          </DialogTitle>
          <DialogContent sx={ss.dialogContent}>
            <FormControl sx={ss.dialogDisclaimer}>
              <RadioGroup
                onChange={handleLanguageOptionsChange}
                value={selectedLanguage}
              >
                <FormControlLabel
                  sx={ss.languageOptions}
                  value="en"
                  control={<Radio />}
                  label={t("landing_page.language_dialog.lang_options.en")}
                />
                <FormControlLabel
                  sx={ss.languageOptions}
                  value="pt_BR"
                  control={<Radio />}
                  label={t("landing_page.language_dialog.lang_options.pt_br")}
                />
                <FormControlLabel
                  sx={ss.languageOptions}
                  value="fr"
                  control={<Radio />}
                  label={t("landing_page.language_dialog.lang_options.fr")}
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions sx={ss.actions}>
            <Button
              sx={ss.dialogButton}
              onClick={handleCloseLanguageDialog}
              data-testid="landingPage_languageDialog_button"
            >
              {t("landing_page.language_dialog.button")}
            </Button>
          </DialogActions>
        </Dialog>
    </Box>
  );
};

const ss = stylesheet({
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileCardWrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "200px",
  },
  dialogContent: {
    padding: "0px 24px",
  },
  title: {
    fontSize: "36px",
    fontWeight: 600,
    textAlign: "center",
    color: Color.Black,
    width: "450px",
    alignSelf: "center",
  },
  dialog: {
    borderRadius: "6px",
    padding: "6px 0",
  },
  dialogTitle: {
    fontSize: "24px",
    fontWeight: 400,
    textAlign: "center",
    color: Color.TextPrimary,
  },
  dialogDisclaimer: {
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "center",
    color: Color.TextLightSecondary,
  },
  dialogButton: {
    width: "100%",
    fontSize: "15px",
    fontWeight: 500,
    padding: "8px 24px",
    borderRadius: "6px",
    background: Color.PrimaryLightMain,
    color: Color.White,
    gap: "8px",
    "&:hover": {
      background: Color.PrimaryLightMain,
    },
  },
  languageOptions: {
    fontSize: "16px",
    fontWeight: 400,
    padding: "0 8px",
    color: Color.TextPrimary,
  },
  actions: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "16px",
  },
});
