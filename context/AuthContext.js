"use client";

import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setuser] = useState(null);

  const [loading, setloading] = useState(true);

  // TODO: Auth Handlers
  // Sign Up
  function signup(email, password) {
    return supabase.auth.signup({ email, password });
  }

  // Login
  function login(email, password) {
    return supabase.auth.signIn({ email, password });
  }

  // Logout
  function logout() {
    return supabase.auth.signOut();
  }

  // Update User

  // Reset Password, NEED TO ADD RESET PASSWORD PAGE AND LOGIC

  // Update Password
  const updateUserPassword = async (new_password) => {
    {
      password: new_password;
    }
  };
  // Update Email

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setuser(data?.session?.user || null);
      setloading(false);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      setuser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, supabase, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
