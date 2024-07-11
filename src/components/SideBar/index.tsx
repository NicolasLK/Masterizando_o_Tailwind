"use client"
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
  Menu,
} from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible"
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";
import { Button } from "../Button";

export function SideBar() {
  return (
    <>
      <Collapsible.Root className="flex flex-col gap-6 border-b border-zinc-200 fixed left-0 top-0 right-0 data-[state=open]:bottom-0 data-[state=open]:h-screen z-20 bg-white p-4 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <Logo />
          <Collapsible.Trigger asChild className="lg:hidden">
            <Button variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </Collapsible.Trigger>
        </div>


        <Collapsible.Content forceMount className="flex flex-col flex-1 gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
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
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
}
