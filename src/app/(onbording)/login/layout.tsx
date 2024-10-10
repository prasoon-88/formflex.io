
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return <>
  <div className="bg-noble-black-800 grid h-screen text-white grid-cols-12">
   <div className="col-span-12 md:col-span-8  lg:col-span-6 justify-items-center self-center" > <div className="flex items-center justify-center flex-col  "> {children}</div></div>
    <div className=" hidden md:inline  bg-green-400 rounded lg:col-span-6 md:col-span-4">
    </div>
  </div>
  
 </>;
}
