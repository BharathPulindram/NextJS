import Link from "next/link";
//import { signIn, signOut } from "next-auth/client";

function Navbar() {
  return (
    <div>
      <nav className="header">
        <h1 className="logo">
          <a href="#">NextAuth</a>
        </h1>
        <ul className={`main-nav`}>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
