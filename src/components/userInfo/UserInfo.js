import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth.operations";
import { getUserName, isAuthenticated } from "../../redux/auth/auth.selectors";

import styles from "./UserInfo.module.css";

const UserInfo = () => {
  const name = useSelector(getUserName);
  const isAuth = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  const onLogOut = (e) => {
    dispatch(logOut());
  };

  return (
    <>
      {isAuth && (
        <div className={styles.userInfo}>
          <span className={styles.userLogin}> {name} </span>
          <button
            type="button"
            className={styles.exitButton}
            onClick={onLogOut}
          >
            Log out
          </button>
        </div>
      )}
    </>
  );
};

export default UserInfo;
