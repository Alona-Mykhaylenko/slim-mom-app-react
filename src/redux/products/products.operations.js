import axios from "axios";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  getDayInfoRequest,
  getDayInfoSuccess,
  getDayInfoError,
} from "./products.actions";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const addProduct = (date, productId, weight) => (dispatch) => {
  const product = { date, productId, weight };

  dispatch(addProductRequest());

  axios
    .post("/day", product)
    .then((response) => dispatch(addProductSuccess(response.data)))
    .catch((error) => dispatch(addProductError(error.message)));
};

const deleteProduct = (dayId, eatenProductId) => (dispatch) => {
  dispatch(deleteProductRequest());

  const deletedProduct = { dayId, eatenProductId };

  axios
    .delete(`/day`, { data: deletedProduct })
    .then((response) =>
      dispatch(deleteProductSuccess({ ...deletedProduct, ...response.data }))
    )
    .catch((error) => dispatch(deleteProductError(error.message)));
};

const getDayInfo = (date) => (dispatch, getState) => {
  dispatch(getDayInfoRequest());

  axios
    .post(`/day/info`, { date })
    .then((response) => {
      dispatch(getDayInfoSuccess(response.data));
    })

    .catch((error) => dispatch(getDayInfoError(error.message)));
};

export { addProduct, deleteProduct, getDayInfo };
