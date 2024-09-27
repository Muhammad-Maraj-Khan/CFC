import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth/AuthLayout";
import HomePage from "views/home/PageContent";
import AboutUsPage from "views/about-us/PageContent";
import ClimateFinancePage from "views/climate-finance/PageContent";
import CustomSolutionsPage from "views/government/PageContent";
import OurTeamPage from "views/our-team/PageContent";
import PricingPage from "views/pricing/PageContent";
import ContactUsPage from "views/contact-us/PageContent";
import RequestADemoPage from "views/request-a-demo/PageContent";
import FaqsPage from "views/faqs/PageContent";
import TeachingAndEductionPage from "views/teaching-and-education/PageContent";
import ProcurementPage from "views/procurement/PageContent";
import DisasterPage from "views/disaster-preparedness-and-response/PageContent";
import SuccessStoriesPage from "views/success-stories/PageContent";
import OliverBarrettPage from "views/oliver-barrett/PageContent";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute
          path="/"
          component={HomePage}
          fullLayout
          exact={true}
          showGreenHeader={true}
          headerTheme="green"
        />
        <AuthRoute
          path="/about-us"
          component={AboutUsPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        <AuthRoute
          path="/our-team"
          component={OurTeamPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        <AuthRoute
          path="/climate-finance"
          component={ClimateFinancePage}
          fullLayout
          exact={true}
          showLightGreenHeader={true}
        />
        {/* <AuthRoute
          path="/custom-solution"
          component={CustomSolutionsPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        /> */}
        <AuthRoute
          path="/pricing-logic"
          component={PricingPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        <AuthRoute
          path="/contact-us"
          component={ContactUsPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        <AuthRoute
          path="/request-a-demo"
          component={RequestADemoPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        <AuthRoute
          path="/faqs"
          component={FaqsPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        {/* <AuthRoute
          path="/teaching-and-eduction"
          component={TeachingAndEductionPage}
          fullLayout
          exact={true}
          showGreenHeader={true}
          headerTheme="blue"
        /> */}
        <AuthRoute
          path="/procurement"
          component={ProcurementPage}
          fullLayout
          exact={true}
          showGreenHeader={true}
          headerTheme="seagreen"
        />
        <AuthRoute
          path="/disaster"
          component={DisasterPage}
          fullLayout
          exact={true}
          showGreenHeader={true}
          headerTheme="brown"
        />
        <AuthRoute
          path="/success-stories"
          component={SuccessStoriesPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        <AuthRoute
          path="/oliver-barrett"
          component={OliverBarrettPage}
          fullLayout
          exact={true}
          showWhiteHeader={true}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

const AuthRoute = ({
  component: Component,
  showGreenHeader,
  showWhiteHeader,
  showLightGreenHeader,
  headerTheme,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(props) => (
        <AuthLayout
          showGreenHeader={showGreenHeader}
          showWhiteHeader={showWhiteHeader}
          showLightGreenHeader={showLightGreenHeader}
          pathname={props.location.pathname}
          headerTheme={headerTheme}
        >
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
};
