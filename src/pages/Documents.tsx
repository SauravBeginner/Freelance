import { SidebarComp } from "../components/SidebarComp";
import StickyBox from "react-sticky-box";
import Home from "./Home";
import { BackgroundBoxesDemo } from "../components/BackGroundBoxes";
import { MyModal } from "../components/MyModal";
import { BottomGradient, LabelInputContainer } from "../components/SignupComp";
import { Label } from "../components/label";
import { Input } from "../components/Input";
import { IconBrandGoogle } from "@tabler/icons-react";
import { MdDeleteOutline } from "react-icons/md";

import { CardItem } from "../components/CardItem";
import { SearchBar } from "../components/SearchBar";
import { BackgroundBeams } from "../components/ui/background-beams";
import Instructors from "../components/Instructors";
import { useState } from "react";

const jsonData = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
  { id: 4, name: "John" },
  { id: 5, name: "Jane" },
  { id: 6, name: "Doe" },
];

const Documents = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <div style={{ display: "flex" }}>
          {/* <span className="fixed z-30 ">
            <StickyBox offsetTop={0} offsetBottom={0}>
              <SidebarComp />
            </StickyBox>
          </span> */}
          <div style={{ marginLeft: "", flex: 1, overflowY: "auto" }}>
            {/* <BackgroundBoxesDemo />
            <BackgroundBeams /> */}
            <span className="hidden md:block">
              <Instructors
                title="VerSion Vault Hub"
                description="Streamline document sharing with instant updates—create a public link that evolves effortlessly with the latest version."
                btnText="Create Document"
              />
            </span>
            <div className="pt-20 mt-20 lg:pt-0 lg:mt-0">
              <SearchBar />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                {jsonData.map((item) => (
                  <CardItem item={item} key={item.id} />
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
      </main>

      {/* <MyModal /> */}
    </>
  );
};

export default Documents;
