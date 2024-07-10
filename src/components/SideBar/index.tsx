import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Search,
  Users,
  LifeBuoy,
  Cog,
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";

export function SideBar() {
  return (
    <>
      <aside className="flex flex-col gap-6 border-b border-zinc-200 fixed left-0 top-0 right-0 bottom-0 z-20 bg-white p-4 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
        <Logo />

        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <section className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>
        </section>

        <UsedSpaceWidget />

        <hr />

        <Profile />
      </aside>
    </>
  );
}
