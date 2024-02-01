import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface InputPrefixProps extends ComponentProps<"div"> {}

interface InputControlProps extends ComponentProps<"input"> {}

interface InputProps extends ComponentProps<"section"> {}

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />;
}

export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-1 mx-1 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}

export function Root(props: InputProps) {
  return (
    <section
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
