import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layouts/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Activate from "./pages/Activate";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/activate/:uid/:token" element={<Activate />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
