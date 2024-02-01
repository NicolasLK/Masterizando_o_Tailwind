/* Valores arbitrarios 
  Exemplo:
  bg-slate-[red]

  -> Evitar ao maximo utiliza-los
*/

import { SettingsTabs } from "../components/SettingsTabs";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />
    </>
  );
}
