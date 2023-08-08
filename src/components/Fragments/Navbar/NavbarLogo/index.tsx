import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <div className="navbar-brand pr-2 lg:pr-0">
      <Link href="/">
        <Image src="/next.svg" width={100} height={100} alt="next logo" />
      </Link>
    </div>
  );
}
