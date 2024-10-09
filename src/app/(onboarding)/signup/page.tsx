import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
const Signup = () => {
  return (
    <div>
      {/* ----------------------------------------------------Heading--------------------------------------------------------------- */}
      <h1 className="text-4xl mb-9 text-white font-sans font-normal">
        Connect with your team and bring your creative ideas to life.
      </h1>
      {/* ----------------------------------------------------SignUp Form--------------------------------------------------------------- */}
      <form>
        <div className="grid grid-cols-2 gap-4 mb-9">
          <div>
            <Label className="block text-sm mb-2 text-gray-600">
              First name
            </Label>
            <Input type="text" placeholder="First Name" />
          </div>
          <div>
            <Label className="block text-sm mb-2 text-gray-600">
              Last name
            </Label>
            <Input type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5 items-center">
          <div>
            <Label className="block text-sm mb-2 text-gray-600">Password</Label>
            <Input type="password" placeholder="Password" />
          </div>
          <div>
            <Label className="block text-sm mb-2 text-gray-600">
              Repeat password
            </Label>
            <Input type="password" placeholder="Repeat password" />
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
