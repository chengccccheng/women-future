import { Instagram } from "lucide-react";
import plantingMethod from "@/assets/planting_method.png";

const INSTAGRAM_URL =
  "https://www.instagram.com/weaving_herstory?igsh=MXB0MG9weHN1YWduZQ%3D%3D&utm_source=qr";

const Index = () => {
  return (
    <div className="min-h-screen bg-hero">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-light leading-relaxed text-hero-foreground tracking-wide">
          Let fashion bloom,
          <br />
          live with nature
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-hero-foreground font-medium tracking-widest">
          讓時裝萌芽，與自然共生
        </p>

        {/* Instagram Button */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-center gap-3 rounded-md border-2 border-hero-foreground px-12 py-4 text-lg text-hero-foreground transition-colors hover:bg-hero-foreground hover:text-hero"
        >
          <Instagram className="h-5 w-5" />
          Our Stories
        </a>
      </section>

      {/* Planting Method Image */}
      <section className="flex justify-center px-6 pb-20">
        <img
          src={plantingMethod}
          alt="Planting method of seed paper - 種籽紙的種植"
          className="w-full max-w-lg rounded-2xl shadow-lg"
        />
      </section>
    </div>
  );
};

export default Index;
