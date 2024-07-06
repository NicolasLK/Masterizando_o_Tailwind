import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(props: TextAreaProps) {
  return (
    <>
      <textarea
        {...props}
        className="min-h-[7.5rem] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
      />
    </>
  );
}
