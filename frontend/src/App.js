import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layouts/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Activate from "./pages/Activate";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProgrammerDetail from "./pages/ProgrammerDetail";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.UI);
  return (
    <div className={theme ? "dark" : ""}>
      <div className="">
        <Router>
          <Header />
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/programmer/:id" element={<ProgrammerDetail />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" exact element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
          <ToastContainer />
        </Router>
      </div>
    </div>
  );
}

export default App;
