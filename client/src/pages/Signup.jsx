import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-h-screen">
      <div className="flex items-center justify-center font-bold text-[30px] mx-[300px] my-[30px] text-center">
        Buying Smurfs ? Hunting Rare accounts ? <br /> Whatever Your LOL Journey
        Holds Buy, Sell, or Just Explore our Tunisian Trusted Basecamp !
      </div>
      <div className="flex justify-between items-center px-[300px]">
        <img src="src/assets/cait.png" alt="" className="h-[700px]" />
        <div className="bg-[rgba(255,255,255,0.2)] rounded-xl p-5 flex flex-col gap-3">
          <div className="font-bold text-4xl">Sign Up</div>
          <div className="flex gap-1">
            <div className="">Already a memeber?</div>
            <a href="/signin" className="text-[#EFEE93]">
              Sign In
            </a>
          </div>
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label className="block  xl:text-lg mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full xl:p-2 p-2  rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2E073F] focus:scale-105 focus:transition-transform text-lg required:"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label className="block  xl:text-lg mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full xl:p-2 p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2E073F] focus:scale-105 focus:transition-transform text-lg"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label
                className="block  xl:text-lg mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full xl:p-2 p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2E073F] focus:scale-105 focus:transition-transform text-lg"
                placeholder="Confirm your password"
              />
            </div>
            <div>
              <label className="block  xl:text-lg mb-2" htmlFor="phone">
                Phone number
              </label>
              <div className="flex">
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  className="w-full xl:p-2 p-2  rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2E073F] focus:scale-105 focus:transition-transform text-lg"
                  placeholder="123456789"
                />
              </div>
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
      </div>
    </div>
  );
}
