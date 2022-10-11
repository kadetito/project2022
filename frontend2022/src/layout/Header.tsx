import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageButtons from "../components/ui/LanguageButtons";
import { useAuthStore } from "../hooks/useAuthStore";
import { FaSignOutAlt } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const { t } = useTranslation();
  const { startLogout, user } = useAuthStore();
  const avatar = localStorage.getItem("avatar") || "";
  return (
    <div className="row mun__headerglobal">
      <div className="col-12 p-2">
        <div className="d-flex align-items-center">
          <div className="p-2 flex-grow-1 ps-4">
            <h4>{t("Header.txt")}</h4>
            <p className="m-0 p-0">{t("Header.description")}</p>
          </div>
          <div className="me-3">{user.name}</div>
          <div className="me-3">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className="mun__dropdownbutton"
              >
                <img className="mun__avatar" src={avatar} alt={user.name} />
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item href="#/action-4">
                  <LanguageButtons />
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-5">
                  <Button
                    title={t("SignOut.txt")}
                    className="mun__outbutton"
                    onClick={startLogout}
                  >
                    <FaSignOutAlt size="1em" />
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* {t("interpolation_pluralization.txt", { count: 2 })} -{" "} */}
          {/* {t("date", { date: new Date() })} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
