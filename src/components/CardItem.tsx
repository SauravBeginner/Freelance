// "use client";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import { IoCreate } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { MyModal } from "./MyModal";

export function CardItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setIsModalDetails] = useState({
    title: "",
    label: "",
    placeholder: "",
    btnText: "",
  });
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex py-10 items-center justify-center antialiased">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>{item.name}</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <span
              className="h-10 w-10 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setIsModalDetails({
                  title: "Update Document",
                  label: "New Document Name",
                  placeholder: "Enter Document Name",
                  btnText: "Update Document",
                });
              }}
            >
              <FaRegEdit size={18} />
            </span>
            <div
              className="h-10 w-10 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setIsModalDetails({
                  title: "Delete Document",
                  label: "Document Name",
                  placeholder: "Document Name",
                  btnText: "Delete Document",
                });
              }}
            >
              <MdDeleteOutline size={25} />
            </div>
            <div
              className="h-10 w-10 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setIsModalDetails({
                  title: "Create Document",
                  label: "Document Name",
                  placeholder: "Enter Document Name",
                  btnText: "Create Document",
                });
              }}
            >
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
      {isModalOpen && (
        <MyModal
          title={modalDetails.title}
          label={modalDetails.label}
          placeholder={modalDetails.placeholder}
          onClose={closeModal}
          btnText={modalDetails.btnText}
        />
      )}
    </>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
