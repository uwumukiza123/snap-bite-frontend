import Heading from "../components/ui/Heading";
import { signUpUser } from "../redux/actions/authAction";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      signUpUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      })
    )
      .unwrap()
      .then(() => navigate("/home"))
      .catch((error) => console.error("sign up error:", error));
  };

  return (
    <>
      <Heading />
      <div className="flex flex-col items-center">
        <div className="text-white text-3xl font-semibold py-9">
          <h1>Signup</h1>
        </div>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            className="border rounded-[20px] h-12 flex pl-7 w-80 placeholder:text-sm placeholder:font-semibold placeholder:text-gray-300"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
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

          <input
            className="border rounded-[20px] h-12 flex pl-7 w-80 placeholder:text-sm placeholder:font-semibold placeholder:text-gray-300"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="bg-dark-yellow text-2xl text-white flex justify-center items-center h-12 rounded-lg my-10">
            <button type="submit">Signup</button>
          </div>
        </form>
        <Link to="/login" className="text-white text-sm pb-5">
          Already a member? <strong>Login</strong> here.
        </Link>
      </div>
    </>
  );
};

export default Signup;
