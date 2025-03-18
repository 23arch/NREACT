import Image from "next/image";
import Menu from "./components/ui/menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-200">
      <h1 className="text-4xl font-bold mb-4 text-amber-600">Home</h1>
      <p className="text-lg text-gray-700 text-center max-w-md">
        In diesem Projekt kannst du Autos aktivieren und deaktivieren.
        Verwende die bereitgestellten Funktionen, um die Fahrzeuge nach deinen Wünschen zu verwalten.
      </p>
    </div>
  );
}
