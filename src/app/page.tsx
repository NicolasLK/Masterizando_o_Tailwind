/* Valores arbitrarios 
  Exemplo:
  bg-slate-[red]

  -> Evitar ao maximo utiliza-los
*/

import { SettingsTabs } from "../components/SettingsTabs";
import * as Input from "../components/Input";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="capitalize rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="capitalize rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  type="text"
                  defaultValue="Nicolas"
                />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Kaminski" />
              </Input.Root>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              e-mail address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="nicolas.loffi@gmail.com"
              />
            </Input.Root>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="yourPhoto"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>
            <div></div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="role"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              role
            </label>
            <Input.Root>
              <Input.Control
                id="role"
                type="text"
                defaultValue="Frontend Dev"
              />
            </Input.Root>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              country
            </label>
            <div></div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="timeZone"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              timezone
            </label>
            <div></div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="bio"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction.
              </span>
            </label>
            <div></div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="projects"
              className="capitalize text-sm font-medium text-zinc-700"
            >
              portifolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>
            <div className="flex items-center justify-end gap-2 pt-5">
              <button
                type="button"
                className="capitalize rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              >
                cancel
              </button>
              <button
                type="submit"
                className="capitalize rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
