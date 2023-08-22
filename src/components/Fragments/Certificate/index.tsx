import Image from "next/image";

export default function Certificate() {
  return (
    <article className="mb-12">
      <h2 className="subheading-about mb-4">Certificate</h2>
      <ul className="flex flex-wrap justify-center gap-8 lg:gap-6 p-8 lg:p-4 lg:py-8 rounded-xl shadow-xl shadow-slate-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <li>
          <Image
            src="/images/sas.jpg"
            alt="sas cetificate"
            width={300}
            height={0}
          />
        </li>
        <li>
          <Image src="/images/haltev.jpg" alt="haltev" width={300} height={0} />
        </li>
        <li>
          <Image
            src="/images/Dicoding_Web.jpg"
            alt="Dicoding_Web"
            width={300}
            height={0}
          />
        </li>
        <li>
          <Image
            src="/images/Camp404_Web.jpg"
            alt="Camp 404"
            width={300}
            height={0}
          />
        </li>
        <li>
          <Image
            src="/images/Solo_Learn_CSS.jpg"
            alt="Solo_Learn_CSS"
            width={300}
            height={0}
          />
        </li>
        <li>
          <Image
            src="/images/Webinar_React.jpg"
            alt="Webinar_React"
            width={300}
            height={0}
          />
        </li>
      </ul>
    </article>
  );
}
