import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 Not Found</h2>
      <p className={styles.text}>Whoops... Something went wrong!</p>
    </div>
  );
};

export default NotFound;
