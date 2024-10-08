import React from "react";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";


const Login = () => {
  return <div className="bg-zinc-800 text-white text-center grid lg:grid-cols-2 md:grid-cols-1 gap-4 ">
    <div className="bg-purple-300 flex flex-col">
      <div>1</div>
      <div className="bg-zinc-400">
       <div className="gap-6">
       <h1>Let's get <span className="day-blue-500">creative</span></h1>
       <p className="text-black">creating a login page</p>
       </div>
       <div className="my-4 ">
        <Input type="text" placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>

       </div>
       <div className="flex justify-center  items-center">
        <Checkbox id='terms'/>
        <label htmlFor="terms" className="mx-4 cursor:pointer">Remember me</label>
        <Link href='#'>Forget Password</Link>
       </div>
      </div>
      <div>1
  
      </div>

    </div>
    <div className="bg-purple-300">Image</div>
  </div>;
};

export default Login;
