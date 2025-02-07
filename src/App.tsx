import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <>
              <title>Landing</title>
              <Landing />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <title>Home</title>
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <title>Login</title>
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <title>Signup</title>
              <Signup />
            </>
          }
        />
        <Route
          path="/reset-password"
          element={
            <>
              <title>Signup</title>
              <ForgotPassword />
            </>
          }
        />
        {/* <Route
          path="/resetPassword"
          element={
            <>
              <title>reset password</title>
              <ResetPassword />
            </>
          }
        /> */}
        {/* <Route
          path="/product details"
          element={
            <>
              <title>product detail</title>
              <ProductDetails />
            </>
          }
        /> */}
        {/* <Route
          path="/cart"
          element={
            <>
              <title>Cart</title>
              <Cart />
            </>
          }
        /> */}
        {/* <Route path="*">
          <Route
            element={
              <>
                <title>Not found</title>
                <NotFound />
              </>
            }
          /> */}
        {/* </Route> */}
        {/* <Route
          path="/logout"
          element={
            <>
              <title>logout</title>
              <Logout />
            </>
          }
        /> */}
      </Routes>
    </div>
  );
};

export default App;
