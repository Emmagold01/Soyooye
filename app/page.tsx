import Navbar from "./component/Navbar.component";
import Hero from "./component/Hero.component";
import Portfolio from "./component/Portfolio.component";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Portfolio />
    </div>
  );
}
