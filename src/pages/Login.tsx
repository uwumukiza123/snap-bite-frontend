import { signInUser } from "../redux/actions/authAction";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/ui/Heading";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      signInUser({
        email: formData.email,
        password: formData.password,
      })
    )
      .unwrap()
      .then((user) => {
        console.log("================first", user);
        navigate("/home");
      })
      .catch((error) => {
        console.error("signIn error", error);
      });
  };

  const firebaseConfig = {
    apiKey: "AIzaSyAYkyac1IpKYmM6rlZImo8WA-KECOF6m5Y",
    authDomain: "fir-bdc9a.firebaseapp.com",
    projectId: "fir-bdc9a",
    storageBucket: "fir-bdc9a.firebasestorage.app",
    messagingSenderId: "568983477062",
    appId: "1:568983477062:web:e503ebdb3d8e59d6672347",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [_, setUser] = useState<User | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/home");
    } catch (err) {
      console.error("Google Sign In:", err);
    }
  };

  // const handleGoogleSignOut = async () => {
  //   await signOut(auth);
  //   setUser(null);
  // };

  return (
    <>
      <Heading />
      <div className="flex flex-col items-center">
        <div className="text-white text-3xl font-semibold py-9">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <input
            className="border rounded-[20px] h-12 flex pl-7 w-80 placeholder:text-sm placeholder:font-semibold placeholder:text-gray-300"
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="border rounded-[20px] h-12 flex pl-7 w-80 placeholder:text-sm placeholder:font-semibold placeholder:text-gray-300"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div>
            {/* <p>Keep me signed in</p>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              value={formData.rememberMe}
              /> */}
            <Link to="/reset-password" className="text-white text-xs">
              Forgot password?
            </Link>
          </div>
          <div className="bg-dark-yellow text-2xl text-white flex justify-center items-center h-12 rounded-lg my-10">
            <button type="submit">Login</button>
          </div>
        </form>
        <Link to="/signup" className="text-white text-xs">
          Not a member? <strong>Register</strong> here.
        </Link>
        <div className="bg-white rounded-lg flex px-4 items-center h-12 w-80 my-14">
          <button
            className="text-gray-400 text-base flex gap-4"
            onClick={handleGoogleSignIn}
          >
            <img
              src="../../uploads/google.svg"
              alt="google-icon"
              className="h-7 w-7"
            />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
