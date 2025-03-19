import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import { store } from "./utils/Redux/store";
import { Provider } from "react-redux";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Crops from "./Pages/Crops/Crops";

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
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
