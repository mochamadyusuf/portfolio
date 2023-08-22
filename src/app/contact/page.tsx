export default function Contact() {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center gap-y-3">
        <h1 className="text-xl md:text-4xl font-bold">
          For any questions please mail to:
        </h1>
        <a
          href="https://mailto:mochamadd.yusuf@gmail.com"
          target="_blank"
          className="text-lg md:text-2xl font-bold bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent hover:text-indigo-500 hover:underline"
        >
          mochamadd.yusuf@gmail.com
        </a>
      </section>
    </main>
  );
}
