"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SignupPaylaod } from "@/apis/auth/types";
import { signup } from "@/apis/auth";

const Signup = () => {
  const router = useRouter();

  // Trigger on signup
  const onSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const repeatPassword = formData.get("repeatPassword") as string;

    if (password !== repeatPassword) {
      alert("Password and confirm password do not match");
      return;
    }

    const username = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const payload: SignupPaylaod = {
      password,
      username,
      email,
    };

    try {
      await signup(payload);
      // Ensure router is ready before pushing
      if (router) {
        router.push("/login");
      }
    } catch (error) {
      console.log("Error during signup:", error);
    }
  };

  return (
    <div>
      {/* ----------------------------------------------------Heading--------------------------------------------------------------- */}
      <h1 className="text-4xl mb-9 text-white font-sans font-normal">
        Connect with your team and bring your creative ideas to Life.
      </h1>
      {/* ----------------------------------------------------SignUp Form--------------------------------------------------------------- */}
      <form onSubmit={onSignup}>
        <div className="grid grid-cols-2 gap-4 mb-9">
          <div>
            <Label className="block text-sm mb-2 text-gray-600">Name</Label>
            <Input name="fullName" type="text" placeholder="Enter full Name" />
          </div>
          <div>
            <Label className="block text-sm mb-2 text-gray-600">Email</Label>
            <Input name="email" type="email" placeholder="Enter Email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5 items-center">
          <div>
            <Label className="block text-sm mb-2 text-gray-600">Password</Label>
            <Input name="password" type="password" placeholder="Password" />
          </div>
          <div>
            <Label className="block text-sm mb-2 text-gray-600">
              Repeat password
            </Label>
            <Input
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
            />
          </div>
        </div>
        {/* ----------------------------------------------------Terms Condition---------------------------------------------------------------------- */}
        <div className="flex items-center mb-4">
          <Checkbox className="border-gray-500" />
          <label className="text-sm text-white mx-2">
            I agree with
            <Link href="/" className="stem-green-500">
              Terms and conditions
            </Link>
          </label>
        </div>
        {/* ----------------------------------------------------Button---------------------------------------------------------------------- */}
        <Button
          variant="outline"
          size="lg"
          className="w-full py-2 rounded-xl bg-stem-green-500 text-black font-semibold hover:bg-black hover:text-white hover:border-none"
        >
          Create free account
        </Button>
      </form>
    </div>
  );
};

export default Signup;
