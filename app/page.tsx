import CurrencyForm from "./components/CurrencyForm";
import { Equal } from "lucide-react";

export default function Home() {
  return (
    <main className="container flex flex-col items-center gap-12 p-12 mx-auto grow">
      <h2 className="text-4xl font-bold tracking-wide text-purple-800">
        Конвертер валют
      </h2>

      <section className="flex items-center gap-2">
        <CurrencyForm />

        <Equal className="self-end pb-1" size={45} color="#6b21a8" />

        <CurrencyForm />
      </section>
    </main>
  );
}
