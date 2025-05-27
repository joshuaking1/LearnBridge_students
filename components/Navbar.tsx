import Link from "next/link";
import Image from "next/image";
import NavItems from "./Navitems";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />

        <SignedOut>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <button className="btn-signin cursor-pointer">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="btn-signin cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
