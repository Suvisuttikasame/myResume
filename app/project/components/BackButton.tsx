"use client";
import { useRouter } from "next/navigation";

type props = {
  position: string;
};

export default function BackButton({ position = "" }: props) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`w-fit px-4 py-2 text-[#E63946] rounded-md border-solid border-[#E63946] border-2 ${
        position === "start"
          ? "self-start"
          : position === "end"
          ? "self-end"
          : position === "center"
          ? "self-center"
          : ""
      } hover:bg-[#E63946] hover:text-[#FFF]`}
    >
      Back
    </button>
  );
}
