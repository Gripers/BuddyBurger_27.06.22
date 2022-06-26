import React from "react";
import { useTranslation } from "react-i18next";
import { DopFuncsContext } from "../../anyFunc/dopFuncs";
import PhoneInput from "react-phone-input-2";
import "../../styles/logindialogcon.scss";
import { ApiReqContext } from "../../anyFunc/apiReq";

const LoginConfirmDialog = () => {
  const { setLoginConfirmOpen, loginSwitcher } =
    React.useContext(DopFuncsContext);
  const {
    logconsms,
    setLogConSms,
    handleLoginConfirmRequest,
    phone,
    setPhone,
  } = React.useContext(ApiReqContext);
  const { t } = useTranslation();

  return (
    <div className="login-dialog">
      <div className="login-dialog-header">
        <svg
          class="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="24"
          height="24"
          onClick={() => setLoginConfirmOpen(false)}
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
      <div className="login-dialog-body">
        <h3>{t("dialog.login.tosite")}</h3>
        <span style={{ color: "#6e6e6e" }}>{t("dialog.login.number")}</span>
        <div className="login-dialog-body-forms my-4">
          <PhoneInput
            inputClass="shadow-none"
            country="uz"
            prefix=""
            value={phone}
            onChange={setPhone}
          />
          <input
            type="text"
            className="code-inp"
            placeholder={`${t("dialog.login.code")}`}
            value={logconsms}
            onChange={(e) => setLogConSms(e.target.value)}
          />
          <button onClick={handleLoginConfirmRequest}>
            {t("dialog.login.sign")}
          </button>
        </div>
      </div>
      <div className="login-dialog-footer">
        <p>
          {t("dialog.login.acc")}{" "}
          <span style={{ color: "#51267d" }} onClick={loginSwitcher}>
            {t("dialog.login.reg")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginConfirmDialog;
