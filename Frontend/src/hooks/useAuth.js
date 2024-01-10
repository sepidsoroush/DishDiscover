import { useState, useEffect } from "react";
import app from "../../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth(app);

  const signUp = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;
      setUser(newUser);
      alert("Check your emails!");
    } catch (error) {
      alert("SignUp failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const signedInUser = userCredential.user;
      setUser(signedInUser);
    } catch (error) {
      alert("SignIn failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await auth.signOut();
      setUser(null);
      setError(null);
    } catch (error) {
      alert("SignOut failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const autoLogin = async () => {
    try {
      await new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            unsubscribe();
            resolve();
          } else {
            reject();
          }
        });
      });
    } catch (error) {
      alert("Auto login failed:", error);
    }
  };

  const clearErrorMessage = () => {
    setError("");
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    clearErrorMessage,
  };
};

export default useAuth;
