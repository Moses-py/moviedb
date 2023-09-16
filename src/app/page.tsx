import Footer from "./components/footer/Footer";
import SliderWrapper from "./features/hero/SliderWrapper";
import Featured from "./features/movielist/Featured";
import Navbar from "./features/navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        {/* @ts-expect-serror Server Component */}
        <SliderWrapper />
        <Navbar />
      </div>
      {/* @ts-expect-serror Server Component */}
      <Featured />
      <Footer />
    </main>
  );
}
