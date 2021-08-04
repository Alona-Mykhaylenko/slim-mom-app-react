import { createAction } from "@reduxjs/toolkit";

const addProductRequest = createAction("products/addProductRequest");
const addProductSuccess = createAction("products/addProductSuccess");
const addProductError = createAction("products/addProductError");

const deleteProductRequest = createAction("products/deleteContactRequest");
const deleteProductSuccess = createAction("products/deleteContactSuccess");
const deleteProductError = createAction("products/deleteContactError");

const getSelectedDay = createAction("getSelectedDay");

const getDayInfoRequest = createAction("products/getDayInfoRequest");
const getDayInfoSuccess = createAction("products/getDayInfoSuccess");
const getDayInfoError = createAction("products/getDayInfoError");

export {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  getSelectedDay,
  getDayInfoRequest,
  getDayInfoSuccess,
  getDayInfoError,
};
