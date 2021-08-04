import { createReducer } from "@reduxjs/toolkit";
import {
  addProductSuccess,
  deleteProductSuccess,
  getSelectedDay,
  getDayInfoSuccess,
} from "./products.actions";

const ProductsReducer = createReducer(
  { id: "", eatenProducts: [] },
  {
    [addProductSuccess]: (state, { payload }) => {
      const eatenProducts = [...state.eatenProducts, payload.eatenProduct];

      if ("newDay" in payload) {
        return {
          ...state,
          id: payload.newDay.id,
          eatenProducts,
        };
      }
      return {
        ...state,
        eatenProducts,
      };
    },

    [deleteProductSuccess]: (state, { payload }) => ({
      ...state,
      eatenProducts: state.eatenProducts.filter(
        (product) => product.id !== payload.eatenProductId
      ),
    }),

    [getDayInfoSuccess]: (state, { payload }) => {
      if (typeof payload.eatenProducts === "undefined") {
        return {...state, eatenProducts: []};
      }

      return {
        ...state,
        eatenProducts: payload.eatenProducts,
        id: payload.id,
      };
    },
  }
);

const selectedDateReducer = createReducer([], {
  [getSelectedDay]: (state, { payload }) => [payload],
});

const getDayInfoReducer = createReducer(
  { id: "", eatenProducts: [] },
  {
    [getDayInfoSuccess]: (state, { payload }) => payload,
  }
);

export { ProductsReducer, selectedDateReducer, getDayInfoReducer };
