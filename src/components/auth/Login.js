import React, { useRef, useState } from "react";
import Header from "../Header";
import { LOGIN_BG_IMG } from "../../utils/constants";
import { validateEmailPassword } from "../../utils/validateFormData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/reduxStore/userSlice";

const Login = () => {
  const [isSignInForm, setIsSingInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignFrom = () => {
    setIsSingInFrom(!isSignInForm);
  };

  const submitRequest = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const Email = email.current.value;
    const Password = password.current.value;

    const isValid = validateEmailPassword(Email, Password);
    setErrorMessage(isValid);

    if (isValid) return;

    if (!isSignInForm) {
      const FullName = fullName.current.value;
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: FullName,
            photoURL:
              "https://avatars.githubusercontent.com/u/36660485?s=96&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatcher(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browser");
            })
            .catch((error) => {
              // An error occurred
              navigate("/error");
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          // Signed in
          // console.log(user);
          navigate("/browser");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG_IMG} alt="login-bg"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-36 bg-black/75 "
      >
        <h1 className="font-bold text-3xl mb-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            className="w-full p-4 my-2 bg-gray-200 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full p-4 my-2 bg-gray-200 rounded-md"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <input
          ref={password}
          className="w-full p-4 my-2 bg-gray-200 rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-xl">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red-800 rounded-md"
          onClick={submitRequest}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer text-white" onClick={toggleSignFrom}>
          {isSignInForm
            ? "New to Netflix. Sign Up Now"
            : "Already Registered. Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
