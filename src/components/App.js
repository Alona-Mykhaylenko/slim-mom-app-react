import React, { useEffect } from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";

import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/auth/auth.operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
