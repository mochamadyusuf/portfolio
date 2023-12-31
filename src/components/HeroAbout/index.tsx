import Image from "next/image";
import "animate.css";

export default function HeroAbout() {
  return (
    <div className="animate__animated animate__zoomIn">
      <Image
        src="/images/profile-about.png"
        alt="profile about"
        width={200}
        height={200}
        className="avatar lg:rounded-2xl lg:ring lg:ring-teal-500 lg:shadow-lg lg:shadow-black mb-4"
      />
      <h1 className="text-3xl font-bold">Mochamad Yusuf</h1>
      <p className="text-sm">Web Developer | Front-End Developer</p>
    </div>
  );
}
