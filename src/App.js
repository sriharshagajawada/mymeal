import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import EnterMobile from "./Pages/EnterMobile";
import EnterMobileError from "./Pages/EnterMobileError";
import EnterMobileSuccess from "./Pages/EnterMobileSuccess";
import EnterOtp from "./Pages/EnterOtp";
import EnterOtpError from "./Pages/EnterOtpError";
import EnterOtpSuccess from "./Pages/EnterOtpSuccess";
import UserLanding from "./Pages/UserLanding";
import "./App.css";
import SelectDate from "./Pages/Selectdate";
import Mealplan from "./mealPlan.js";
import Addon from "./Pages/Addon.js";
import Flexi from "./Pages/Flexiplan.js";

function App() {
  return (
    <center>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<EnterMobile />} />
          <Route exact path="/newuserlanding" element={<SelectDate />} />
          <Route exact path="/mealplan" element={<UserLanding />} />
        </Routes>
      </BrowserRouter> */}
      <Mealplan />
    </center>
  );
}

export default App;
