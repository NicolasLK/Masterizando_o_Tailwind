"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useFileInput } from "./Root";
import { FileItem } from "./FileItem";

export function FileList() {
  const { files } = useFileInput();

  if (files.length === 0) {
    return null
  }
  const [parent] = useAutoAnimate();

  return (
    <>
      <div ref={parent} className="mt-4 flex flex-col gap-3">
        {files.map((file) => {
          return <FileItem key={file.name} name={file.name} size={file.size} type={file.type} state="error" />;
        })}
      </div>
    </>
  );
}
