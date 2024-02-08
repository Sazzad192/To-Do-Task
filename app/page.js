import BaseNavbar from "@/components/BaseNavbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative">
      <section id="nav-bar" className="sticky top-0 z-10">
        <BaseNavbar />
      </section>
      <section id="Hero" className="">
        <Hero />
      </section>
    </div>
  );
}
