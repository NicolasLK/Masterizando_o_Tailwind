import { ChevronDown } from "lucide-react";
import {twMerge} from "tailwind-merge"
import { ElementType } from "react";

interface NavItemProps {
  title: string;
  icon: ElementType;
}

/* Metodo de agrupamento:
    Aplicar o atributo "group" no elemento Pai, depois aplique no elemento Filho.
*/

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <>
      <a
        className={twMerge(
          'group flex items-center gap-3 rounded px-3 py-2 outline-none',
          'hover:bg-violet-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
          'dark:bg-zinc-800',
        )}
        href=""
      >
        <Icon className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
          {title}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
      </a>
    </>
  );
}
