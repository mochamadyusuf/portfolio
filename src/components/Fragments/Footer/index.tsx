const date = new Date();

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse items-center text-center gap-4 p-8 mt-16 md:mt-24 bg-neutral text-neutral-content leading-loose border-t-4 border-purple-400">
      <div>
        <p>
          Copyright © <time>{date.getFullYear()}</time> - All right reserved by
          <strong> Mochamad Yusuf</strong>
        </p>
      </div>
      <div className="inline-flex gap-4 bg-gradient-radial from-indigo-600 to-pink-400 text-transparent bg-clip-text font-bold">
        <a href="" className="hover:text-white">
          Github
        </a>
        <a href="" className="hover:text-white">
          Instagram
        </a>
        <a href="" className="hover:text-white">
          Whatsapp
        </a>
        <a href="" className="hover:text-white">
          Linkedin
        </a>
      </div>
    </footer>
  );
}
