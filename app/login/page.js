"use client";

import { login, signup } from "./actions";
import { useState } from "react";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">
          {isSignUp ? "Create Account" : "Login"}
        </h1>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              formAction={isSignUp ? signup : login}
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isSignUp ? "Sign Up" : "Log In"}
            </button>

            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-blue-600 hover:underline self-center"
            >
              {isSignUp
                ? "Already have an account? Log in"
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
