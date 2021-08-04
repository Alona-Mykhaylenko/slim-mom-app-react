import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import auth from "./auth/auth.reducer";
import {
  ProductsReducer,
  selectedDateReducer,
} from "./products/products.reducer";

import daySummaryInfo from "./dailyrate/dailyrateReducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, auth);

const rootReducer = combineReducers({
  products: ProductsReducer,
  rateInfo: daySummaryInfo,
  selectedDate: selectedDateReducer,
  auth: persistAuthReducer,
});

export default rootReducer;
