import Image from "next/image";

export default function HeroAbout() {
  return (
    <>
      <Image
        src="/images/profile.png"
        alt="Photo Profile"
        width={200}
        height={0}
        className="avatar lg:rounded-2xl lg:ring lg:ring-teal-500 lg:shadow-lg lg:shadow-black mb-4"
      />
      <h1 className="text-3xl font-bold">Mochamad Yusuf</h1>
      <p className="text-sm">Web Developer | Front-End Developer</p>
    </>
  );
}
