import { Input } from "./Input";
import { BottomGradient, LabelInputContainer } from "./SignupComp";
import { Label } from "./label";
import { Meteors } from "./ui/meteors";
import { useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IconCircleX } from "@tabler/icons-react";

export function MyModal({
  onClose,
  title = "Enter Your Username",
  label = "Username",
  placeholder = "projectmayhem@fc.com",
  btnText = "Sign Up",
}) {
  const inputRef = useRef<HTMLInputElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userNameInputRef = inputRef.current?.value;
    console.log("Form submitted!\n Value:", userNameInputRef);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center h-screen bg-black bg-opacity-50 z-40">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <button
          className="absolute top-0 right-0 mx-4 my-2 z-10"
          onClick={onClose}
        >
          <IconCircleX size={30} />
        </button>
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-12 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
              {title}
            </h2>
            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <Label className="mb-2" htmlFor="username">
                  {label}
                </Label>
                <Input
                  id="username"
                  placeholder={placeholder}
                  type="text"
                  required={true}
                  ref={inputRef}
                />
              </LabelInputContainer>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

              <div className="text-center">
                {/* <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Google
                  </span>
                  <BottomGradient />
                </button> */}
                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  {btnText} &rarr;
                  <BottomGradient />
                </button>
              </div>
            </form>
          </div>
          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={20} /> */}
        </div>
      </div>
    </div>
  );
}
