import { createAction } from "@reduxjs/toolkit";

const updateCalculatorRequest = createAction(
  "calculator/updateCalculatorRequest"
);
const updateCalculatorSuccess = createAction(
  "calculator/updateCalculatorSuccess"
);
const updateCalculatorError = createAction("calculator/updateCalculatorError");

export {
  updateCalculatorRequest,
  updateCalculatorSuccess,
  updateCalculatorError,
};
