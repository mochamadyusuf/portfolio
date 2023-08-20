import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <div className="navbar-brand pr-2 lg:pr-0">
      <div className="avatar">
        <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Link href="/">
            <Image
              src="/images/profile-hero.png"
              width={30}
              height={0}
              alt="next logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
