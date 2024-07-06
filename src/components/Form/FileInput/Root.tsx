"use client";
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

interface RootProps extends ComponentProps<"div"> {}

interface FileInputContextProps {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void; // Tipagem diferenciada para a funcao de setar ESTADO
}

const FileInputContext = createContext({} as FileInputContextProps); // Contexto para ter propriedades dinamicas no Input

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFileSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <>
      <FileInputContext.Provider
        value={{ id, files, onFilesSelected: onFileSelected }}
      >
        <div {...props} />
      </FileInputContext.Provider>
    </>
  );
}

export const useFileInput = () => useContext(FileInputContext);
