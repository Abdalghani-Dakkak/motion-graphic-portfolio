import { clients } from "@/constants/clients";
import { skills } from "@/constants/skills";

function InfoSection({ title, children }) {
  return (
    <div className="pt-8 pb-4">
      <h2 className="text-lg uppercase tracking-widest text-gray-400 mb-3">
        {title}
      </h2>
      <div className="text-white/90 text-lg lg:text-xl space-y-2">
        {children}
      </div>
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <div className="pt-8 pb-4">
      <h2 className="text-lg uppercase tracking-widest text-gray-400 mb-3">
        {title}
      </h2>
      <ul className="text-white/90 text-lg lg:text-xl space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 py-12 lg:py-20">
        <section className="max-w-4xl mx-auto mb-16">
          <InfoSection title="About">
            <p className="text-2xl lg:text-3xl !leading-relaxed">
              Felix Šoletić is a Croatian-born, New York-based freelance
              designer and creative lead with over 9 years of experience. Part
              graphic designer & typographer, part CG artist & photographer—his
              versatility allows him to contribute over a wide range of
              projects.
            </p>
          </InfoSection>

          <InfoSection title="Get In Touch">
            <a
              href="mailto:abdalghanidakkak@gmail.com"
              className="text-xl lg:text-3xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              motionGraphic@gmail.com
            </a>
          </InfoSection>
        </section>

        <hr className="border-gray-800" />

        <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <InfoSection title="Education">
              <p>Art Center College of Design — BFA, Transmedia Design</p>
            </InfoSection>

            <InfoSection title="Recognition">
              <p>3x Primetime Emmy Award Nominee</p>
              <p>Young Guns '18 — The One Club</p>
              <p>Communication Arts — Award of Excellence</p>
              <p>Cannes Lions — Design Silver Lion</p>
              <p>SXSW Film Festival — Excellence in Title Design</p>
            </InfoSection>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              <ListSection title="Skills" items={skills} />
              <ListSection title="Clients" items={clients} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
