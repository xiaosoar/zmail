import React from "react";
import { useTranslation } from "react-i18next";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-6">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {year} XIAOSOAR
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4 mb-2">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              {t("common.privacyPolicy", "隐私政策")}
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              {t("common.terms", "使用条款")}
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              {t("common.about", "关于本站")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
