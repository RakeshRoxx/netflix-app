import { signOut } from "firebase/auth";
import { LOGIN_NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderMain = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-8 py-3 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-56 " src={LOGIN_NETFLIX_LOGO} alt="netflix-logo"></img>
      <div className="flex items-center">
        {user && (
          <>
            <img
              alt="userIcon"
              className="w-8 h-8 mx-1 rounded-md"
              src={user?.photoURL !== null ? user?.photoURL : USER_ICON}
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              (Sign Out)
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
