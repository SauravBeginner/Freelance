import { FeaturedSection } from "../components/FeaturedSection";
import { Img } from "../components/Img";
import { Login } from "../components/Login";
import { LeftLamp } from "../components/LeftLamp";
import { SignupComp } from "../components/SignupComp";
import FeaturedCourses from "../components/FeaturedCourses";

const Signup = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-1 w-[40%] lg:w-[30%] hidden lg:block">
        <LeftLamp />
      </div>

      <div className="flex-1 w-[60%] lg:w-[70%] first-line:min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <SignupComp /> */}
        <FeaturedCourses />
      </div>
    </div>
  );
  Img;
};

export default Signup;
