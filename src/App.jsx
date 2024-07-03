import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/GSAP-Documentation/gsapto" element={<GsapTo />} />
          <Route path="/GSAP-Documentation/gsapfrom" element={<GsapFrom />} />
          <Route path="/GSAP-Documentation/gsapfromto" element={<GsapFromTo />} />
          <Route path="/GSAP-Documentation/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/GSAP-Documentation/gsapstagger" element={<GsapStagger />} />
          <Route path="/GSAP-Documentation/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/GSAP-Documentation/gsaptext" element={<GsapText />} />
          <Route path="/GSAP-Documentation" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
