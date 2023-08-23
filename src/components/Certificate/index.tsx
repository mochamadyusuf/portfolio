import Image from "next/image";
import { certificates } from "./script";

export default function Certificate() {
  return (
    <article className="mb-12">
      <h2 className="subheading-about mb-4">Certificate</h2>
      <ul className="flex flex-wrap justify-center gap-8 lg:gap-6 p-8 lg:p-4 lg:py-8 rounded-xl shadow-xl shadow-slate-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {certificates.map((certificate, index) => (
          <li key={index}>
            <Image
              src={certificate.source}
              alt={certificate.name}
              width={300}
              height={0}
              style={{ width: "auto" }}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
