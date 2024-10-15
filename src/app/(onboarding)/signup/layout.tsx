/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid grid-cols-12  h-full w-full bg-noble-black-700">
        <div className="col-span-12 md:col-span-7  sm:col-span-7 lg:col-span-8">
          <div className="">
            <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
              {/* ------------------------------------------------Left Side---------------------------------------------------- */}
              <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl ">
                <div className="flex justify-between items-center mb-16">
                  <div className="text-2xl font-bold">
                    <img
                      className="h-6 w-6"
                      src="/images/onboarding/Logo.png"
                      alt="Logo"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-none stem-green-500"
                  >
                    Log In
                  </Button>
                </div>

                {/* ----------------------------------------SignUp form----------------------------------------------- */}
                {children}

                {/* ----------------------------------------Footer Part----------------------------------------------- */}
                <div className="flex justify-between items-center mt-20 text-sm text-gray-500">
                  <span>Formflex.io © 2024</span>
                  <Link href="/" className="text-gray-500">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Side Image----------------------------------------------------------- */}
        <div className="col-span-5 md:col-span-5 hidden sm:block lg:col-span-4 rounded-xl overflow-auto">
          <img
            className="h-screen w-full object-cover rounded-4xl md:rounded-xl"
            src="/images/onboarding/Illustration.png"
            alt="Illustration"
          />
        </div>
      </div>
    </>
  );
}
