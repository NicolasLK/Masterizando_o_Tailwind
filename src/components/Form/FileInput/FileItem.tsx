import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { formateBytes } from "../../../utils/formate-bytes";
import { Button } from "../../Button";

interface FileItemProps {
  name: string;
  size: number;
}

export function FileItem({ name, size }: FileItemProps) {
  const state = "error" as "progress" | "error" | "complete";

  return (
    <>
      <div className="group flex items-start gap-4 rounded-lg border border-zinc-200">
        <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
          <UploadCloud className="h-4 w-4" />
        </div>

        {state === "error" ? (
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-error-700">
                Upload failed, please try again.
              </p>
              <p className="text-sm text-error-600">{name}</p>
            </div>

            <button
              type="button"
              className="text-sm font-semibold text-error-700 hover:text-error-900"
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-zinc-700">{name}</p>
              <p className="text-sm text-zinc-500">{formateBytes(size)}</p>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div
                  className="h-2 rounded-full bg-violet-600"
                  style={{ width: state === "complete" ? "100%" : "90%" }}
                />
              </div>
              <span className="text-sm font-medium text-zinc-700">
                {state === "complete" ? "100%" : "90%"}
              </span>
            </div>
          </div>
        )}

        {state === "complete" ? (
          <CheckCircle2 className="w-5 h-5 fill-violet-600 text-white" />
        ) : (
          <Button type="button" variant="ghost">
            <Trash2 className="h-5 w-5 text-zinc-500" />
          </Button>
        )}
      </div>
    </>
  );
}
