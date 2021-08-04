import React, { useState } from "react";
import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
import DiaryAddProductFormModal from "../../components/diaryAddProductForm/DiaryAddProductFormModal";
import DiaryProductList from "../../components/diaryProductList/DiaryProductList";
import styles from "./DiaryPage.module.css";
import Calendar from "../../components/diaryDateCalendar/DiaryDateCalendar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import useMedia from "use-media";

const DiaryPage = () => {
  const [state, setState] = useState(false);

  const isWide = useMedia({ minWidth: "768px" });

  const openModal = (event) => {
    setState(true);
  };

  const closeModal = () => {
    setState(false);
  };

  return (
    <section className={styles.diarySection}>
      {state && (
        <div className={styles.section}>
          <DiaryAddProductFormModal closeModal={closeModal}>
            <DiaryAddProductForm closeModal={closeModal} />
          </DiaryAddProductFormModal>
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.dateAndCalendar}>
          <Calendar />
          <img className={styles.calendarImage} src="./calendar 1.svg" alt="" />
          <svg width="18" height="20" className={styles.calendarImage}>
            <use href="./symbol-defs.svg.svg#calendar"></use>
          </svg>
        </div>

        {isWide && <DiaryAddProductForm closeModal={closeModal} />}

        <DiaryProductList openModalProp={openModal} />
      </div>

      <div className={styles.summary}>
        <RightSideBar />
      </div>
    </section>
  );
};

export default DiaryPage;
