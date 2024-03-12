import React from "react";
import { MyProfile } from "../components/MyProfile";

const Profile = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="pt-20 my-20">
        <MyProfile />
      </div>
    </main>
  );
};

export default Profile;
