import About from "../components/About";
import Hero from "../components/Hero";

export default function Try() {
  return (
    <div className="grid grid-rows-3">
      {/* hero section*/}
      <Hero />
      {/* about section*/}
      <About />

      {/* contact section*/}
      <div className="bg-pink-300"></div>
    </div>
  );
}
