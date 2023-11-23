//components
import RooImg from "./components/RooImg";
import CardGradient from "./components/CardGradient"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-12 sm:p-12 gap-4">
      <h1>Hello 👋</h1>
      <h2>I'm Ruairidh MacArthur</h2>
      <RooImg />
      <p>
        Or Roo for short, originally from Scotland but based in the North East.
        I build accessible and interesting experiences on the web.
      </p>
      <div className="rainbow w-8 h-8">A</div>
      <CardGradient />
    </main>
  );
}
