/* eslint-disable @next/next/no-img-element */
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-noble-black-800 grid w-full h-full h-screen text-white grid-cols-12">
        <div className="col-span-12 md:col-span-8  lg:col-span-6 justify-items-center self-center">
          <div className="flex  flex-col justify-center items-center ">
            <div>
              <div className="flex w-full justify-between items-center my-4">
                <img
                  className="h-6 w-6 mx-6 "
                  src="/images/onboarding/Logo.png"
                  alt="Logo"
                />
                <p></p>
              </div>
              <div className="flex items-center justify-center flex-col  ">
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden md:inline h-full w-full h-screen over-flow-auto  lg:col-span-6 md:col-span-4">
          <img
            className="rounded-4xl w-full h-screen md:rounded-xl object-cover bg-cover"
            src="/images/onboarding/Illustration2.png"
            alt="illustration"
          />
        </div>
      </div>
    </>
  );
}
