import React, { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-h-screen">
      <div className="flex items-center justify-center font-bold text-[30px] mx-[300px] mt-[50px] text-center">
        Welcome to the Ultimate LOL Account Marketplace Secure Deals, Instant
        Access!
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-[600px] bg-[rgba(255,255,255,0.2)] rounded-xl p-5 flex flex-col gap-3">
          <div className="font-bold text-4xl">Sign In</div>
          <div className="flex gap-1">
            <div className="">New user?</div>
            <a href="/signup" className="text-[#EFEE93]">
              Create an account
            </a>
          </div>
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label className="block  xl:text-lg mb-2" htmlFor="Email">
                Email
              </label>
              <input
                type="text"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[500px] xl:p-3 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:transition-transform text-lg"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label className="block xl:text-lg mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-[500px] xl:p-3 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:transition-transform text-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="xl:py-3 xl:px-4 py-2 px-5 border rounded-xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 xl:text-lg"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex gap-1">
            <span>By Loggin In you fully Agree to our </span>
            <a href="/terms#privacy">Privacy Policy</a>
            <span>and</span>
            <a href="/terms#terms">Terms Of Service</a>
          </div>
        </div>

        <img src="src/assets/vi.png" alt="" className="h-[750px]" />
      </div>
    </div>
  );
}
