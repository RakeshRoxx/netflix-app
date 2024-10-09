import React from "react";
import { LOGIN_NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute w-full px-8 py-3 bg-gradient-to-b from-black z-20">
      <img className="w-56 " src={LOGIN_NETFLIX_LOGO} alt="netflix-logo"></img>
    </div>
  );
};

export default Header;
