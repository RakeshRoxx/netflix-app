import React, { useState } from "react";
import Header from "../Header";
import { LOGIN_BG_IMG } from "../../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSingInFrom] = useState(true);

  const toggleSignFrom = () => {
    setIsSingInFrom(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG_IMG} alt="login-bg"></img>
      </div>
      <form className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-36 bg-black/75 text-white">
        <h1 className="font-bold text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="w-full p-4 my-2 bg-gray-200 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-full p-4 my-2 bg-gray-200 rounded-md"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <input
          className="w-full p-4 my-2 bg-gray-200 rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-4 w-full bg-red-800 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignFrom}>
          {isSignInForm
            ? "New to Netflix. Sign Up Now"
            : "Already Registered. Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
