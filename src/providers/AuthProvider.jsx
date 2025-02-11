import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  // for user state
  const [user, setUser] = useState(null);
  // for loading state
  const [loading, setLoading] = useState(true);

  // for create a new user / register
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for login a user / login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for log out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // for google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // for update profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // for save the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        // For Set Token In Cookies
        await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: currentUser?.email },
          { withCredentials: true }
        );
        setLoading(false);
      } else {
        setUser(null);
        // For Clear Token From Cookies
        await axios.post(
          `${import.meta.env.VITE_API_URL}/logout`,
          {},
          {
            withCredentials: true,
          }
        );
        setLoading(false);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);
  // for save the user

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    logOut,
    googleLogin,
    updateUserProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
