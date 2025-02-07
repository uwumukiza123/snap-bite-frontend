import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:3000/api/auth/reset-password-request`,
        { email }
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error sending reset link");
    }
  };

  return (
    <div>
      <Heading />
      <div className="flex flex-col items-center">
        <div className="text-white text-3xl font-semibold py-9">
          <h1>Reset Password</h1>
        </div>
        <p className="text-[#AAA8AC] text-xs pt-5 pb-5 w-[298px]">
          If you forgot your password. Please enter your email to reset your
          password.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border rounded-[20px] h-12 flex pl-7 w-80 placeholder:text-sm placeholder:font-semibold placeholder:text-gray-300"
            type={email}
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="bg-dark-yellow text-2xl text-white flex justify-center items-center h-12 rounded-lg my-10">
            <button type="submit">Send</button>
          </div>
          {message && <p>{message}</p>}
        </form>
        <Link to="/login" className="text-white text-xs py-10">
          Already a member? <strong>Login</strong> here.
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
