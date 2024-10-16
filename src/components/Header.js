import { LOGIN_NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/reduxStore/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatcher(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatcher(removeUser());
        navigate("/");
      }
    });
    // onAuthStateChange is returns an function which remove the event listener
    // this function will be called when our component is unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full h-28 px-8 py-3 bg-gradient-to-b from-black z-50 flex justify-between">
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

export default Header;
