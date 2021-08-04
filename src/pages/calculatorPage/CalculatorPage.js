import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import { getUserData, isAuthenticated } from "../../redux/auth/auth.selectors";
import { useEffect } from "react";
import { getDayInfo } from "../../redux/products/products.operations";
import { updateCalculator } from "../../redux/calculator/calculator.operations";
import { getCurrentUser } from "../../redux/auth/auth.operations";

const CalculatorPage = () => {

  const userData = useSelector(getUserData);
  const token = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const [startDate] = useState(new Date());

  useEffect(() => {
    dispatch(getDayInfo(startDate.toISOString().slice(0, 10)));
  }, [dispatch, startDate]);

  const onSubmit = (values) => {
    dispatch(updateCalculator(values));
    setTimeout(() => dispatch(getCurrentUser()), 1500);
  };

  return (
    <>
      <DailyCaloriesForm
        onSubmit={onSubmit}
        enableReinitialize
        initialValues={{
          height: !!userData?.height ? userData?.height : "",
          age: !!userData?.age ? userData?.age : "",
          weight: !!userData?.weight ? userData?.weight : "",
          desiredWeight: !!userData?.desiredWeight ? userData?.desiredWeight : "",
          bloodType: !!userData?.bloodType.toString() ? userData?.bloodType.toString() : "",
        }}
      />
    </>
  );
};

export default CalculatorPage;
