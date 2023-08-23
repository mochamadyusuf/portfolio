import { ADD_LINK } from "./script";

const date = new Date();

export default function Footer() {
  return (
    <footer className="footer flex flex-col-reverse items-center text-center gap-4 p-8 mt-16 md:mt-24 bg-neutral text-neutral-content leading-loose border-t-4 border-purple-400">
      <div>
        <p>
          Copyright © <time>{date.getFullYear()}</time> - All right reserved by
          <strong> Mochamad Yusuf</strong>
        </p>
      </div>
      <div className="inline-flex gap-4 bg-gradient-radial from-indigo-600 to-pink-400 text-transparent bg-clip-text font-bold">
        {ADD_LINK.map((GET_LINK, index) => (
          <a
            href={GET_LINK.path}
            key={index}
            target="_blank"
            className="hover:text-white"
          >
            {GET_LINK.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
