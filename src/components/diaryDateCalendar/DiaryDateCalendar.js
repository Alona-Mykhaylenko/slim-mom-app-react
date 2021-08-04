import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../img/svg/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DiaryDateCalendar.module.css";
import { useDispatch } from "react-redux";
import { getSelectedDay } from "../../redux/products/products.actions";
import { getDayInfo } from "../../redux/products/products.operations";

const Calendar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(getSelectedDay(startDate.toISOString().slice(0, 10)));
    dispatch(getDayInfo(startDate.toISOString().slice(0, 10)));
  }, [dispatch, startDate]);

  return (
    <div className={styles.сalendar}>
      <label>
        <DatePicker
          className={styles.datePicker}
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          onChange={(date) => setStartDate(date)}
        />

        <CalendarLogo className={styles.datePickerLogo} />
      </label>
    </div>
  );
};

export default Calendar;
