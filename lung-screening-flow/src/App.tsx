import type { ReactNode } from "react";
import { useAppSelector } from "./hooks/redux";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page3 from "./pages/Page3";
import FAQ from "./pages/FAQ";
import { Page3A } from "./pages/Page3A";
import { ScreeningRecommended } from "./pages/ScreeningRecommended";
import { ScreeningNotRecommended } from "./pages/ScreeningNotRecommended";
import { ScreeningThankYou } from "./pages/ScreeningThankYou";
import { Screen } from "./components/Screen";

function App() {
  const { pageType } = useAppSelector((state) => state.page);
  const renderPage: Record<string, ReactNode> = {
    home: <HomePage />,
    TERM_AND_CONDITION: <TermsAndCondition />,
    PRIVACY_AND_POLICY: <PrivacyAndPolicy />,
    "Page-0": <ReturningUser />,
    "Page-0A": <Page0A />,
    "Page-0B": <WelcomeScreen />,
    "Page-1": <Page1 />,
    "Page-1A": <Page1A />,
    "Page-2": <Page2 />,
    "Page-3": <Page3 />,
    "Page-3A": <Page3A />,
    RECOMMENDED: <ScreeningRecommended />,
    NOT_RECOMMENDED: <ScreeningNotRecommended />,
    THANKS_SCREEN: <ScreeningThankYou />,
    FAQ: <FAQ />,
  };

  return (
    <>
      {pageType === "FLOW_CHART" ? (
        <FlowChart />
      ) : (
        <Screen>{renderPage[pageType]}</Screen>
      )}
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
