import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import { store } from "./utils/Redux/store";
import { Provider } from "react-redux";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Crops from "./Pages/Crops/Crops";
import AddCrop from "./Pages/Crops/AddCrop";
import Sales from "./Pages/Sales/Sales";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/add-crop" element={<AddCrop />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
