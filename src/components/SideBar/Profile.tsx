import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <section className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/NicolasLK"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Nicolas Loffi Kaminski
        </span>
        <span className="text-sm text-zinc-500 truncate dark:text-zinc-400">
          nicolas.kaminski.2001@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </section>
  );
}
