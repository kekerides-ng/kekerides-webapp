'use client';

import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [resetMethod, setResetMethod] = useState<"phone" | "email">("phone");

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
            Reset Your Password
          </h2>

          {/* Reset Method Switcher */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setResetMethod("phone")}
              className={`text-sm font-medium ${
                resetMethod === "phone"
                  ? "text-primary-base underline"
                  : "text-gray-600"
              }`}
            >
              Phone Number
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setResetMethod("email")}
              className={`text-sm font-medium ${
                resetMethod === "email"
                  ? "text-primary-base underline"
                  : "text-gray-600"
              }`}
            >
              Email
            </button>
          </div>

          {/* Phone Number Reset */}
          {resetMethod === "phone" && (
            <>
              <label className="block text-sm font-medium text-black mb-1">
                +234
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 bg-[#FFF4EC] rounded-md px-4 py-3 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-base"
              />
              <Button className="w-full bg-primary-base text-white py-3 rounded-md font-semibold shadow transition mb-6">
                Send Reset Code
              </Button>
            </>
          )}

          {/* Email Reset */}
          {resetMethod === "email" && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 bg-[#FFF4EC] rounded-md px-4 py-3 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-base"
              />
              <Button className="w-full bg-primary-base text-white py-3 rounded-md font-semibold shadow transition mb-6">
                Send Reset Link
              </Button>
            </>
          )}
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex justify-center">
          <img alt="KEKE Password Reset Illustration" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;