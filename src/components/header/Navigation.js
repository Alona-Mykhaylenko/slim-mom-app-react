import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import UserInfo from "../userInfo/UserInfo";
import styles from "./Header.module.css";
import useMedia from "use-media";

const Navigation = ({ isModalOpen, setModalState }) => {
  const authToken = useSelector(isAuthenticated);
  const isWide = useMedia({ minWidth: "768px" });

  return (
    <nav className={styles.headerNavigation}>
      <ul className={styles.listLogo}>
        <li>
          <NavLink className={styles.link} to="/diary">
            <svg className={styles.logo}>
              <use href="../../img/svg/sprite.svg#icon-logo"></use>
            </svg>
          </NavLink>
        </li>

        <li className={styles.text}>
          <NavLink to="/diary">
            <svg className={styles.text}>
              <use href="../../img/svg/sprite.svg#icon-SlimMom">LOGO</use>
            </svg>
          </NavLink>
        </li>
      </ul>

      {!authToken && (
        <ul className={styles.regisrationList}>
          <li className={styles.regisrationListItem}>
            <NavLink
              className={styles.link}
              activeClassName={styles.linkActive}
              to="/login"
            >
              SIGN IN
            </NavLink>
          </li>
          <li className={styles.regisrationListItem}>
            <NavLink
              className={styles.link}
              activeClassName={styles.linkActive}
              to="/registration"
            >
              REGISTRATION
            </NavLink>
          </li>
        </ul>
      )}

      {authToken && (
        <>
          <ul className={styles.regisrationList}>
            <li className={styles.navigationListItem}>
              <NavLink
                className={styles.link}
                activeClassName={styles.linkActive}
                to="/diary"
              >
                DIARY
              </NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink
                className={styles.link}
                activeClassName={styles.linkActive}
                to="/calculator"
              >
                CALCULATOR
              </NavLink>
            </li>
          </ul>
        </>
      )}

      {isWide && (
        <div className={styles.userInfoNav}>
          <UserInfo />
        </div>
      )}

      {!isModalOpen && authToken && (
        <svg className={styles.burgerBtn} onClick={setModalState}>
          <use href="../../img/svg/sprite.svg#">LOGO</use>
        </svg>
      )}

      {isModalOpen && (
        <svg className={styles.burgerClose} onClick={setModalState}>
          <use href="../../img/svg/sprite.svg#">LOGO</use>
        </svg>
      )}
    </nav>
  );
};

export default Navigation;
