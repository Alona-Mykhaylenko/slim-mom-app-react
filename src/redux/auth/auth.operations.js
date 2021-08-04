import axios from "axios";
import NotificationError from "../../components/pnotify/Pnotify";
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./auth.actions";

axios.defaults.baseURL = "https://slimmom-backend.goit.global/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post("auth/register", credentials);

    dispatch(registerSuccess(response.data));
  } catch (error) {
      if (error.response?.status === 409) {
        NotificationError('Пользователь с таким логином уже зарегистрирован');
      }
      dispatch(registerError(error.message));
    };
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("/auth/login", credentials);

    token.set(response.data.accessToken);

    dispatch(loginSuccess(response.data));
    dispatch(getCurrentUser())
  } catch (error) {
    if (error.response?.status === 403) {
      NotificationError("Неверный логин или пароль");
    }
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async (dispatch, getState) => {
  dispatch(logoutRequest());
  try {
    // сохраняем токен
    token.set(getState().auth.token);
    const response = await axios.post("/auth/logout");

    dispatch(logoutSuccess(response.data));
    token.unset();
    window.location.reload();
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};


export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get("/user");
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
