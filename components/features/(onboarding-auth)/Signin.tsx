'use client';

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Signin = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Form */}
        <div className="w-full">
          {/* Logo */}
          <figure className="flex justify-center">
            <Image
              src="/keke-logo.jpg"
              alt="KEKE Logo"
              width={200}
              height={200}
            />
          </figure>
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">
            Welcome Back
          </h2>

          {/* Login Method Switcher */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setLoginMethod("phone")}
              className={`text-sm font-medium ${
                loginMethod === "phone"
                  ? "text-primary-base underline"
                  : "text-gray-600"
              }`}
            >
              Phone Number
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setLoginMethod("email")}
              className={`text-sm font-medium ${
                loginMethod === "email"
                  ? "text-primary-base underline"
                  : "text-gray-600"
              }`}
            >
              Email
            </button>
          </div>

          {/* Phone Number Login */}
          {loginMethod === "phone" && (
            <>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 bg-[#FFF4EC] rounded-md px-4 py-3 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-base"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 bg-[#FFF4EC] rounded-md px-4 py-3 mb-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-base"
              />
              <div className=" mb-6">
                <Link href="#" className="text-sm hover:underline text-black">
                  Forgot Password?
                </Link>
              </div>
              <Button className="w-full bg-primary-base text-white py-3 rounded-md font-semibold shadow transition mb-6">
                Sign In
              </Button>
            </>
          )}

          {/* Email Login */}
          {loginMethod === "email" && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 bg-[#FFF4EC] rounded-md px-4 py-3 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-base"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 bg-[#FFF4EC] rounded-md px-4 py-3 mb-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-base"
              />
              <div className="mb-6">
                <Link href="#" className="text-sm hover:underline text-black">
                  Forgot Password?
                </Link>
              </div>
              <Button className="w-full bg-primary-base text-white py-3 rounded-md font-semibold shadow transition mb-6">
                Sign In
              </Button>
            </>
          )}

          {/* Google Sign In */}
          <p className="text-black mb-3">Or Sign In with Google</p>

          <button className="w-full border border-gray-300 bg-[#FFF4EC] text-primary-base font-bold cursor-pointer py-3 rounded-md flex items-center justify-center gap-3 hover:bg-gray-100 transition">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Google
          </button>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex justify-center">
          <img alt="KEKE Signin Illustration" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default Signin;