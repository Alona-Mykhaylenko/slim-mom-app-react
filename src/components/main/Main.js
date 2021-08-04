import React, { Suspense } from "react";

import { Switch } from "react-router";
import { lazy } from "react";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
import AppLoader from "../loader/Loader";
import NotFound from "../../pages/notFound/NotFound";
import { Route } from "react-router-dom";

const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/registrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/loginPage/LoginPage"));
const CalculatorPage = lazy(() =>
  import("../../pages/calculatorPage/CalculatorPage")
);
const DiaryPage = lazy(() => import("../../pages/diaryPage/DiaryPage"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<AppLoader />}>
        <Switch>
          <PublicRoutes
            exact
            path="/"
            component={MainPage}
            restricted
            redirectTo="/calculator"
          />
          <PublicRoutes
            exact
            path="/registration"
            component={RegistrationPage}
            redirectTo="/login"
            restricted
          />
          <PublicRoutes
            exact
            path="/login"
            component={LoginPage}
            redirectTo="/calculator"
            restricted
          />

          <PrivateRoutes
            path="/calculator"
            component={CalculatorPage}
            redirectTo="/"
          />

          <PrivateRoutes path="/diary" component={DiaryPage} redirectTo="/" />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
