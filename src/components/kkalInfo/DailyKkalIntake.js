import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DailyKkalIntake.module.css";

const DailyKkalIntake = ({ dailyRate, notAllowedProducts }) => {
  const [find, setFind] = useState("");

  const onHandleChange = (event) => {
    setFind(event.target.value);
  };
  const filterNotAllowedProducts = () => {
    console.log(filterNotAllowedProducts);
    return notAllowedProducts
      ?.slice(0, 20)
      .filter((filteredProduct) =>
        filteredProduct.toLowerCase().includes(find)
      );
  };
  return (
    <div className={styles.moduleDailyNormMainContainer}>
      <div className={styles.moduleDailyNormContainer}>
        <h3 className={styles.moduleDailyNormTitle}>
          Your recommended daily <br /> calory norm is
        </h3>
        <div className={styles.moduleDailyNormValueCcal}>
          {Math.round(dailyRate)}
          <span className={styles.moduleDailyNormCcal}>ккал</span>
        </div>
      </div>
      <div className={styles.moduleNotSuitableProductsContainer}>
        <input
          onChange={onHandleChange}
          value={find}
          type="text"
          className={styles.moduleNotSuitableProductsInput}
        />
        <div className={styles.moduleNotSuitableProductsTitle}>
          Products to exclude
        </div>
        <ol className={styles.moduleNotSuitableProductsList}>
          {filterNotAllowedProducts()?.map((product, id) => (
            <li key={id} className={styles.moduleNotSuitableProductsItem}>
              {product}
            </li>
          ))}
        </ol>
      </div>
      <Link
        type="button"
        to="/login"
        className={styles.moduleNotSuitableProductsButton}
      >
        <span className={styles.moduleNotSuitableProductsButtonText}>
          Lose weight
        </span>
      </Link>
    </div>
  );
};

export default DailyKkalIntake;
