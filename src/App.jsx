import "./App.css";
import Home from "./pages/home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Driving_schools from "./pages/home/drivingschools/Driving_schools";
import Addschool from "./pages/add-school/Addschool";
import Self_tests from "./pages/self-tests/Self_tests";
import Add_test from "./pages/add-test/Add_test";
import Insuranc_company from "./pages/insurance-company/Insurance_company";
import Add_company from "./pages/add-company/Add_company";
import Add_international_office from "./pages/add-international-office/Add_international_office";
import International_office from "./pages/international-office/International_office";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <BrowserRouter>
      <Topbar />

      <div className='d-flex'>
        <Sidebar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/drivingschools' exact element={<Driving_schools />} />
          <Route path='/Addschool' exact element={<Addschool />} />
          <Route path='/self-test' exact element={<Self_tests />} />
          <Route path='/addtest' exact element={<Add_test />} />
          <Route
            path='/insurancecompany'
            exact
            element={<Insuranc_company />}
          />
          <Route path='/addcompany' exact element={<Add_company />} />
          <Route
            path='/add-inarnational-office'
            exact
            element={<Add_international_office />}
          />
          <Route
            path='/internationl-office'
            exact
            element={<International_office />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
