import React from "react";
import { Formik, Field, Form } from "formik";
import DailyCaloriesFormValidator from "./DailyCaloriesFormValidator";
import styles from "./DailyCaloriesForm.module.css";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import RightSideBar from "../../components/rightSideBar/RightSideBar";

const DailyCaloriesForm = ({
  onSubmit,
  initialValues,
  enableReinitialize = false,
}) => {
  const isAuth = useSelector(isAuthenticated);

  return (
    <div className={styles.calculator}>
      <div className={!isAuth ? styles.container : styles.container__active}>
        <h1 className={styles.title}>Find out your daily calory norm</h1>
        <div className={styles.inputWrapper}>
          <Formik
            enableReinitialize={enableReinitialize}
            initialValues={initialValues}
            validationSchema={DailyCaloriesFormValidator}
            onSubmit={onSubmit}
            render={({ errors, touched, values }) => (
              <Form className={styles.formContainer}>
                <div className={styles.formWrapper}>
                  <div>
                    <label htmlFor="height" className={styles.formInput}>
                      Height*
                    </label>
                    <Field name="height" type="text" className={styles.field} />

                    {errors.height && touched.height && (
                      <div className={styles.fieldError}>{errors.height}</div>
                    )}
                    <label htmlFor="age" className={styles.formInput}>
                      Age*
                    </label>
                    <Field name="age" type="text" className={styles.field} />

                    {errors.age && touched.age && (
                      <div className={styles.fieldError}>{errors.age}</div>
                    )}
                    <label htmlFor="weight" className={styles.formInput}>
                      Current weight*
                    </label>
                    <Field name="weight" type="text" className={styles.field} />

                    {errors.weight && touched.weight && (
                      <div className={styles.fieldError}>{errors.weight}</div>
                    )}
                  </div>
                  <div className={styles.radioWrapper}>
                    <label htmlFor="desiredWeight" className={styles.formInput}>
                      Target weight*
                    </label>
                    <Field
                      name="desiredWeight"
                      type="text"
                      className={styles.field}
                    />

                    {errors.desiredWeight && touched.desiredWeight && (
                      <div className={styles.fieldError}>
                        {errors.desiredWeight}
                      </div>
                    )}
                    <div id="my-radio-group" className={styles.formInput}>
                      Blood type*
                    </div>
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className={styles.radio}
                    >
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="1"
                          checked={values.bloodType === "1"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>1</small>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="2"
                          checked={values.bloodType === "2"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>2</small>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="3"
                          checked={values.bloodType === "3"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>3</small>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="4"
                          checked={values.bloodType === "4"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>4</small>
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className={styles.button}>
                  Lose weight
                </button>
              </Form>
            )}
          />
        </div>
      </div>
      <div className={!isAuth ? styles.sideBar : styles.sideBar__active}>
        {!isAuth ? <p></p> : <RightSideBar />}
      </div>
    </div>
  );
};

export default DailyCaloriesForm;
