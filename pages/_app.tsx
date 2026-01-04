import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

import { useRef, useState } from "react";
import AppContext from "../components/AppContextFolder/AppContext";
// import NEXT_PUBLIC_GA_TRACKING_ID form .env
// global.d.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
// import useRouter

function MyApp({ Component, pageProps }) {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <SpeedInsights />
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default MyApp;
