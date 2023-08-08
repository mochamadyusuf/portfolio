import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero min-h-screen -mt-12 md:mt-10 md:min-h-full lg:min-h-screen lg:-mt-12">
      <div className="hero-content flex-col items-center md:flex-row-reverse md:gap-28 lg:gap-56">
        <Image
          src="/images/profile-hero.png"
          alt="Photo Profile"
          width={250}
          height={250}
          className="max-w-sm shadow-2xl rounded-3xl border-[4px] border-collapse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border border-transparent"
        />
        <div>
          <h1 className="text-3xl leading-10 mt-4 font-bold flex flex-col md:text-4xl md:leading-[60px] lg:text-5xl lg:leading-[70px]">
            <span>Hi 👋,</span> <span>My name is</span>{" "}
            <strong className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
              Mochamad Yusuf
            </strong>{" "}
            <span>I build things for web</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
