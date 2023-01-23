import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./Pages/App";
import EmployeeList from "./Pages/EmployeeList";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
   <Provider store={store}>
      <Router>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/employee-list" element={<EmployeeList />} />

            <Route path="*" element={<h1>404: Not Found</h1>} />
         </Routes>
      </Router>
   </Provider>
);
