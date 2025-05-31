import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TermsAndCondition from "./pages/TermsAndCondition";
import { PrivacyAndPolicy } from "./pages/PrivacyAndPolicy";
import FlowChart from "./components/FlowChart";
import ReturningUser from "./pages/ReturningUser";
import Page0A from "./pages/Page0A";
import WelcomeScreen from "./pages/WelcomeScreen";
import Page1 from "./pages/Page1";
import Page1A from "./pages/Page1A";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import FAQ from "./pages/FAQ";
import { Page3A } from "./pages/Page3A";
import { ScreeningRecommended } from "./pages/ScreeningRecommended";
import { ScreeningNotRecommended } from "./pages/ScreeningNotRecommended";
import { ScreeningThankYou } from "./pages/ScreeningThankYou";
import { Screen } from "./components/Screen";

function AppRoutes() {
  const location = useLocation();
  const isFlowChart = location.pathname === "/flow-chart";

  return isFlowChart ? (
    <Routes>
      <Route path="/flow-chart" element={<FlowChart />} />
    </Routes>
  ) : (
    <Screen>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/privacy" element={<PrivacyAndPolicy />} />
        <Route path="/returning-user" element={<ReturningUser />} />
        <Route path="/page-0a" element={<Page0A />} />
        <Route path="/page-0b" element={<WelcomeScreen />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-1a" element={<Page1A />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
        <Route path="/page-3a" element={<Page3A />} />
        <Route path="/recommended" element={<ScreeningRecommended />} />
        <Route path="/not-recommended" element={<ScreeningNotRecommended />} />
        <Route path="/thanks" element={<ScreeningThankYou />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Screen>
  );
}

export default AppRoutes;
