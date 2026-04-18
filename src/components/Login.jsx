import React, { useState } from "react";
import Header from "./Header";
import "./Login.css";

const Login = () => {
  const [toggleSinUp, setToggleSignUp] = useState(true);
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Header />

      {/* Background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Center Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <form className="w-full max-w-md bg-black/80 p-8 rounded-lg shadow-2xl text-white form">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-5 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600"
          />
          
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded font-semibold"
          >
            Sign In
          </button>

          {/* Bottom Section */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
            {/* <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label> */}

            <span className="cursor-pointer hover:text-white new-account">
              Create New account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
