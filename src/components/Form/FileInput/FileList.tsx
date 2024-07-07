'use client'
import { Trash2, UploadCloud } from 'lucide-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useFileInput } from './Root'
import { formateBytes } from '../../../utils/formate-bytes'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <>
      <div ref={parent} className="mt-4 space-y-3">
        {files.map((file) => {
          return (
            <>
              <div
                key={file.name}
                className="group flex items-start gap-4 rounded-lg border border-zinc-200"
              >
                <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
                  <UploadCloud className="h-4 w-4" />
                </div>

                <div className="flex flex-1 flex-col items-start gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-zinc-700">
                      {file.name}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {formateBytes(file.size)}
                    </p>
                  </div>

                  <div className="flex w-full items-center gap-3">
                    <div className="h-2 flex-1 rounded-full bg-zinc-100">
                      <div className="h-2 rounded-full bg-violet-600 w-4/5" />
                    </div>
                    <span className="text-sm font-medium text-zinc-700">
                      90%
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
                >
                  <Trash2 className="h-5 w-5 text-zinc-500" />
                </button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
