import React from "react";
import kekeImage from "../assets/keke-illustration.png"; // replace with your actual image path
import Image from "next/image";
import Button from "@/components/ui/Button";

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Logo */}
      <figure>
        <Image
          src="/keke-logo.jpg"
          alt="Keke Logo"
          width={240}
          height={10}
          className="object-contain"
        />
      </figure>

      {/* Illustration */}
      {/* <Image
        src={kekeImage}
        alt="KEKE ride illustration"
        className="w-80 max-w-full mb-6"
      /> */}

      {/* Text */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Get rides in your area fast.
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Create an account or log in to continue.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Button className="w-full py-3 text-white font-semibold rounded-md shadow-md transition">
          Sign Up
        </Button>
        <Button className="w-full py-3 bg-[#FFF4EC] text-primary-base hover:bg-gray-200 font-medium rounded-md border border-gray-200 transition">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
