import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

export function Select() {
  return (
    <>
      <SelectPrimitive.Root>
        <SelectPrimitive.Trigger className="flex w-full h-11 items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
          <SelectPrimitive.Value
            placeholder="Select a country..."
            className="text-black"
          />
          <SelectPrimitive.Icon>
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            side="bottom"
            position="popper"
            sideOffset={8}
            className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden"
          >
            <SelectPrimitive.Viewport>
              <SelectPrimitive.Item
                value="Br"
                className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none cursor-pointer data-[highlighted]:bg-zinc-100"
              >
                <SelectPrimitive.ItemText className="text-black">
                  Brazil
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <Check className="w-4 h-4 text-violet-500" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
              <SelectPrimitive.Item
                value="Jp"
                className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none cursor-pointer data-[highlighted]:bg-zinc-100"
              >
                <SelectPrimitive.ItemText className="text-black">
                  Japan
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <Check className="w-4 h-4 text-violet-500" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </>
  );
}
