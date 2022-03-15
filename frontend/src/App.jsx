import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Auth from "./components/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Auth authNeed={false}>
              <Home />
            </Auth>
          }
        />
        <Route
          path="/login"
          element={
            <Auth authNeed={false}>
              <Login />
            </Auth>
          }
        />
        <Route
          path="/signup"
          element={
            <Auth authNeed={false}>
              <SignUp />
            </Auth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Auth authNeed={true}>
              <Dashboard />
            </Auth>
          }
        />
        <Route path="*" exact={true} element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
