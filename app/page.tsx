import CardSofi from './components/CardSofi';
import MapaHome from './components/MapaHome';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <BlockImage />
      <CardSofi />
      <MapaHome />
    </main>
  );
}
