import Card from "./Card";

export default function Project() {
  return (
    <section
      id="project"
      className="min-h-screen mt-12 px-4 py-10 md:mt-28 lg:mt-36 lg:px-0"
    >
      <div className="leading-10 text-center mb-5">
        <h2 className="text-3xl font-bold underline">Projects</h2>
        <p className="italic">Things I&apos;ve built so for</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-4 p-8 lg:p-4 rounded-xl shadow-xl shadow-slate-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Card />
      </div>
    </section>
  );
}
