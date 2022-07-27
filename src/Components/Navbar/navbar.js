import React, { useEffect, useContext, Suspense, lazy } from "react";
import Navbar from "./nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";

import Home from "../../Pages/Home/home";
import Games from "../../Pages/Games/games";
import PageNotFound from "../../Pages/404/404";

import Register from "../../Pages/Register/register";
import RegorImp from "../../Pages/Register/Anonymous/regorimp";
import GenerateSeed from "../../Pages/Register/Anonymous/generateseed";
import ImportSeed from "../../Pages/Register/Anonymous/importseed";
import CreatePassword from "../../Pages/Register/Anonymous/createpassword";
import Login from "../../Pages/Register/Anonymous/login";

import Roulette from "../../Pages/Games/CasinoGames/Roulette/Roulette";
import CaribbeanStudPoker from "../../Pages/Games/CasinoGames/CaribbeanStudPoker/CaribbeanStudPoker";

import PrivacyPolicy from "../../Pages/TermsAndPolicy/pp";
import TermsOfServices from "../../Pages/TermsAndPolicy/tos";

import UserAccount from "../../Pages/User/Account/account";

import AuthContext from "../Authentication/Auth";

const Footer = lazy(() => import("../Footer/footer"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Routes() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="pages">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Games" component={Games} />
            <Route path="/Register" component={Register} />
            <Route path="/RegisterOrImport">
              {authContext.user.isLogged ? (
                <RegorImp />
              ) : (
                <Redirect to="/Register" />
              )}
            </Route>
            <Route path="/GenerateSeed">
              {authContext.user.isLogged ? (
                <GenerateSeed />
              ) : (
                <Redirect to="/Register" />
              )}
            </Route>
            <Route path="/ImportSeed">
              {authContext.user.isLogged ? (
                <ImportSeed />
              ) : (
                <Redirect to="/Register" />
              )}
            </Route>
            <Route path="/CreatePassword" component={CreatePassword} />
            <Route path="/Login" component={Login} />

            <Route path="/Roulette">
              {authContext.user.isAuth ? (
                <Roulette />
              ) : (
                <Redirect to="/Register" />
              )}
            </Route>
            <Route path="/CaribbeanStudPoker">
              {authContext.user.isAuth ? (
                <CaribbeanStudPoker />
              ) : (
                <Redirect to="/Register" />
              )}
            </Route>
            <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/TermsOfServices" component={TermsOfServices} />
            <Route path="/UserAccount">
              {authContext.user.isAuth ? (
                <UserAccount />
              ) : (
                <Redirect to="/Register" />
              )}
            </Route>
            <Route render={() => <PageNotFound />} />
          </Switch>
        </div>
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default Routes;
