import axios from "axios";
import { getUserId } from "../auth/auth.selectors";
import {
  updateCalculatorError,
  updateCalculatorRequest,
  updateCalculatorSuccess,
} from "./calculator.actions";

const BASE_URL = "https://slimmom-backend.goit.global";

const transformString = (obj) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = Number(value);
  }
  return newObj;
};

export const updateCalculator = (values) => async (dispatch, getState) => {
  dispatch(updateCalculatorRequest());
  try {
    const data = transformString(values);
    const userId = getUserId(getState());
    const res = await axios.post(`${BASE_URL}/daily-rate/${userId}`, data);

    dispatch(updateCalculatorSuccess(res.data));
  } catch (error) {
    dispatch(updateCalculatorError());
  }
};
