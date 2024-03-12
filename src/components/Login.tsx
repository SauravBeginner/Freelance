import { IconBrandGoogle } from "@tabler/icons-react";
import { Input } from "./Input";
import { BottomGradient, LabelInputContainer } from "./SignupComp";
import { Label } from "./label";
import { Meteors } from "./ui/meteors";
import { useRef } from "react";
import { Img } from "./Img";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import FeaturedCourses from "./FeaturedCourses";

export function Login() {
  const GOOGLE_CLIENT_SECRET = "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";

  const responseGoogle = (response) => {
    console.log(response);
    // Send 'response.accessToken' to your server
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="first-line:min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <FeaturedCourses />
      <main className="hidden first-line:min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <div className="flex justify-center items-center h-screen">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start ">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 my-4">
                Welcome to{" "}
                <span className="text-customColor">VersionVaulHub</span>
              </h2>
              {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Login to aceternity if you can because we don&apos;t have a login
              flow yet
            </p>{" "} */}
              <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                Sign in with Google
              </h2> */}
                <div className="my-2">
                  <Img
                    src="../../public/logo.png"
                    alt="logo"
                    height="400"
                    width="400"
                    className="object-contain"
                  />

                  <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

                  <div className="text-center">
                    <button
                      className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                      type="submit"
                      onClick={login}
                    >
                      <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Sign in with Google
                      </span>
                      {/* <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    /> */}

                      <BottomGradient />
                    </button>

                    {/* <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Sign up &rarr;
                  <BottomGradient />
                </button> */}
                  </div>
                </div>
              </div>
              <p class="text-xs text-gray-300 mt-2">
                By logging in, you are agreeing to our{" "}
                <a href="/privacy-policy" class="text-blue-500">
                  Privacy Policy
                </a>{" "}
                and
                <a href="/terms-of-service" class="text-blue-500">
                  Terms of Service
                </a>
                . Your data will be handled in accordance with our privacy
                practices.
              </p>
              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
