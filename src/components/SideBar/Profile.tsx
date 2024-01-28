import { LogOut } from "lucide-react";
// import Image from "next/image";
// import UserImg from "../../../public/UserImg.png";

export function Profile() {
  return (
    <section className="grid items-center gap-3 grid-cols-profile">
      {/* <Image src={UserImg} width={40} height={40} alt="" /> */}
      <img
        src="https://github.com/NicolasLK"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Nicolas Loffi Kaminski
        </span>
        <span className="text-sm text-zinc-500 truncate">
          nicolas.kaminski.2001@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </section>
  );
}
