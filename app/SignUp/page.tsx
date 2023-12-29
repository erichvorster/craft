"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Cap from "../../public/cap.jpg";
import { Mail } from "lucide-react";

import Google from "../../public/google.svg";
import Facebook from "../../public/facebook.svg";
import Apple from "../../public/apple.svg";
import { Separator } from "@/components/ui/separator";

const page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // In a real application, replace console.log with your sign-up logic
    console.log("Sign Up:", { email, password });
    signIn("cognito");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className=" w-full relative">
        <div className=" w-full h-24 bg-gradient-to-b from-background from-3s0% to-transparent absolute top-0"></div>
        <Image src={Cap} alt="Capital Carft " />
        <div className=" w-full h-24 bg-gradient-to-t from-background to-transparent absolute bottom-0"></div>
      </div>
      <div className="pt-6 px-4">
        <h5 className="text-3xl font-bold">
          Sign up or login in, no <br />
          password required
        </h5>
        <div className="mt-8">
          <button className="flex items-center justify-center  p-3 w-full bg-popover  text-background rounded-lg">
            <Mail className="mr-2 text-background" /> Continue with email
          </button>
          <button className="flex items-center justify-center mt-2 p-3 w-full text-foreground bg-[#4285F4]  text-background rounded-lg">
            <Image src={Google} alt="Google" className="h-6 w-6 mr-2" />{" "}
            Continue with Google
          </button>
          <button className="flex items-center justify-center mt-2 p-3 w-full text-foreground bg-[#4267B2]  text-background rounded-lg">
            <Image src={Facebook} alt="Google" className="h-6 w-6 mr-2" />{" "}
            Continue with Facebook
          </button>
          <button className="flex items-center justify-center mt-2 p-3 w-full text-foreground bg-background border border-foreground text-background rounded-lg">
            <Image src={Apple} alt="Google" className="h-6 w-6 mr-2" /> Continue
            with Apple
          </button>
        </div>
        <Separator className="bg-card-foreground mt-16" />
        <p className="text-center text-xs text-card-foreground mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          placeat quidem natus sapiente recusandae, maxime cum veritatis
          aspernatur impedit consequuntur!
        </p>
      </div>
      {/* <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default page;
